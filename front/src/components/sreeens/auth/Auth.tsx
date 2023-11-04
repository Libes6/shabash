import { Tab, Tabs } from '@mui/material';
import React, { FC, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { PacmanLoader } from 'react-spinners';

import Heading from '@/components/ui/Heading';
import Meta from '@/components/ui/Meta';
import Button from '@/components/ui/button/Button';
import Field from '@/components/ui/input/Field';
import { validEmail } from '@/components/ui/input/valid';
import Layout from '@/components/ui/layout/Layout';
import Loader from '@/components/ui/loader/Loader';

import {
  IAuthResponse,
  IEmailPassword,
} from '@/store/user/user.interface';

import { useActions } from '@/hooks/useActions';
import { useAuth } from '@/hooks/useAuth';
import { useAuthRedirect } from '@/hooks/useAuthRedirect';

const Auth: FC = () => {
  useAuthRedirect();
  const { isLoading } = useAuth();

  const { login, register } = useActions();

  const [type, setType] = useState<string>('login');

  const {
    register: formRegister,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IEmailPassword>({
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<IEmailPassword> = (
    data,
  ) => {
    if (type === 'login') {
      login(data);
      console.log(data);
    } else {
      register(data);
    }
    reset();
  };
  return (
    <Meta title={'auth'}>
      <Layout>
        <div className="flex h-screen">
          {isLoading && <Loader />}

          <form
            className="rounded-lg bg-white shadow-md px-12 py-8 m-auto form-w-500 "
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="justify-center flex">
              <Tabs
                className=""
                onChange={(
                  event: React.SyntheticEvent,
                  newValue: string,
                ) => setType(newValue)}
                aria-label="lab API tabs example"
              >
                <Tab label="Вход" value="login" />
                <Tab label="Регистрация" value="2" />
              </Tabs>
            </div>
            <Heading className="capitalize text-center mb-3 font-normal">
              {type == 'login' ? 'вход' : 'регистрация'}
            </Heading>
            <Field
              {...formRegister('email', {
                required: 'email is required',
                pattern: {
                  value: validEmail,
                  message: 'Ошибка email',
                },
              })}
              placeholder="Email"
              error={errors.email?.message}
            ></Field>
            <Field
              {...formRegister('password', {
                required: 'password is required',
                minLength: {
                  value: 6,
                  message: 'Пароль меньше 6 символов',
                },
              })}
              type="password"
              placeholder="Password"
              error={errors.password?.message}
            ></Field>
            <div className="w-full ">
              <Button
                variant={'dark'}
                className="w-auto inline-block"
              >
                {type == 'login' ? 'Вход' : 'Регистрация'}
              </Button>
            </div>
          </form>
        </div>
      </Layout>
    </Meta>
  );
};

export default Auth;
