import { UserService } from './../user/user.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}
  async validateUser(email: string, password: string) {
    const user = await this.userService.findUser(email);
    if (user && user.password === password) {
      const { password, email, ...rest } = user;
      return rest;
    }
    return null;
  }
}
