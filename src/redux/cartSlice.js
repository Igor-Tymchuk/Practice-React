import { createSlice } from "@reduxjs/toolkit";
import { deleteData, fetchData, addData } from "./operations";

const slice = createSlice({
  name: "goods",
  initialState: {
    goods: [],
    totalPrice: 0,
  },
  reducers: {
    addItem: (state, action) => {
      state.goods.push(action.payload);
    },
    deleteItem: (state, action) => {
      state.goods = state.goods.filter((item) => item.id !== action.payload);
    },
    changeAmountPlus: (state, action) => {
      state.goods.find((item) => item.id === action.payload).quantity += 1;
    },
    changeAmountMinus: (state, action) => {
      state.goods.find((item) => item.id === action.payload).quantity -= 1;
    },
    calcTotalPrice: (state) => {
      state.totalPrice = state.goods.reduce((acc, item) => {
        return (acc += item.price * item.quantity);
      }, 0);
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchData.fulfilled, (state, action) => {
        state.goods = action.payload;
      })
      .addCase(deleteData.fulfilled, (state, action) => {
        state.goods = state.goods.filter(
          (product) => product.id !== action.payload.id
        );
      })
      .addCase(addData.fulfilled, (state, action) => {
        state.goods.push(action.payload);
      });
  },
});

export const {
  addItem,
  deleteItem,
  changeAmountPlus,
  changeAmountMinus,
  calcTotalPrice,
} = slice.actions;
export default slice.reducer;

export const goodsItems = (state) => state.goods.goods;
export const totalGoodsPrice = (state) => state.goods.totalPrice;
