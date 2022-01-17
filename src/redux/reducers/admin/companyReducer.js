import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  companies: [],
  currentCompany: null,
};

const companyReducer = createSlice({
  name: "Company",
  initialState,
  reducers: {
    SET_COMPANIES(state, action) {
      state.companies = action.payload;
    },
    SET_CURRENT_COMPANIES(state, action) {
      state.currentCompany = action.payload.currentCompanyId;
    },
  },
});

export const { SET_COMPANIES, SET_CURRENT_COMPANIES } = companyReducer.actions;
export const getCurrentCompany = (state) => state.companyReducer;
export default companyReducer.reducer;
