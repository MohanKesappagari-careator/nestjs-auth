import { LocalAuthGuard } from './auth/Guards/local-auth.guard';
import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';
import { AuthenticatedGuard } from './auth/Guards/authenticated.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req) {
    return req.user;
  }
  @UseGuards(AuthenticatedGuard)
  @Get()
  getHello(@Request() req) {
    return req.user;
  }
}
