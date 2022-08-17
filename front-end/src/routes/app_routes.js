import { Routes, Route } from "react-router-dom";
import BookPage from "../pages/book/book_page";
import HomePage from "../pages/home/home_page";
import Layout from "../pages/layout/layout";
import LoginPage from "../pages/login/login_page";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/book" element={<BookPage />} />
      </Route>
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};
export default AppRoutes;
