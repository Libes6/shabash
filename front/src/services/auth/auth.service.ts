import axios from 'axios';
import Cookies from 'js-cookie';
import * as process from 'process';

import {
  IAuthResponse,
  IEmailPassword,
} from '@/store/user/user.interface';

import { getContentType } from '@/api/api.helper';
import { instance } from '@/api/api.interceptor';

import {
  saveToStorage,
  saveTokenStorage,
} from '@/services/auth/auth.helper';

export const AuthService = {
  async main(
    type: 'login' | 'register',
    data: IEmailPassword,
  ) {
    const response = await instance<IAuthResponse>({url:`/auth/${type}`,method:"POST",data}
    );

    if (response.data.accessToken)
      saveToStorage(response.data);
    return response.data;
  },


  async getNewTokens() {
    const refreshToken = Cookies.get('refreshToken');
    const baseUrl = process.env.SERVER_URL;
    const response = await axios.post<
      string,
      { data: IAuthResponse }
    >(
      `${baseUrl}/auth/login/access-token`,
      { refreshToken },
      { headers: getContentType() },
    );

    if (response.data.accessToken)
      saveTokenStorage(response.data);

    return response;
  },
};
