import React, { FC, PropsWithChildren } from 'react';

import { useTextTitleField } from '@/components/ui/textarea/hooks/useTextTitleField';

import style from './style/TextTitleField.module.scss';

export const TextTitleField: FC<
  PropsWithChildren<unknown>
> = ({ children }) => {
  const { textAreaRef, headerText, onChangeText } =
    useTextTitleField();

  return (
    <>
      <textarea
        ref={textAreaRef}
        rows={1}
        onChange={(event) => onChangeText(event)}
        placeholder="Заголовок статьи..."
        autoFocus
        className={style.title}
      >
        {headerText}
      </textarea>
    </>
  );
};
