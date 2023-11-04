import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import React, {
  FC,
  PropsWithChildren,
  useEffect,
} from 'react';

import { TypeComponentAythFields } from '@/providers/auth-provider/auth-page.types';

import { useActions } from '@/hooks/useActions';
import { useAuth } from '@/hooks/useAuth';
import {getAccessToken, getRefreshToken} from "@/services/auth/auth.helper";

const DynamickCheckRole = dynamic(
  () => import('./CheckRole'),
  { ssr: false },
);
const AuthProvider: FC<
  PropsWithChildren<TypeComponentAythFields>
> = ({ Component: { isOnlyUser }, children }) => {
  const { user } = useAuth();
  const { checkAuth, logout } = useActions();
  const { pathname } = useRouter();
  useEffect(() => {
      const accessToken=getAccessToken()
      if(accessToken)checkAuth()
  }, []);

    useEffect(() => {
        const refreshToken=getRefreshToken()
        if(!refreshToken && user){
            logout()
        }
    }, [pathname]);

  return isOnlyUser ? (
    <DynamickCheckRole Component={{ isOnlyUser }}>
      {children}
    </DynamickCheckRole>
  ) : (
    <>{children}</>
  );
};

export default AuthProvider;
