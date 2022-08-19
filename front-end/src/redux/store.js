import { configureStore } from "@reduxjs/toolkit";
import patientSessionsSlice from "./slices/patient_sessions_slice";

export const store = configureStore({
  reducer: {
    patient_sessions: patientSessionsSlice,
  },
});
