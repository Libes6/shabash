import { Button } from '@mui/material';
import React, { ChangeEvent, FC } from 'react';

import { useNewPostUploadButton } from './hooks/useNewPostUploadButton';

export const ButtonUploadPost: FC = () => {
  const { url, error, handleFileChange, onClearUrl } =
    useNewPostUploadButton();

  if (url) {
    return (
      <div>
        <img src={url} alt="" />
        <div onClick={onClearUrl}>x</div>
      </div>
    );
  }
  if (error) {
    return <div>Ошибка</div>;
  }
  return (
    <div>
      <Button
        fullWidth={false}
        variant="outlined"
        component="label"
      >
        Добавить обложку
        <input
          type="file"
          hidden
          onChange={(
            event: ChangeEvent<HTMLInputElement>,
          ) => handleFileChange(event)}
        />
      </Button>
    </div>
  );
};
