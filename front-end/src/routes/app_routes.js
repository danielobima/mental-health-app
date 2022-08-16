import { Routes, Route } from "react-router-dom";
import App from "../App";
import LoginPage from "../pages/login/login_page";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};
export default AppRoutes;
