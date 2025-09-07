import React from "react";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Inbox from "./pages/inbox";
import Message from "./pages/message";
import Index from "./pages/Index";
import ProtectedRoute from "./components/ProtectedRoute";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <BrowserRouter>
      <div className="bg-slate-950 flex justify-center items-center min-h-screen">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/send/:linkId" element={<Message />} />
          <Route
            path="/inbox"
            element={
              <ProtectedRoute>
                <Inbox />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
