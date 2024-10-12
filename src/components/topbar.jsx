import React from "react";
import { CiSearch } from "react-icons/ci";
import profileImg from "../assets/images/profile-img.png";
const TopBar = () => {
  return (
    <div className="w-full flex items-center justify-between py-4">
      <div className="w-8/12 relative flex items-center">
        <input
          type="text"
          className="w-full rounded-xl shadow-md border ps-10 py-2 focus:outline-none"
          placeholder="Search Quiz"
        />
        <CiSearch className="absolute left-[10px] text-xl" />
      </div>
      <button className="bg-primary text-white rounded-lg px-10 py-2">
        Start Quiz
      </button>
      <div className="flex items-center gap-[10px] px-4">
        <img
          src={profileImg}
          alt=""
          className="rounded-full h-[50px] w-[50px]"
        />
        <p className="text-secondary">Michal Ciliford</p>
      </div>
    </div>
  );
};

export default TopBar;
