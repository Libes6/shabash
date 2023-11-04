import { OutputData } from '@editorjs/editorjs';
import { Button, Input, TextField } from '@mui/material';
import debounce from 'lodash.debounce';
import dynamic from 'next/dynamic';
import React, { FC, useState } from 'react';

import Meta from '@/components/ui/Meta';
import {
  addEditorToLocale,
  getEditorToLocale,
} from '@/components/ui/editor/editorToLocale';
import Layout from '@/components/ui/layout/Layout';

import { useActions } from '@/hooks/useActions';

import { TextTitleField } from '../../ui';

import { ButtonUploadPost } from './components';

const Editor = dynamic(
  () => import('@/components/ui/editor/Editor'),
  {
    ssr: false,
  },
);
const NewPost: FC = () => {
  const { setEditorDate } = useActions();
  const post = getEditorToLocale();
  const [postData, setPostData] =
    useState<OutputData>(post);
  const onEditPost = (val: OutputData) => {
    setPostData(val);
    onEditorDebounce(val);
  };

  const onEditorDebounce = React.useCallback(
    debounce((val: OutputData) => {
      setEditorDate(val);
    }, 160),
    [],
  );

  return (
    <Meta title={'new post'} description={'новый пост'}>
      <Layout>
        <div
          className="min-h-[calc(100vh-80px)] grid gap-2 "
          style={{ gridTemplateColumns: '6fr 2fr' }}
        >
          <div
            className=" rounded-[8px] grid"
            style={{ gridTemplateRows: '10fr 2fr' }}
          >
            <div className="bg-white">
              <div className="py-8 px-16 flex gap-5 flex-col">
                <div>
                  <ButtonUploadPost />
                </div>
                <TextTitleField />
              </div>
              <div className="py-2 px-2">
                <Editor
                  data={postData}
                  onChange={onEditPost}
                  holder={'postEditor'}
                />
              </div>
            </div>
            <div className="py-4 px-4">
              <Button variant="contained">
                Опубликовать
              </Button>
            </div>
          </div>
          {/*<div className="bg-white rounded-[8px]">1</div>*/}
        </div>
      </Layout>
    </Meta>
  );
};

export default NewPost;
