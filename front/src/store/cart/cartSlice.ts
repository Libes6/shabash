import {
  PayloadAction,
  createSlice,
} from '@reduxjs/toolkit';

import {
  IAddToCartPayload,
  ICartInitialState,
  IChangeQuantityPayload,
} from '@/store/cart/cart.types';

const initialState: ICartInitialState = {
  items: [],
  favorites:[]
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (
      state,
      action: PayloadAction<IAddToCartPayload>,
    ) => {

      const isExist = state.items.some(
        (item) =>
          item?.product?.id === action.payload.product.id
      );

      if (!isExist) {
        state.items.push({
          ...action.payload,
          id: state.items.length,
        });
      }
    },
    removeFromCart: (
      state,
      action: PayloadAction<{ id: number }>,
    ) => {
      state.items = state.items.filter(
        (item) => item.id !== action.payload.id,
      );
    },
    changeQuantity: (
      state,
      action: PayloadAction<IChangeQuantityPayload>,
    ) => {
      const { id, type } = action.payload;
      const item = state.items.find(
        (item) => item.id === id,
      );
      if (item) {
        type === 'plus' ? item.quantity++ : item.quantity--;
      }
    },
    reset: (state) => {
      state.items = [];
    },
    addToFavorite: (
        state,
        action: PayloadAction<IAddToCartPayload>,
    ) => {

      const isExist = state.favorites.some(
          (item) =>
              item?.product?.id === action.payload.product.id
      );

      if (!isExist) {
        state.favorites.push({
          ...action.payload,
          id: state.favorites.length,
        });
      }
    },
    removeFromFavorite: (
        state,
        action: PayloadAction<{ id: number }>,
    ) => {
      state.favorites = state.favorites.filter(
          (item) => item.id !== action.payload.id,
      );
    },
  },
});

export const {
  addToCart,
  changeQuantity,
  removeFromCart,
  reset,
} = cartSlice.actions;
export default cartSlice.reducer;
