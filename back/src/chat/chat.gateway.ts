import {
    ConnectedSocket,
    MessageBody,
    OnGatewayConnection,
    SubscribeMessage,
    WebSocketGateway,
    WebSocketServer
} from '@nestjs/websockets';
import { ChatService} from './chat.service';
import {Server, Socket}from 'socket.io'
import {OnModuleInit} from "@nestjs/common";
@WebSocketGateway(4201,{ cors: '*:*' })
export class ChatGateway implements OnModuleInit,OnGatewayConnection{
    constructor(private readonly chatService: ChatService) {}
    @WebSocketServer()
    server:Server

    @SubscribeMessage('message')
    handleConnection(client: Socket, ...args: any[]) {
        const userName = client.handshake.query.userName as string;
        const socketId = client.id;
        client.broadcast.emit("log", `${userName} connected`);
    }

    onModuleInit(): any {
        this.server.on('connection', socket => {

            socket.on('message', message => {
                console.log(message);
                // const data = this.chatService.getMessage()
                // this.server.emit('connection', data);
            });
        });
    }
    connect(@ConnectedSocket() data: Socket){
        console.log(data);
    }
    @SubscribeMessage('NewMessage')
    handleEvent(@MessageBody() data: any){
        this.server.emit('NewMessage', data);
        console.log(data);
        return  this.chatService.create(data)
    }
    afterInit(server: Server) {
        console.log(server);
    }

}
