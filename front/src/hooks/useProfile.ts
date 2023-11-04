import { useQuery } from '@tanstack/react-query';
import { Simulate } from 'react-dom/test-utils';

import UserSlice from '@/store/user/userSlice';

import { useAuth } from '@/hooks/useAuth';

import { errorCatch } from '@/api/api.helper';

import { UserService } from '@/services/user/user.service';

import error = Simulate.error;
import {IFullUser} from "@/types/user.interface";

export const useProfile = () => {
  const { user } = useAuth();
  const { data } = useQuery(['get profile'], () =>
    UserService.getProfile(),{select:({data})=>data,}
  )

  return { profile: data };
};

