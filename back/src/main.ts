import { AppModule } from './app.module';
import { PrismaService } from './prisma.service';
import { NestFactory } from '@nestjs/core';

const PizZip = require('pizzip');
const Docxtemplater = require('docxtemplater');

const fs = require('fs');
const path = require('path');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.useStaticAssets(join(__dirname, '..', 'public'), {
  //   index: false,
  //   prefix: '/public',
  // });
  const prismaService = app.get(PrismaService);
  await prismaService.enableShutdownHooks(app);
  app.enableCors();
  app.setGlobalPrefix('api');
  await app.listen(4200);
  console.log(__dirname);
}
bootstrap();
