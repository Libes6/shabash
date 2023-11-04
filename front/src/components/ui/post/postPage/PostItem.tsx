import { Button } from '@mui/material';
import Image from 'next/image';
import React, { FC } from 'react';

import { IPost } from '@/types/post.interface';

const PostItem: FC<IPost> = (post) => {
  return (
    <article
      className={'rounded-xl shadow-sm overflow-hidden '}
    >
      {post.images.length > 0 && (
        <div>
          <img
            className="w-full h-[200px]"
            src={post.images[0]}
            alt={'22'}
          />
        </div>
      )}

      <div className="bg-white p-5">
        <div className="flex gap-2 items-center ">
          <div className="rounded-full w-8 h-8 bg-aqua  overflow-hidden">
            <img src={`${post.user.image}`} />
          </div>

          <div className="flex flex-col">
            <div>{post.user.username}</div>
            <p className="text-xs text-gray-300 font-light">
              {new Date(
                `${post.createdAt}`,
              ).toLocaleDateString('ru-Ru', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}
            </p>
          </div>
        </div>
        <div className="ml-8 mt-2">
          <h3 className="text-bg-color text-2xl font-semibold leading-7">
            {post.title}
          </h3>
          <div>{post.tag}</div>
          <div className="flex gap-2 mt-2">
            <div className="bg-white py-1.5 px-2 rounded-[6px] hover:bg-gray-10 cursor-pointer">
              {post.likes} лайков
            </div>
            <div className="bg-white py-1.5 px-2 rounded-[6px] hover:bg-gray-10 cursor-pointer">
              {post.views} просмотров
            </div>
            <div className="bg-white py-1.5 px-2 rounded-[6px] hover:bg-gray-10 cursor-pointer">
              {post.review.length} коммент
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default PostItem;
