import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signin from "./components/Signin";
import Signup from "./components/Signup";

export default function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route exact path="/auth/signin" element={<Signin />} />
          <Route exact path="/auth/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
