import { LocalAuthGuard } from './Guards/local-auth.guard';
import { AuthService } from './auth.service';
import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Request() req: any) {
    console.log(req.user);
    return this.authService.login(req.user);
    return req.user;
  }
}
