import React, { useEffect, useState } from "react";
import GradientHeading from "../components/GradientHeading";
import Button from "../components/Button";
import { toast, ToastContainer } from "react-toastify";
import { loginUser } from "../api/loginApi";
import { Link, useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/inbox", { replace: true });
    }
  }, [navigate]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const trimmedData = {
      email: formData.email.trim(),
      password: formData.password.trim(),
    };

    try {
      const data = await loginUser(trimmedData);

      localStorage.setItem("token", data.token);
      localStorage.setItem("linkId", data.linkId);

      console.log(data);

      toast.success("Logged in successfully!");
      navigate("/inbox", { replace: true });
      setFormData({ email: "", password: "" });
    } catch (error) {
      toast.error(error.message || "Something went wrong");
    }
  };
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-md border px-6 sm:px-8 py-8 rounded-xl border-gray-800 overflow-hidden">
        <GradientHeading className={"text-center text-4xl font-bold mb-2"}>
          NGL-Parody
        </GradientHeading>
        <p className="text-center mb-4 text-gray-400 text-sm">
          Sign in to your anonymous messaging account
        </p>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col pt-4">
            <div className="mb-4 flex flex-col">
              {/* email */}
              <label className="text-gray-200 font-semibold text-lg">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full bg-transparent py-2 text-base border-b border-gray-600 rounded-sm focus:outline-none"
              />
            </div>

            <div className="flex flex-col mb-6">
              {/* password */}
              <label className="text-gray-200 font-semibold text-lg">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                className="w-full bg-transparent py-2 text-base border-b border-gray-600 rounded-sm focus:outline-none"
              />
            </div>
          </div>
          <Button
            className={"w-full flex justify-center py-2.5 mb-6"}
            type="submit"
          >
            <p className="font-semibold text-base">Sign In</p>
          </Button>
        </form>
        <div className="flex justify-center border-t pt-4 rounded-sm border-gray-600">
          <p className="text-sm">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-teal-500 font-semibold underline"
            >
              Sign up
            </Link>
          </p>
        </div>
        <ToastContainer position="top-right" autoClose={2000} />
      </div>
    </div>
  );
};

export default Login;
