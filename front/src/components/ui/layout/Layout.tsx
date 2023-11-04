import React, { FC, PropsWithChildren } from 'react';

import Header from '@/components/ui/header/Header';
import Container from '@/components/ui/layout/Container';
import SidebarHome from '@/components/ui/sidebar/SidebarHome';

const Layout: FC<PropsWithChildren<unknown>> = ({
  children,
}) => {
  return (
    <div className="overflow-y-hidden bg-gray-10 z-50">
      <Header />
      <div className="grid-layout overflow-y-hidden bg-gray-10 mt-20">
        <Container>
          <main className="py-0">{children}</main>
        </Container>
      </div>
    </div>
  );
};

export default Layout;
