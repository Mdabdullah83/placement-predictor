"use client";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  CheckCircle,
  Clock,
  Flag,
  Grid,
  List,
  PencilLine,
  SwitchCamera,
} from "lucide-react";
import { QuizCard } from "@/components/quizItemCard";
import quizImg1 from "@/assets/images/cybersecurity-network.png";
import quizImg2 from "@/assets/images/javascript-code.png";
import quizImg3 from "@/assets/images/world-map.png";
import quizImg4 from "@/assets/images/human-anatomy.png";
import quizImg5 from "@/assets/images/finance-growth.png";
import quizImg6 from "@/assets/images/artificial-intelligence-network.png";
import quizImg7 from "@/assets/images/lush-rainforest.png";
import quizImg8 from "@/assets/images/python-code-snippet.png";
import badgeImg1 from "@/assets/images/trophy-comeback.png";
import badgeImg2 from "@/assets/images/trophy-winner.png";
import badgeImg3 from "@/assets/images/lucky-trophy.png";
import profileImg from "@/assets/images/profile-portrait.png";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
const quizItems = [
  {
    id: 1,
    image: quizImg1,
    title: "Frontend Interview Prep",
    jobRole: "Frontend Developer",
    level: "intermediate",
    category: "Technical Skills",
    time: "15 min",
    description: "Prepare for your frontend developer interview with questions covering React, JavaScript, CSS, and modern web development best practices.",
  },
  {
    id: 2,
    image: quizImg2,
    title: "JavaScript Deep Dive",
    jobRole: "Frontend Developer",
    level: "advanced",
    category: "Technical Skills",
    time: "20 min",
    description: "Advanced JavaScript concepts and patterns commonly asked in senior frontend developer interviews.",
  },  {
    id: 3,
    image: quizImg3,
    title: "Backend System Design",
    jobRole: "Backend Developer",
    level: "advanced",
    category: "System Design",
    time: "25 min",
    description: "Advanced system design questions focused on scalability, performance, and distributed systems architecture.",
  },
  {
    id: 4,
    image: quizImg4,
    title: "Data Structures & Algorithms",
    jobRole: "Software Engineer",
    level: "intermediate",
    category: "Problem Solving",
    time: "30 min",
    description: "Common DSA interview questions with real-world applications and optimization techniques.",
  },
  {
    id: 5,
    image: quizImg5,
    title: "Full Stack Development",
    jobRole: "Full Stack Developer",
    level: "beginner",
    category: "Technical Skills",
    time: "20 min",
    description: "Essential full stack development concepts covering both frontend and backend technologies.",
  },  {
    id: 6,
    image: quizImg6,
    title: "Machine Learning Engineer",
    jobRole: "Data Scientist",
    level: "advanced",
    category: "Technical Skills",
    time: "25 min",
    description: "Advanced machine learning concepts, model optimization, and real-world ML system design questions.",
  },
  {
    id: 7,
    image: quizImg7,
    title: "DevOps Practices",
    jobRole: "DevOps Engineer",
    level: "intermediate",
    category: "Technical Skills",
    time: "20 min",
    description: "Essential DevOps concepts including CI/CD, containerization, and cloud infrastructure management.",
  },
  {
    id: 8,
    image: quizImg8,
    title: "Product Management",
    jobRole: "Product Manager",
    level: "beginner",
    category: "Soft Skills",
    time: "15 min",
    description: "Core product management concepts, user research, and product development lifecycle questions.",
  },
];

const onlineUsers = [
  { id: 1, color: "bg-cyan-100", initial: "JD" },
  { id: 2, color: "bg-green-100", initial: "MK" },
  { id: 3, color: "bg-purple-100", initial: "AL" },
  { id: 4, color: "bg-orange-100", initial: "RB" },
  { id: 5, color: "bg-orange-100", initial: "TS" },
  { id: 6, color: "bg-red-100", initial: "PW" },
];

const badges = [
  { id: 1, name: "Comeback", image: badgeImg1 },
  { id: 2, name: "Winner", image: badgeImg2 },
  { id: 3, name: "Lucky", image: badgeImg3 },
];

const reminders = [
  {
    id: 1,
    title: "Control Your Account",
    dueDate: "Due Today",
    icon: <SwitchCamera className="h-5 w-5" />,
  },
  {
    id: 2,
    title: "Clear Desk Policy",
    dueDate: "Due Next Week",
    icon: <Grid className="h-5 w-5" />,
  },
  {
    id: 3,
    title: "Use of Flash Drives",
    dueDate: "Due November 17",
    icon: <List className="h-5 w-5" />,
  },
  {
    id: 4,
    title: "Reporting an Incident",
    dueDate: "Due December 20",
    icon: <PencilLine className="h-5 w-5" />,
  },
];

