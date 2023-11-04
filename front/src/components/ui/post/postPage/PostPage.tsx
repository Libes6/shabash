import React, { FC } from 'react';

import { Ipost } from '@/components/ui/post/post.type';
import PostItem from '@/components/ui/post/postPage/PostItem';

import { IPost } from '@/types/post.interface';

interface post {
  post: IPost[];
}
const PostPage: FC<post> = ({ post }) => {
  return (
    <div className="flex gap-3 flex-col min-h-[100vh] max-w-[650px]">
      {post.map((item) => (
        <PostItem key={item.id} {...item} />
      ))}
    </div>
  );
};

export default PostPage;
