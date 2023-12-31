import {
  BadRequestException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';

import { User } from '@prisma/client';
import { AuthDto } from './dto/auth.dto';
import { PrismaService } from 'src/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { RefreshTokenDto } from './dto/refresh-token.dto';
import {hash} from "argon2";

const argon = require('argon2');
@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService, private jwt: JwtService) {}
  async create(dto: AuthDto) {
    const oldUser = await this.prisma.user.findUnique({
      where: { email: dto.email },
    });
    if (oldUser) throw new BadRequestException('user alredu exist');

    // const user = await this.prisma.user.create({
    //   data: {
    //     email: dto.email,
    //     username: dto.username,
    //     password: await hash(dto.password),
    //   },
    // });
    const user = await  this.prisma.user.create({
      data:{
        email:dto.email,
        username:dto.username,
        password:await hash(dto.password)
      }
    })
    const tokens = await this.issueTokens(user.id);
    return {
      user: this.returnUserFields(user),
      ...tokens,
    };
  }
  private async issueTokens(userId: number) {
    const data = { id: userId };
    const accessToken = this.jwt.sign(data, {
      expiresIn: '1h',
    });
    const refreshToken = this.jwt.sign(data, {
      expiresIn: '7d',
    });

    return { refreshToken, accessToken };
  }

  async login(dto: AuthDto) {
      console.log(dto)
    const user = await this.validateUser(dto);
    const tokens = await this.issueTokens(user.id);

    const role = await this.prisma.roles.findUnique({
      where:{id:user.rolesId}
    })
    return {
      user: this.returnUserFields(user),
      isAdmin:role.isAdmin,
      ...tokens,
    };
  }
  async getNewToken(refreshToken: string) {
    const result = await this.jwt.verifyAsync(refreshToken);
    if (!result) throw new UnauthorizedException('Invalid refresh token');
    const user = await this.prisma.user.findUnique({
      where: { id: result.id },
    });

    const tokens = await this.issueTokens(user.id);
    return {
      user: this.returnUserFields(user),
      ...tokens,
    };
  }

  private  returnUserFields(user: User) {
      // console.log(user)

    return {
      id: user.id,
      email: user.email,

    };
  }
  private async validateUser(dto: AuthDto) {

  const user = await  this.prisma.user.findUnique({
    where:{email:dto.email}
  })

    if (!user) throw new NotFoundException('User not found');

    const isValid = await argon.verify(user.password, dto.password);
    if (!isValid) throw new UnauthorizedException('Invalid password');
    return user;
  }
}
