import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { MdSpaceDashboard } from "react-icons/md";
import { FaBell } from "react-icons/fa6";
import { BsBarChart } from "react-icons/bs";
import { CiLogout } from "react-icons/ci";
import sidebarSupportImg from "../assets/images/sidebar-support-img.svg";
import { useSelector } from "react-redux";
const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { role } = useSelector((state) => state.auth);
  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };
  return (
    <div className="w-full flex flex-col justify-between px-3 shadow-xl h-[100vh]">
      <div className="w-full">
        <div className="w-full flex gap-[10px] items-center my-3">
          <img src={logo} alt="" className="h-[50px] w-[50px]" />
          <p className="text-xl font-bold">P . P</p>
        </div>
        <div className="w-full flex flex-col mt-4">
          <div
            className={`group flex my-2 gap-[10px] items-center px-4 py-3 ${
              location.pathname === "/dashboard" ||
              location.pathname === "/dashboard/"
                ? "bg-primary shadow-lg"
                : "bg-white"
            } hover:bg-primary hover:text-white hover:shadow-xl rounded-lg cursor-pointer`}
            onClick={() => navigate("/dashboard")}
          >
            <MdSpaceDashboard
              className={` ${
                location.pathname === "/dashboard" ||
                location.pathname === "/dashboard/"
                  ? "text-white"
                  : "text-primary"
              }  group-hover:text-white text-lg`}
            />
            <p
              className={` ${
                location.pathname === "/dashboard" ||
                location.pathname === "/dashboard/"
                  ? "text-white"
                  : "text-secondary"
              } group-hover:text-white text-base`}
            >
              Dashboard
            </p>
          </div>
          <div
            className={`group flex my-2 gap-[10px] items-center px-4 py-3 ${
              location.pathname === "/dashboard/notification" ||
              location.pathname === "/dashboard/notification/"
                ? "bg-primary shadow-lg"
                : "bg-white"
            } hover:bg-primary hover:text-white hover:shadow-xl rounded-lg cursor-pointer`}
          >
            <FaBell
              className={` ${
                location.pathname === "/dashboard/notification" ||
                location.pathname === "/dashboard/notification/"
                  ? "text-white"
                  : "text-primary"
              }  group-hover:text-white text-lg`}
            />
            <p
              className={` ${
                location.pathname === "/dashboard/notification" ||
                location.pathname === "/dashboard/notification/"
                  ? "text-white"
                  : "text-secondary"
              } group-hover:text-white text-base`}
            >
              Notifications
            </p>
          </div>
          {role === "admin" && (
            <div
              onClick={()=>navigate("/dashboard/quiz-list")}
              className={`group flex my-2 gap-[10px] items-center px-4 py-3 ${
                location.pathname === "/dashboard/quiz-list" ||
                location.pathname === "/dashboard/quiz-list/"
                  ? "bg-primary shadow-lg"
                  : "bg-white"
              } hover:bg-primary hover:text-white hover:shadow-xl rounded-lg cursor-pointer`}
            >
              <BsBarChart
                className={` ${
                  location.pathname === "/dashboard/quiz-list" ||
                  location.pathname === "/dashboard/quiz-list/"
                    ? "text-white"
                    : "text-primary"
                }  group-hover:text-white text-lg`}
              />
              <p
                className={` ${
                  location.pathname === "/dashboard/quiz-list" ||
                  location.pathname === "/dashboard/quiz-list/"
                    ? "text-white"
                    : "text-secondary"
                } group-hover:text-white text-base`}
              >
                Quiz List
              </p>
            </div>
          )}
          {role === "user" && (
            <div
              className={`group flex my-2 gap-[10px] items-center px-4 py-3 ${
                location.pathname === "/dashboard/quiz" ||
                location.pathname === "/dashboard/quiz/"
                  ? "bg-primary shadow-lg"
                  : "bg-white"
              } hover:bg-primary hover:text-white hover:shadow-xl rounded-lg cursor-pointer`}
            >
              <BsBarChart
                className={` ${
                  location.pathname === "/dashboard/quiz" ||
                  location.pathname === "/dashboard/quiz/"
                    ? "text-white"
                    : "text-primary"
                }  group-hover:text-white text-lg`}
              />
              <p
                className={` ${
                  location.pathname === "/dashboard/quiz" ||
                  location.pathname === "/dashboard/quiz/"
                    ? "text-white"
                    : "text-secondary"
                } group-hover:text-white text-base`}
              >
                Quiz History
              </p>
            </div>
          )}
        </div>
      </div>
      <div className="w-full ">
        <div className="w-full bg-primary rounded-2xl p-5">
          <h1 className="text-white text-xl font-semibold my-1">
            Support 24/7
          </h1>
          <p className=" text-white">Contacts us anytime</p>
          <button className="text-primary bg-white rounded-lg px-5 my-2 py-1 relative z-[3]">
            Start
          </button>
          <img
            src={sidebarSupportImg}
            alt=""
            className="h-[130px] w-[150px] relative z-[0] right-[-40px] mt-[-50px]"
          />
        </div>
        <div
          className="flex gap-[10px] items-center my-4 px-2 cursor-pointer"
          onClick={() => handleLogout()}
        >
          <CiLogout className="text-xl text-red-400" />
          <p className="text-base text-red-400">Logout</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
