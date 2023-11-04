import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { FC } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/Ai';
import { FcLike } from 'react-icons/fc';
import { FiList, FiPackage, FiUser } from 'react-icons/fi';

import Button from '@/components/ui/button/Button';
import HeaderCart from '@/components/ui/cart/HeaderMenu';
import Search from '@/components/ui/catalog/Search';
import HeaderAuth from '@/components/ui/header/HeaderAuth';
import HeaderUser from '@/components/ui/header/HeaderUser';
import Container from '@/components/ui/layout/Container';

import { useActions } from '@/hooks/useActions';
import { useAuth } from '@/hooks/useAuth';
import { useProfile } from '@/hooks/useProfile';

import logo from '../../../../public/images/logo.webp';

const Header: FC = () => {
  const { user } = useAuth();
  const { profile } = useProfile();
  const { logout } = useActions();
  const { replace } = useRouter();

  return (
    <>
      <header className="bg-white w-full fixed z-[100]">
        <div className="container">
          <div
            className="bg-white  py-2  grid "
            style={{ gridTemplateColumns: '7fr 7fr' }}
          >
            <div className="flex gap-4 items-center">
              <Link href="/" className="flex justify-start">
                <Image
                  width={50}
                  height={30}
                  src="/images/habr.svg"
                  alt={'logo-amazon'}
                />
              </Link>
              <Search
                setSearch={() => console.log('1')}
                size="md"
              ></Search>
            </div>

            <div className="flex gap-4 justify-end">
              {user ? <HeaderUser /> : <HeaderAuth />}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
