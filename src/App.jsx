import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./views/home";
import Login from "./views/login";
import SignUp from "./views/signup";
import { Toaster } from "react-hot-toast";
import DashboardLayout from "./views/dashboard/dashboardLayout";

function App() {
  return (
    <div className="w-full flex flex-col">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/dashboard/*" element={<DashboardLayout />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
