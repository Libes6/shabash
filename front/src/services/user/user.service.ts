import {IFullUser, IUser} from '@/types/user.interface';

import { instance } from '@/api/api.interceptor';

const USER = '/users';
interface IUserUpdate {
  email: string;
  password?: string;
  name?: string;
  image?: string;
  phone?: string;
}
export const UserService = {
  async getProfile() {
    return instance<IFullUser>({
      url: `${USER}/profile`,
      method: 'GET',
    });
  },

  async update(data: IUserUpdate) {
    return instance<IUser>({
      url: `${USER}/profile`,
      method: 'PUT',
      data,
    });
  },

  async addFavorites(productId: string) {
    return instance<IUser>({
      url: `${USER}/profile/favorites/${productId}`,
      method: 'PATCH',
    });
  },
};
