import React, { FC } from 'react';
import Meta from '@/components/ui/Meta';
import Layout from '@/components/ui/layout/Layout';
import Image from 'next/image';
import { useProfile } from '@/hooks/useProfile';
import Heading from "@/components/ui/Heading";

const PrivateCabinet: FC = () => {
  const { profile } = useProfile();
  console.log(profile)
  return (
    <Meta title={'lk'} description={'lk page'}>
      <Layout>
          <Heading>Личный кабинет</Heading>
          <div className="flex gap-28 mt-6">
              <div> <Image
                  src={`${
                      profile?.image
                          ? profile?.image
                          : '/images/no-data.png'
                  }`}
                  alt={profile?.username as string}
                  width={200}
                  height={200}
              /></div>
              <div className='flex flex-col gap-4'>

<div>Почта: {profile?.email}</div>
<div>Телефон: {profile?.phone}</div>
<div>Дата регистрации: {new Date(`${profile?.createdAt}`).toLocaleDateString('ru-Ru')}</div>
<div>Подтверждение почты: {profile?.emailVerified?'Потвержден':'Потвердеть'}</div>






              </div>
          </div>

      </Layout>
    </Meta>
  );
};

export default PrivateCabinet;
