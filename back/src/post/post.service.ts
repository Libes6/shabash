import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import {PrismaService} from "../prisma.service";

@Injectable()
export class PostService {
  constructor(private prisma: PrismaService) {}
  create(createPostDto: CreatePostDto) {
    return 'This action adds a new post';
  }

  findAll() {
    return this.prisma.post.findMany({
     select: {
       id: true,
       title: true,
       content: true,
       createdAt: true,
       likes:true,
       views:true,
       tag:true,
       flag:true,
       images:true,
       user:{
         select:{
           id: true,
           username: true,
           email: true,
           image:true,
         }
       },
       review:{
         select:{
           id:true
         }
       }
     }
    })
  }

  findOne(id: number) {
    return `This action returns a #${id} post`;
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
