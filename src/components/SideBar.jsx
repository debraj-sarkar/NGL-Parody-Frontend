import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { CircleUser } from "lucide-react";
import { LogOut } from "lucide-react";
import { Menu } from "lucide-react";

const SideBar = ({ username, email }) => {
  const navigate = useNavigate();
  const [iconVisible, setIconVisible] = useState(true);

  const handleSideBar = () => {
    setIconVisible(!iconVisible);
  };

  const handleLogOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("linkId");
    navigate("/login", { replace: true });
  };

  const sidebar = (
    <div className="bg-gray-800 shadow-xl shadow-gray-500/20 w-full sm:w-[18vw] flex flex-col justify-between items-center rounded-2xl">
      <div className="flex flex-col justify-center items-center py-4 px-4">
        <CircleUser className="w-10 h-10 mb-1 text-gray-200" />
        <p className="mb-1 text-gray-100 font-semibold">{username}</p>
        <p className="mb-1 text-gray-400 text-sm">{email}</p>
      </div>
      <div
        className="flex gap-2 justify-center items-center border-t border-gray-700 w-full cursor-pointer py-4"
        onClick={handleLogOut}
      >
        <LogOut className="text-red-400 w-5 h-5" />
        <p className="text-gray-200 font-medium">Logout</p>
      </div>
    </div>
  );

  return (
    <div className="cursor-pointer ">
      {iconVisible ? (
        <Menu className="text-gray w-7 h-7" onClick={handleSideBar} />
      ) : (
        <div className="flex gap-2 flex-col-reverse">
          {sidebar}
          <Menu className="text-gray w-7 h-7" onClick={handleSideBar} />
        </div>
      )}
    </div>
  );
};

export default SideBar;
