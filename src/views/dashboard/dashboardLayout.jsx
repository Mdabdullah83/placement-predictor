import { Route, Routes } from "react-router-dom";
import Sidebar from "../../components/sidebar";
import TopBar from "../../components/topbar";
import Profile from "./profile";
import QuizView from "./quizView";
import Dashboard from "./dashboard";
import QuizDetail from "./quizDetail";
import AdminDashboard from "./admin/dashboard";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "@/store/reducers/authSlice";
import QuizList from "./admin/quizList";
const DashboardLayout = () => {
  const dispatch = useDispatch();
  const role = localStorage.getItem("role");
  const renderDashboardContent = () => {
    return role === "user" ? <Dashboard /> : <AdminDashboard />;
  };
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    dispatch(setUser(user));
  }, []);
  return (
    <div className="w-full flex gap-[20px] h-[100vh] overflow-hidden bg-[#FBF9F9]">
      <div className="w-2/12">
        <Sidebar />
      </div>
      <div
        className="w-10/12 flex flex-col h-[100vh] "
        style={{ scrollbarWidth: "none" }}
      >
        <TopBar />
        <div
          className="w-full mt-[10px] h-[90vh] overflow-y-scroll"
          style={{ scrollbarWidth: "none" }}
        >
          <Routes>
            <Route path="/" element={renderDashboardContent()} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/quiz-view" element={<QuizView />} />
            <Route path="/quiz-detail" element={<QuizDetail />} />
            <Route path="/quiz-list" element={<QuizList />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
