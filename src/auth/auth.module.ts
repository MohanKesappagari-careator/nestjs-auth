import { LocalStrategy } from './strategy/local.strategy';
import { UserModule } from './../user/user.module';
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { SessionSerializer } from './serializer/session.serializer';
import { PassportModule } from '@nestjs/passport';
import { GoogleService } from './google.service';
import { GoogleStrategy } from './strategy/google.strategy';
import { GoogleController } from './google.controller';

@Module({
  imports: [UserModule, PassportModule.register({ session: true })],
  providers: [
    AuthService,
    LocalStrategy,
    SessionSerializer,
    GoogleService,
    GoogleStrategy,
  ],
  controllers: [AuthController, GoogleController],
})
export class AuthModule {}
