import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import * as passport from 'passport';
import { getRepository } from 'typeorm';
import { TypeOrmSession } from './user/entities/session.entity';
import { TypeormStore } from 'connect-typeorm/out';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const sessionRepo = getRepository(TypeOrmSession);
  app.use(
    session({
      secret: 'secret',
      resave: false,
      saveUninitialized: false,
      cookie: { maxAge: 36000000 },
      store: new TypeormStore().connect(sessionRepo),
    }),
  );
  app.use(passport.initialize());
  app.use(passport.session());
  await app.listen(3000);
}
bootstrap();
