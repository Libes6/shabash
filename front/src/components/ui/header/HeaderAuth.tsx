import Button from '@mui/material/Button';
import Link from 'next/link';
import React, { FC } from 'react';
import { RiNotification4Line } from 'react-icons/ri';

import HeaderMenu from '@/components/ui/cart/HeaderMenu';

import { useAuth } from '@/hooks/useAuth';
import { useProfile } from '@/hooks/useProfile';

const HeaderAuth: FC = () => {
  return (
    <div className="flex gap-3 items-center">
      <Link href={'/auth'}>
        <Button variant="text">
          <span>Войти</span>
        </Button>
      </Link>

      <Link href={'/auth'}>
        <Button variant="outlined">
          <span>Создать аккаунт</span>
        </Button>
      </Link>
    </div>
  );
};

export default HeaderAuth;
