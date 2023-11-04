import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { PrismaService } from './prisma.service';
import { UserModule } from './user/user.module';
import { PostModule } from './post/post.module';
import { ChatModule } from './chat/chat.module';
import { SoketModule } from './soket/soket.module';
import { FilesModule } from './files/files.module';
import { join } from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';



@Module({
  imports: [ConfigModule.forRoot(),AuthModule, UserModule,PostModule, ChatModule, SoketModule, FilesModule,ServeStaticModule.forRoot({
    rootPath: join(__dirname, '..', 'uploads'),

  }),],
  controllers: [AppController],
  providers: [AppService,PrismaService],
})
export class AppModule {}
