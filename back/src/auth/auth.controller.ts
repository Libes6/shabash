import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';
import {RefreshTokenDto} from "./dto/refresh-token.dto";


@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @UsePipes(new ValidationPipe())
  @Post('register')
  create(@Body() Dto: AuthDto) {
    return this.authService.create(Dto);
  }

  @UsePipes(new ValidationPipe())
  @Post('login')
  login(@Body() Dto: AuthDto) {
    return this.authService.login(Dto);
  }

  @UsePipes(new ValidationPipe())
  @Post('login/access-token')
  getNewToken(@Body() Dto: RefreshTokenDto) {
    return this.authService.getNewToken(Dto.refreshToken);
  }
  @Get('hi')
  get(@Body() createAuthDto: AuthDto) {
    return 'hi'
  }

}
