import { createSlice } from "@reduxjs/toolkit";

export const portfolioSlice = createSlice({
  name: "portfolio",
  //state
  initialState: {
    isHamOpen: false,
    activePage: "home"
  },
  //fonksiyon
  reducers: {
    setIsHamOpen: (state) => {
      state.isHamOpen = !state.isHamOpen;
    },
    setActivePage: (state , action) =>{
      state.activePage = action.payload;
    }
  },
});

export const {setIsHamOpen , setActivePage} = portfolioSlice.actions;
export default portfolioSlice.reducer;
