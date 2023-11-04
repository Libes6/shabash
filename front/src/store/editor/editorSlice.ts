import { OutputData } from '@editorjs/editorjs';
import {
  PayloadAction,
  createSlice,
} from '@reduxjs/toolkit';

import { cartSlice } from '@/store/cart/cartSlice';
import {
  EDITOR_STATUS,
  IEditorInitial,
} from '@/store/editor/editor.types';

const initialEditorDate = {
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

const initialState: IEditorInitial = {
  status: EDITOR_STATUS.NEW,
  header: '',
  coverImageUrl: '',
  editorDate: initialEditorDate,
};

export const editorSlice = createSlice({
  name: 'editor',
  initialState,
  reducers: {
    setHeader: (state, action: PayloadAction<string>) => {
      state.header = action.payload;
    },
    setCoverImageUrl: (
      state,
      action: PayloadAction<{ url: string }>,
    ) => {
      state.coverImageUrl = action.payload.url;
    },
    setEditorDate: (
      state,
      action: PayloadAction<OutputData>,
    ) => {
      state.editorDate = action.payload;
    },
  },
});

export const {
  setHeader,
  setCoverImageUrl,
  setEditorDate,
} = editorSlice.actions;
export default editorSlice.reducer;
