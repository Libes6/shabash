import React, { FC } from 'react';

import NewPost from '@/components/sreeens/newPost/NewPost';

import { NextPageAuth } from '@/providers/auth-provider/auth-page.types';

const New: NextPageAuth = () => {
  return <NewPost />;
};

New.isOnlyUser = true;
export default New;
