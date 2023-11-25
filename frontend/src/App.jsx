import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import { logo } from "./assets";
import { Home, CreatePost } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
        <Link to="/">
          <img src={logo} alt="logo" className="w-28 object-contain" />
        </Link>
        <Link
          to="/create-post"
          className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md"
        >
          Create
        </Link>
      </header>
      <section className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Routes>
      </section>
      <footer className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-t-[#e6ebf4]">
        <p className="text-gray-500 text-xs">{new Date().getFullYear()}</p>
        <Link className="py-2 px-4 bg-black text-white text-xs rounded-md" to='https://github.com/fasilofficial/'>Follow</Link>
      </footer>
    </BrowserRouter>
  );
};

export default App;
