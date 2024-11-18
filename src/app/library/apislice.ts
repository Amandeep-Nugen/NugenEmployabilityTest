import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Result {
  age: number;
  date: string;
  email: string;
  gender: string;
  value: number;
  title: string;
  first: string;
  last: string;
  nat: string;
  phone: string;
  md5: string;
  password: string;
  salt: string;
  sh1: string;
  sha256: string;
  username: string;
  city: string;
  country: string;
  postcode: number;
  state: string;
  description: string;
  number: number;
  id: { name: string; value: string };
  name: { title: string; first: string; last: string };
  dob: { age: number; date: string };
  login: {
    md5: string;
    password: string;
    salt: string;
    sha1: string;
    sha256: string;
    username: string;
  };
  location: {
    city: string;
    country: string;
    postcode: number;
    state: string;
    street: {
      name: string;
      number: number;
    };
    timezone: {
      description: string;
    };
  };
}

interface ApiState {
  data: Result[];
}

const initialState: ApiState = {
  data: [],
};

const apiSlice = createSlice({
  name: "api",
  initialState,
  reducers: {
    setData(state, action: PayloadAction<Result[]>) {
      state.data = action.payload;
    },
    clearData(state) {
      state.data = [];
    },
  },
});

export const { setData, clearData } = apiSlice.actions;

export default apiSlice.reducer;
