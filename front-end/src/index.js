import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/app_routes";
import AuthProvider from "./providers/auth_provider/auth_provider";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./utilities/themes";
import DbProvider from "./providers/db_provider/db_provider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <DbProvider>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </ThemeProvider>
      </DbProvider>
    </AuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
export const baseURL = "";
