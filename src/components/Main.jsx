import React from "react";
import { Routes, Route } from "react-router-dom";
import BooksPage from "../pages/BooksPage";
import BookDetail from "../pages/BookDetailPage";
import "./Main.scss";

const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<BooksPage />} />
      <Route path="/detailPage" element={<BookDetail />} />
    </Routes>
  );
};

export default Main;
