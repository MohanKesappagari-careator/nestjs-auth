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
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './strategy/jwt-strategy';
import { RoleGuard } from './Guards/role.guard';

@Module({
  imports: [
    UserModule,
    PassportModule.register({ session: true }),
    JwtModule.register({ secret: 'SECRET', signOptions: { expiresIn: '5m' } }),
  ],
  providers: [
    AuthService,
    LocalStrategy,
    SessionSerializer,
    GoogleService,
    GoogleStrategy,
    JwtStrategy,
    RoleGuard,
  ],
  controllers: [AuthController, GoogleController],
  exports: [AuthService],
})
export class AuthModule {}
