import { cartSlice } from './cart/cartSlice';
import { editorSlice } from './editor/editorSlice';
import * as userActions from './user/user.actions';

export const rootActions = {
  ...userActions,
  ...cartSlice.actions,
  ...editorSlice.actions,
};
