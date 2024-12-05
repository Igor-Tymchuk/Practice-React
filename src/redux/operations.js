import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://67487e695801f51535912625.mockapi.io";

export const fetchData = createAsyncThunk(
  "products/get",
  async (_, thunkAPI) => {
    try {
      const response = await axios("/prodacts");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const deleteData = createAsyncThunk(
  "products/delete",
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/prodacts/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const addData = createAsyncThunk(
  "products/add",
  async (data, thunkAPI) => {
    try {
      const response = await axios.post(`/prodacts`, data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
