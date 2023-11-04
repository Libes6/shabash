import React, { FC, PropsWithChildren } from 'react';

import SidebarHome from '@/components/ui/sidebar/SidebarHome';
import TwoSidebarHome from '@/components/ui/sidebar/TwoSidebarHome';

const LayoutHome: FC<PropsWithChildren<unknown>> = ({
  children,
}) => {
  return (
    <div
      className="bg-gray-10 grid gap-2 "
      style={{ gridTemplateColumns: '2fr 6fr 3fr' }}
    >
      <div className="">
        <SidebarHome />
      </div>
      {children}
      <div className="">
        <TwoSidebarHome />
      </div>
    </div>
  );
};

export default LayoutHome;
