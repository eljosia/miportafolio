import { Controller } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Body, Post, Get } from '@nestjs/common/decorators';
import * as bcrypt from 'bcrypt';



@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
  ) {}

  @Post('login')
  login(@Body() body: { email: string; password: string }) {
    return this.authService.login(body.email, body.password);
  }
}

