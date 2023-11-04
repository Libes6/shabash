import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class SoketService {
   constructor(private prisma: PrismaService) {
   }
    create(data: any){
          this.prisma.chatMessage.create({
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
}
