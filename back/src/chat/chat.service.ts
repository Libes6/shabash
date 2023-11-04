import { Injectable } from '@nestjs/common';
import {PrismaService} from "../prisma.service";

@Injectable()
export class ChatService {
    constructor(private prisma: PrismaService) {
    }


    getMessage(){
        return this.prisma.chatMessage.findMany();
    }
    create(data: any){
      return   this.prisma.chatMessage.create({
            data:{
                chatId:1,
                text:data.text,
                images:'dsa',
                tag:'',
                flag:'',

                User:{
                    connect:{
                        id:data.user.id
                    }
                }
            }
        })
    }
}
