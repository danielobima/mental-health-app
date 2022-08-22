import { Routes, Route } from "react-router-dom";
import BookPage from "../pages/patient/book/book_page";
import HomePage from "../pages/patient/home/home_page";
import Layout from "../pages/layout/layout";
import LoginPage from "../pages/login/login_page";
import DocHomePage from "../pages/doctor/home/doc_home_page";
import Appointment from "../pages/appointment/appointment";
import DetailsPage from "../pages/patient/details/details_page";
import DocDetailsPage from "../pages/doctor/details/doc_details_page";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/book" element={<BookPage />} />
        <Route path="/details" element={<DetailsPage />} />
        <Route path="/appointment/:session_id" element={<Appointment />} />
      </Route>
      <Route path="/doc" element={<Layout />}>
        <Route index element={<DocHomePage />} />
        <Route path="/doc/appointment/:session_id" element={<Appointment />} />
        <Route path="/doc/details" element={<DocDetailsPage />} />
      </Route>
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};
export default AppRoutes;
