import {Body, Controller, Get, HttpException, HttpStatus, Post, UploadedFile, UseInterceptors} from '@nestjs/common';
import { FilesService } from './files.service';
import {CreatePostDto} from "../post/dto/create-post.dto";
import {FileInterceptor} from "@nestjs/platform-express";
import { extname } from 'path';
import {existsSync, mkdirSync } from 'fs';
import { diskStorage } from 'multer';

export const multerConfig = {
    dest: './upload',
};

// Multer upload options
export const multerOptions = {

    fileFilter: (req: any, file: any, cb: any) => {
        if (file.mimetype.match(/\/(jpg|jpeg|png|gif)$/)) {
            // Allow storage of file
            cb(null, true);
        } else {
            // Reject file
            cb(new HttpException(`Unsupported file type ${extname(file.originalname)}`, HttpStatus.BAD_REQUEST), false);
        }
    },
    // Storage properties
    storage: diskStorage({
        // Destination storage path details
        destination: (req: any, file: any, cb: any) => {
            const uploadPath = multerConfig.dest;
            // Create folder if doesn't exist
            if (!existsSync(uploadPath)) {
                mkdirSync(uploadPath);
            }
            cb(null, uploadPath);
        },
        // File modification details
        filename: (req: any, file: any, cb: any) => {
            // Calling the callback passing the random name generated with the original extension name
            cb(null, `${extname(file.originalname)}`);
        },
    }),
};
@Controller('files')
export class FilesController {
  constructor(private readonly filesService: FilesService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file', {
      storage: diskStorage({
          destination: './uploads'
          , filename: (req, file, cb) => {
              // Generating a 32 random chars long string
              const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('')
              //Calling the callback passing the random name generated with the original extension name
              // cb(null, `max${extname(file.originalname)}`)
              cb(null, `${randomName}${extname(file.originalname)}`)

          }
      })
  }))
  create(@UploadedFile() file:Express.Multer.File) {
   console.log(file.filename)
    return {
      file: {
        "url":`http://localhost:4200/${file.filename}`
      }
    }
  }

  @Get('upload')
  get(@Body() file: any) {
    console.log(file)
   return {
      file: {

        url:'https://w.forfun.com/fetch/b1/b1f74a00706ac59ec75daa8ab0ac8e90.jpeg'
      }
    }
  }


}
