import Image from 'next/image';
import React, { FC } from 'react';

import PrivateCabinet from '@/components/sreeens/lk/PrivateCabinet';
import Meta from '@/components/ui/Meta';
import Layout from '@/components/ui/layout/Layout';

import { NextPageAuth } from '@/providers/auth-provider/auth-page.types';

import { useProfile } from '@/hooks/useProfile';

const PrivateCabinetPage: NextPageAuth = () => {
  const { profile } = useProfile();
  console.log(profile);
  return <PrivateCabinet />;
};

PrivateCabinetPage.isOnlyUser = true;
export default PrivateCabinetPage;
