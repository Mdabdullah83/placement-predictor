import { Route, Routes } from "react-router-dom";
import Sidebar from "../../components/sidebar";
import TopBar from "../../components/topbar";
import Profile from "./profile";
import QuizView from "./quizView";
import Dashboard from "./dashboard";

const DashboardLayout = () => {
  return (
    <div className="w-full flex gap-[20px] h-[100vh] overflow-hidden">
      <div className="w-2/12">
        <Sidebar />
      </div>
      <div className="w-10/12 flex flex-col h-[100vh]">
        <TopBar />
        <div className="w-full mt-[70px]">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/quiz-view" element={<QuizView />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
