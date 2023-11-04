import axios from 'axios';

import { ICategory } from '@/types/category.interface';

import {
  getContentType,
  getContentTypeImage,
} from '@/api/api.helper';
import { instance } from '@/api/api.interceptor';

const FILES = 'files';
export const FilesService = {
  async upload(file: any) {
    return axios({
      url: `http://localhost:4200/api/files/upload `,
      headers: getContentTypeImage(),

      method: 'POST',
      data: { file: file },
    });
  },
  async getUrl(url: string) {
    return instance({
      url: `${FILES}/upload`,
      method: 'Get',
      data: url,
    });
  },
};
