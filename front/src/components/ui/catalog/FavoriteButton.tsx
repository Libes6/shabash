import {
  useMutation,
  useQueryClient,
} from '@tanstack/react-query';
import React, { FC } from 'react';
import {
  AiFillHeart,
  AiOutlineHeart,
} from 'react-icons/Ai';

import { useActions } from '@/hooks/useActions';
import { useAuth } from '@/hooks/useAuth';
import { useProfile } from '@/hooks/useProfile';

import { ICartInterface } from '@/types/cart.interface';
import { IProduct } from '@/types/product.interface';

import { UserService } from '@/services/user/user.service';

const FavoriteButton: FC<{ product: IProduct }> = ({
  product,
}) => {
  const { user } = useAuth();

  const { profile } = useProfile();

  const queryClient = useQueryClient();
  const { mutate } = useMutation(
    [`toggle favorite`],
    () => UserService.addFavorites(`${product.id}`),
    {
      onSuccess() {
        queryClient.invalidateQueries(['get profile']);
      },
    },
  );

  const isExist = profile?.favorites.some(
    (favorites: any) => favorites.id === product.id,
  );

  const onCurent = () => {};
  return (
    <div>
      {profile ? (
        <button onClick={() => mutate()}>
          {isExist ? (
            <AiFillHeart color={'red'} size={26} />
          ) : (
            <AiOutlineHeart color={'red'} size={26} />
          )}
        </button>
      ) : null}
    </div>
  );
};

export default FavoriteButton;
