import { OutputData } from '@editorjs/editorjs';

export const addEditorToLocale = (val: OutputData) => {
  localStorage.setItem('editPost', JSON.stringify(val));
};
export const getEditorToLocale = (): OutputData => {
  const local = localStorage.getItem('editPost');
  if (local !== null) {
    return JSON.parse(local);
  } else {
    return {
      time: 1635603431943,
      blocks: [
        {
          id: 'sheNwCUP5A',
          type: 'header',
          data: {
            text: 'Ваш пост уже ждет ',
            level: 2,
          },
        },
      ],
    };
  }
};
