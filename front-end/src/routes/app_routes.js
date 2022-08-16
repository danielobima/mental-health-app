import { Routes, Route } from "react-router-dom";
import Layout from "../pages/layout/layout";
import LoginPage from "../pages/login/login_page";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};
export default AppRoutes;
