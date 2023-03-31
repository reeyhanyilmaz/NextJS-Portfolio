import { createSlice } from "@reduxjs/toolkit";
import data from "../public/data.json";

export const portfolioSlice = createSlice({
  name: "portfolio",
  //state
  initialState: {
    isHamOpen: false,
    data: data,
  },
  //fonksiyon
  reducers: {
    setIsHamOpen: (state) => {
      state.isHamOpen = !state.isHamOpen;
    },
  },
});

export const {setIsHamOpen , setActivePage} = portfolioSlice.actions;
export default portfolioSlice.reducer;
