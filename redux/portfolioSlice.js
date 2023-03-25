import { createSlice } from "@reduxjs/toolkit";

export const portfolioSlice = createSlice({
  name: "portfolio",
  //state
  initialState: {
    isHamOpen: false,
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
