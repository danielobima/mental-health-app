import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sessions: [],
  sessionsWithDoctors: [],
};

export const patientSessionsSlice = createSlice({
  name: "patient_sessions",
  initialState,
  reducers: {
    setSessions: (state, action) => {
      state.sessions = action.payload;
    },
    setSessionsWithDoctors: (state, action) => {
      state.sessionsWithDoctors = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSessions, setSessionsWithDoctors } =
  patientSessionsSlice.actions;

export default patientSessionsSlice.reducer;
