import Button from '@mui/material/Button';
import Link from 'next/link';
import React, { FC } from 'react';
import { RiNotification4Line } from 'react-icons/ri';

import HeaderMenu from '@/components/ui/cart/HeaderMenu';

import { useProfile } from '@/hooks/useProfile';

const HeaderUser: FC = () => {
  const { profile } = useProfile();
  return (
    <div className="flex gap-3 items-center">
      <Button variant="outlined">
        <Link href={'new'}>
          <span>Создать пост</span>
        </Link>
      </Button>
      <div className="bg-gray-200 rounded-[8px]  p-2 inline-block text-gray-300 hover:text-blue hover:bg-blue-100/[0.1] cursor-pointer">
        <RiNotification4Line
          size={24}
          className="align-bottom fill-current"
        />
      </div>
      <HeaderMenu>
        <div className="overflow-hidden rounded-full h-11 w-11  p-1 cursor-pointer hover:bg-blue/[0.2]">
          <img
            className="rounded-full"
            src={profile?.image ? `${profile?.image}` : ''}
          />
        </div>
      </HeaderMenu>
    </div>
  );
};

export default HeaderUser;
