import Cookies from 'js-cookie';

import {
  IAuthResponse,
  ITokens,
} from '@/store/user/user.interface';


export const getAccessToken =  () => {
    const accessToken = Cookies.get('accessToken');
    return accessToken || null;
};
export const getRefreshToken =  () => {
    const refreshToken = Cookies.get('refreshToken');
    return refreshToken || null;
};

export const getUserFromStorage =  () => {
    if (typeof window !== 'undefined') {
        const dateParse =localStorage.getItem('user')
        return dateParse?JSON.parse(dateParse):null
    } else {

    }

};

export const saveTokenStorage = (data: ITokens) => {
  Cookies.set('accessToken', data.accessToken);
  Cookies.set('refreshToken', data.refreshToken);
};


export const removeFromStorage = () => {
  Cookies.remove('accessToken');
  Cookies.remove('refreshToken');
  localStorage.removeItem('user')
};

export const saveToStorage = (data: IAuthResponse) => {
  saveTokenStorage(data);
  localStorage.setItem('user', JSON.stringify(data.user));
};
