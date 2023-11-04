import { useRouter } from 'next/router';
import React, { FC, PropsWithChildren } from 'react';

import { TypeComponentAythFields } from '@/providers/auth-provider/auth-page.types';

import { useAuth } from '@/hooks/useAuth';

const CheckRole: FC<
  PropsWithChildren<TypeComponentAythFields>
> = ({ Component: { isOnlyUser }, children }) => {
  const { user } = useAuth();

  const router = useRouter();

  if (user && isOnlyUser) return <>{children}</>;

  router.pathname !== '/auth' && router.replace('/auth');
  return null;
};

export default CheckRole;
