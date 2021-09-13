import { HealthController } from './health.controller';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { HealthCheckService, TerminusModule } from '@nestjs/terminus';
@Module({
  imports: [AuthModule, UserModule, TypeOrmModule.forRoot({}), TerminusModule],
  controllers: [AppController, HealthController],
  providers: [AppService],
})
export class AppModule {}