const Dashboard = () => {
  const [filteredQuizzes, setFilteredQuizzes] = useState(quizItems);
  const { searchQuery } = useSelector((state) => state?.search);
  useEffect(() => {
    if (searchQuery) {
      const filtered = quizItems.filter((quiz) =>
        quiz.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredQuizzes(filtered);
    } else {
      setFilteredQuizzes(quizItems);
    }
  }, [searchQuery]);
  return (
    <div className="flex flex-col lg:flex-row gap-5 pb-5 h-full">
      {/* Main Dashboard Content */}
      <div className="w-full lg:w-9/12 flex flex-col bg-white shadow-lg rounded-2xl border p-4 overflow-y-auto">
        {/* Profile Section */}
        <div className="w-full flex flex-col md:flex-row gap-5">
          <div className="relative h-[150px] w-[150px] min-w-[150px] rounded-lg overflow-hidden">
            <img
              src={profileImg || "/placeholder.svg"}
              alt="Profile"
              fill
              className="object-cover"
            />
          </div>
          <div className="w-full flex flex-col">
            <h1 className="text-2xl font-semibold text-purple-700">
              Michael Cliford
            </h1>
            <p className="text-gray-500">Bonus booster 24v</p>
            <div className="w-full md:w-8/12 bg-gray-200 h-[10px] rounded-xl my-2">
              <Progress value={66} className="h-[10px]" />
            </div>
            <div className="w-full flex flex-wrap gap-4 my-2">
              <div className="flex gap-3">
                <div className="shadow-lg p-3 rounded-md">
                  <Flag className="text-purple-700 h-5 w-5" />
                </div>
                <div>
                  <h1 className="text-xl text-gray-700 font-semibold">26</h1>
                  <p className="text-gray-500 text-xs">Quiz Passed</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="shadow-lg p-3 rounded-md">
                  <Clock className="text-purple-700 h-5 w-5" />
                </div>
                <div>
                  <h1 className="text-xl text-gray-700 font-semibold">
                    28 min
                  </h1>
                  <p className="text-gray-500 text-xs">Fastest Time</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="shadow-lg p-3 rounded-md">
                  <CheckCircle className="text-purple-700 h-5 w-5" />
                </div>
                <div>
                  <h1 className="text-xl text-gray-700 font-semibold">220</h1>
                  <p className="text-gray-500 text-xs">Correct Answers</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quizzes Section */}
        <div className="w-full my-5">
          <div className="w-full flex justify-between items-center mb-4">
            <h2 className="text-purple-700 font-semibold text-lg">
              Featured Quizzes
            </h2>
            <Button
              variant="link"
              className="text-purple-700 hover:text-purple-900 p-0"
            >
              View All
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
            {filteredQuizzes.map((quiz) => (
              <QuizCard key={quiz.id} quiz={quiz} />
            ))}
            {filteredQuizzes.length === 0 && (
              <div className="col-span-3 text-center text-gray-500">
                No quizzes found.
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Sidebar Content */}
      <div className="w-full lg:w-3/12 shadow-lg p-5 border rounded-2xl overflow-y-auto">
        {/* Online Users */}
        <h3 className="text-purple-700 font-semibold mb-4">
          Other Users Online
        </h3>
        <div className="flex flex-wrap gap-3 justify-between mb-6">
          {onlineUsers.map((user) => (
            <div
              key={user.id}
              className={`rounded-full p-3 flex justify-center items-center ${user.color}`}
            >
              <div className="h-10 w-10 flex items-center justify-center font-medium text-gray-700">
                {user.initial}
              </div>
            </div>
          ))}
        </div>

        {/* Achievements */}
        <div className="flex justify-between w-full items-center mb-3">
          <h3 className="text-purple-700 font-semibold">Achievements</h3>
          <Button
            variant="link"
            className="text-purple-700 hover:text-purple-900 p-0"
          >
            View All
          </Button>
        </div>
        <div className="flex justify-between mb-6">
          {badges.map((badge) => (
            <div key={badge.id} className="flex flex-col items-center">
              <div className="relative h-16 w-16">
                <img
                  src={badge.image || "/placeholder.svg"}
                  alt={badge.name}
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-center text-gray-500 mt-2">{badge.name}</p>
            </div>
          ))}
        </div>

        {/* Reminders */}
        <h3 className="text-purple-700 font-semibold mb-4">Reminders</h3>
        <div className="space-y-4">
          {reminders.map((reminder) => (
            <div key={reminder.id} className="flex gap-3 items-center">
              <div className="rounded-xl bg-purple-700 p-2 flex justify-center items-center">
                <div className="text-white">{reminder.icon}</div>
              </div>
              <div>
                <p className="text-gray-800 font-medium">{reminder.title}</p>
                <p className="text-sm text-gray-500">{reminder.dueDate}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
