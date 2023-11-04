import { useMutation } from '@tanstack/react-query';
import clsx from 'clsx';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { FC, PropsWithChildren } from 'react';

import { useOutside } from '@/hooks/useoutsideclick';

const HeaderMenu: FC<PropsWithChildren> = ({
  children,
}) => {
  const { isShow, setIsShow, ref } = useOutside(false);

  const { push } = useRouter();

  return (
    <div
      ref={ref}
      className="relative"
      onClick={() => setIsShow(!isShow)}
    >
      {children}
      <div
        className={clsx(
          `absolute  top-[3rem] -left-40 w-[16rem]  bg-white rounded-[8px] px-3 py-3 text-sm menu z-20  shadow-xl `,
          isShow ? 'open-menu' : 'close-menu',
        )}
      >
        1
      </div>
    </div>
  );
};

export default HeaderMenu;
