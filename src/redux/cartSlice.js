import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "goods",
  initialState: {
    goods: [
      {
        id: "1",
        name: "Смартфон Samsung Galaxy",
        price: 24999,
        quantity: 1,
      },
      {
        id: "2",
        name: "Ноутбук Apple MacBook Air",
        price: 104999,
        quantity: 1,
      },
      {
        id: "3",
        name: "Беспроводные наушники Sony",
        price: 7999,
        quantity: 1,
      },
      {
        id: "4",
        name: "Умные часы Garmin",
        price: 19999,
        quantity: 1,
      },
      {
        id: "5",
        name: "Планшет Xiaomi Pad 5",
        price: 29999,
        quantity: 1,
      },
      {
        id: "6",
        name: "Игровая консоль PlayStation 5",
        price: 59999,
        quantity: 1,
      },
      {
        id: "7",
        name: "Внешний SSD диск Samsung T7",
        price: 10999,
        quantity: 1,
      },
      {
        id: "8",
        name: "Электронная книга Kindle",
        price: 7999,
        quantity: 1,
      },
      {
        id: "9",
        name: "Гарнитура HyperX Cloud II",
        price: 6999,
        quantity: 1,
      },
      {
        id: "10",
        name: "Клавиатура Logitech MX Keys",
        price: 8999,
        quantity: 1,
      },
    ],
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
  },
});

export const { addItem, deleteItem, changeAmountPlus, changeAmountMinus } =
  slice.actions;
export default slice.reducer;

export const goodsItems = (state) => state.goods.goods;
