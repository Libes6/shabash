import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '../prisma.service';
import { returnUserObject } from './return-user.object';
import { Prisma } from '@prisma/client';
import { UserDto } from './dto/user.dto';
import { hash } from 'argon2';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async byId(id: number, selectObject: Prisma.UserSelect = {}) {
    const user = await this.prisma.user.findUnique({
      where: { id },
      select: {
        ...returnUserObject,
        chat: {
          select: {
            id:true,
            userId:true,

          },
        },
        ...selectObject,
      },
    });
    if (!user) throw new Error('user not found');

    return user;
  }

  findOne(id: number) {
    return this.byId(id);
  }
  test() {
    return this.prisma.chatMessage.create({
      data:{
        chatId:1,
        text:'dasda',
        images:'dsa',
        tag:'',
        flag:'',
        
        User:{
          connect:{
            id:1
          }
        }
      }
    })
  }

  async updateProfile(id: number, Dto: UserDto) {
    const isSameUser = await this.prisma.user.findUnique({
      where: { email: Dto.email },
    });

    if (isSameUser && id !== isSameUser.id)
      throw new BadRequestException('Email alredy in use');
    const user = await this.byId(id);
    return this.prisma.user.update({
      where: { id },
      data: {
        email: Dto.email,
        username: Dto.name,
        image: Dto.image,
        phone: Dto.phone,
        password: Dto.password ? await hash(Dto.password) : user.password,
      },
    });
  }



}
