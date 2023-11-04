import React, { FC } from 'react';

import LayoutHome from '@/components/sreeens/home/LayoutHome';
import Meta from '@/components/ui/Meta';
import Layout from '@/components/ui/layout/Layout';
import PostPage from '@/components/ui/post/postPage/PostPage';

const Home: FC<any> = ({ post }) => {
  return (
    <Meta title={'home'} description={'home page'}>
      <Layout>
        <LayoutHome>
          <PostPage post={post} />
        </LayoutHome>
      </Layout>
    </Meta>
  );
};

export default Home;
