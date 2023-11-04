import { Module } from '@nestjs/common';
import { SoketService } from './soket.service';

import {PrismaService} from "../prisma.service";


@Module({
  providers: [SoketService,PrismaService]
})
export class SoketModule {}
