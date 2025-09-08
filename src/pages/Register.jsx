import React, { useState } from "react";
import GradientHeading from "../components/GradientHeading";
import Button from "../components/Button";
import { toast, ToastContainer } from "react-toastify";
import { registerUser } from "../api/registerApi";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const trimmedData = {
      username: formData.username.trim(),
      email: formData.email.trim(),
      password: formData.password.trim(),
    };
    try {
      const data = await registerUser(trimmedData);
      localStorage.setItem("token", data.token);
      localStorage.setItem("linkId", data.linkId);
      toast.success("Account created successfully!");
      navigate("/inbox", { replace: true });
      setFormData({ username: "", email: "", password: "" });
    } catch (error) {
      toast.error(error.message || "Something went wrong!");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen px-4">
      <div className="w-full max-w-md border px-8 sm:px-10 py-8 rounded-xl border-gray-800 shadow-lg">
        <GradientHeading className={"text-center text-3xl font-bold mb-2"}>
          Join NGL-Parody
        </GradientHeading>
        <p className="text-center mb-4 text-gray-400 text-sm">
          Create your anonymous messaging account
        </p>

        <form onSubmit={handleSubmit}>
          <div className="flex flex-col pt-4">
            <div className="mb-4 flex flex-col">
              {/* username */}
              <label className="text-gray-200 font-semibold text-base mb-1">
                Username
              </label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Choose a username"
                className="w-full bg-transparent py-2 text-base border border-gray-800 rounded-md text-white px-2 focus:outline-none"
              />
            </div>

            <div className="mb-4 flex flex-col">
              {/* email */}
              <label className="text-gray-200 font-semibold text-base mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full bg-transparent py-2 text-base border border-gray-800 rounded-md text-white px-2 focus:outline-none"
              />
            </div>

            <div className="mb-6 flex flex-col">
              {/* password */}
              <label className="text-gray-200 font-semibold text-base mb-1">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Create a password"
                className="w-full bg-transparent py-2 text-base border border-gray-800 rounded-md text-white px-2 focus:outline-none"
              />
            </div>
          </div>

          <Button
            className={"w-full flex justify-center py-2.5 mb-6"}
            type="submit"
          >
            <p className="font-semibold text-base">Create Account</p>
          </Button>
        </form>

        <div className="flex justify-center border-t pt-4 rounded-sm border-gray-600">
          <p className="text-sm text-gray-400">
            Already have an account?{" "}
            <Link to="/login" className="text-teal-500 font-semibold underline">
              Sign in
            </Link>
          </p>
        </div>
        <ToastContainer position="top-right" autoClose={2000} />
      </div>
    </div>
  );
};

export default Register;
