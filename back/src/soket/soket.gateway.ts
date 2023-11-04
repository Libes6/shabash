import {MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer} from '@nestjs/websockets';
import { SoketService} from './soket.service';
import {Server}from 'socket.io'
import {OnModuleInit} from "@nestjs/common";
@WebSocketGateway(4201,{ cors: '*:*' })
export class ChatGateway implements OnModuleInit{
  constructor(private readonly chatService: SoketService) {}
  @WebSocketServer()
  server:Server
  onModuleInit(): any {
    this.server.on('connection', socket => {
      socket.on('message', message => {
        console.log(message);
      });
    });
  }

  @SubscribeMessage('NewMessage')
  handleEvent(@MessageBody() data: any){


    this.server.emit('NewMessage', data);
    return  this.chatService.create(data)
  }
}
