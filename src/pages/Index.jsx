import React from "react";
import Features from "../components/Features";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="w-full max-w-4xl min-h-screen flex flex-col items-center mx-auto px-4">
      <div className="max-w-3xl text-center py-20 px-4 flex flex-col flex-wrap justify-center items-center">
        <h1 className="md:text-6xl text-5xl font-bold mb-4">
          <span className="bg-gradient-to-r from-violet-500 to-orange-500 bg-clip-text text-transparent">
            NGL-Parody
          </span>
        </h1>
        <p className="text-gray-400 md:text-lg text-base mb-6">
          Send and receive anonymous messages. Share your thoughts freely,
          connect authentically.
        </p>

        <Link
          to="/login"
          className="rounded-md text-white px-8 py-3 bg-gradient-to-r from-violet-500 to-orange-500 font-semibold text-base flex justify-center items-center"
        >
          Get Started for free
        </Link>
      </div>
      <Features />
    </div>
  );
};

export default Index;
