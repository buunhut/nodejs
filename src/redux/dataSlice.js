import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listOurTeams: [],
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    updateListOurTeam(state, action) {
      state.listOurTeams = action.payload;
    },
  },
});

export const { updateListOurTeam } = dataSlice.actions;
export default dataSlice.reducer;
