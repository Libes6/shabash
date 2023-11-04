import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    UsePipes,
    ValidationPipe,
    HttpCode,
    Put, Query
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {AuthDto} from "../auth/dto/auth.dto";
import {Auth} from "../auth/decorators/auth.decorator";
import {CurrentUser} from "../auth/decorators/user.decorator";
import {UserDto} from "./dto/user.dto";

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('profile')
  @Auth()
   async getProfile(@CurrentUser('id') id:number) {
    return this.userService.byId(id)
  }
  @Get('message')

   async message() {
    return this.userService.test()
  }

    @UsePipes(new ValidationPipe())
    @HttpCode(200)
    @Auth()
    @Put('profile')
    async updateProfile(@CurrentUser('id') id:number,@Body() Dto: UserDto) {
        return this.userService.updateProfile(id,Dto);
    }


}
