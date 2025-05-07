import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Clock,
  Flag,
  CheckCircle2,
  ThumbsUp,
  ThumbsDown,
  Power,
  Grid,
  List,
  Pencil,
  Users,
  Award,
  Bell,
  Play,
  BookOpen,
  Share2,
  Bookmark,
} from "lucide-react";
import axios from "axios";

import onlineUsersImg1 from "@/assets/images/online-user-img-1.svg";
import onlineUsersImg2 from "@/assets/images/online-user-img-2.svg";
import onlineUsersImg3 from "@/assets/images/online-user-img-3.svg";
import onlineUsersImg4 from "@/assets/images/online-user-img-4.svg";
import onlineUsersImg5 from "@/assets/images/online-user-img-5.svg";
import onlineUsersImg6 from "@/assets/images/online-user-img-6.svg";
const QuizView = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleStartQuiz = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const token = localStorage.getItem("quiz_access_token");
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/quiz/generate`,
        {
          subject: location.state?.subject || "General Knowledge",
          topic: location.state?.title || "Mixed Topics",
          difficulty: "medium",
          numberOfQuestions: 10,
          questionType: "multiple_choice",
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      const formattedQuestions = response.data.data.questions.map(
        (q, index) => ({
          id: index + 1,
          question: q.questionText,
          options: q.options.map((opt, optIndex) => ({
            id: optIndex + 1,
            option: opt,
            isCorrect: opt === q.correctAnswer,
          })),
          correctAnswer: q.correctAnswer,
          explanation: q.explanation,
        })
      );

      navigate("/dashboard/quiz-detail", {
        state: {
          questions: formattedQuestions,
          title: location.state?.title,
          image: location.state?.image,
        },
      });
    } catch (err) {
      console.error("Quiz generation error:", err);
      setError(err.response?.data?.message || "Failed to generate quiz");
    } finally {
      setIsLoading(false);
    }
  };
  // Sample online users
  const onlineUsers = [
    { id: 1, avatar: onlineUsersImg1, name: "Emma" },
    { id: 2, avatar: onlineUsersImg2, name: "James" },
    { id: 3, avatar: onlineUsersImg3, name: "Olivia" },
    { id: 4, avatar: onlineUsersImg4, name: "Noah" },
    { id: 5, avatar: onlineUsersImg5, name: "Ava" },
    { id: 6, avatar: onlineUsersImg6, name: "William" },
    { id: 7, avatar: onlineUsersImg1, name: "Sophia" },
  ];

  // Sample achievements
  const achievements = [
    {
      id: 1,
      name: "Comeback King",
      icon: "🏆",
      color: "bg-amber-100 text-amber-600",
    },
    {
      id: 2,
      name: "Champion",
      icon: "🥇",
      color: "bg-indigo-100 text-indigo-600",
    },
    {
      id: 3,
      name: "Lucky Streak",
      icon: "🍀",
      color: "bg-emerald-100 text-emerald-600",
    },
  ];

  // Sample reminders
  const reminders = [
    {
      icon: <Power />,
      title: "Control Your Account",
      due: "Today",
      color: "bg-rose-100 text-rose-600",
    },
    {
      icon: <Grid />,
      title: "Clear Desk Policy",
      due: "Next Week",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: <List />,
      title: "Use of Flash Drives",
      due: "Nov 17",
      color: "bg-amber-100 text-amber-600",
    },
    {
      icon: <Pencil />,
      title: "Reporting an Incident",
      due: "Dec 20",
      color: "bg-purple-100 text-purple-600",
    },
  ];

  const demoImage = location?.state?.image || "/api/placeholder/800/450";
  const quizTitle =
    location?.state?.title || "Advanced Cybersecurity Fundamentals";
  const quizDescription =
    location?.state?.description ||
    "Test your knowledge on the latest cybersecurity practices and protocols. This comprehensive quiz covers threat detection, network security, and best practices for maintaining data integrity in enterprise environments.";

  return (
    <div className="w-full h-full bg-gray-50 p-6 overflow-auto">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6">
        {/* Main Content Area */}
        <div className="lg:w-8/12 flex flex-col gap-6">
          {/* Quiz Header Card */}
          <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="bg-indigo-600 text-white p-2 rounded-lg">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h1 className="text-2xl font-bold text-gray-800">
                  {quizTitle}
                </h1>
              </div>
              <div className="flex items-center gap-3">
                <button className="flex items-center gap-1 text-gray-600 hover:text-indigo-600 transition-colors">
                  <Share2 className="w-4 h-4" />
                  <span className="text-sm">Share</span>
                </button>
                <button className="flex items-center gap-1 text-gray-600 hover:text-indigo-600 transition-colors">
                  <Bookmark className="w-4 h-4" />
                  <span className="text-sm">Save</span>
                </button>
                <div className="flex items-center gap-3 ml-2">
                  <button className="flex items-center gap-1 text-gray-600 hover:text-indigo-600 transition-colors">
                    <ThumbsUp className="w-4 h-4" />
                    <span className="text-sm font-medium">178</span>
                  </button>
                  <button className="flex items-center gap-1 text-gray-600 hover:text-indigo-600 transition-colors">
                    <ThumbsDown className="w-4 h-4" />
                    <span className="text-sm font-medium">24</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Quiz Image and Info */}
            <div className="flex flex-col md:flex-row gap-6 mb-8">
              <div className="md:w-7/12">
                <div className="relative rounded-2xl overflow-hidden shadow-md">
                  <img
                    src={demoImage}
                    alt={quizTitle}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-4 flex items-center gap-2 text-white">
                    <Users className="w-4 h-4" />
                    <span className="text-sm font-medium">1,245 attempts</span>
                  </div>
                </div>
              </div>
              <div className="md:w-5/12 flex flex-col gap-4">
                <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                  <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-indigo-600" />
                    Quiz Information
                  </h2>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-indigo-600" />
                        <span className="text-gray-700">Time Limit</span>
                      </div>
                      <span className="font-medium text-gray-800">
                        15 Minutes
                      </span>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-2">
                        <Flag className="w-4 h-4 text-indigo-600" />
                        <span className="text-gray-700">Pass Score</span>
                      </div>
                      <span className="font-medium text-gray-800">
                        80 Points
                      </span>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                        <span className="text-gray-700">Attempts</span>
                      </div>
                      <span className="font-medium text-gray-800">2 Tries</span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={handleStartQuiz}
                  disabled={isLoading}
                  className="w-full bg-indigo-600 text-white py-4 rounded-xl font-medium hover:bg-indigo-700 transition-all flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed shadow-sm"
                >
                  {isLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Generating Quiz...</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-5 h-5" />
                      <span>Start Quiz</span>
                    </>
                  )}
                </button>
                {error && (
                  <div className="text-red-500 text-sm bg-red-50 p-2 rounded-lg border border-red-100">
                    {error}
                  </div>
                )}
              </div>
            </div>

            {/* Quiz Description and Instructions */}
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">
                  About This Quiz
                </h2>
                <p className="text-gray-600 mb-4">{quizDescription}</p>
              </div>

              <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-100">
                <h3 className="text-lg font-medium text-gray-800 mb-4 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-indigo-600" />
                  Instructions
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <div className="min-w-5 pt-0.5">
                      <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full mt-1.5"></div>
                    </div>
                    <span>
                      This quiz consists of 10 multiple-choice questions
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="min-w-5 pt-0.5">
                      <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full mt-1.5"></div>
                    </div>
                    <span>You have 15 minutes to complete all questions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="min-w-5 pt-0.5">
                      <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full mt-1.5"></div>
                    </div>
                    <span>You need to score at least 80 points to pass</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="min-w-5 pt-0.5">
                      <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full mt-1.5"></div>
                    </div>
                    <span>
                      Results will be available immediately after completion
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="min-w-5 pt-0.5">
                      <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full mt-1.5"></div>
                    </div>
                    <span>
                      You may attempt this quiz twice to improve your score
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:w-4/12 flex flex-col gap-6">
          {/* Online Users Card */}
          <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                <Users className="w-5 h-5 text-indigo-600" />
                <span>Online Users</span>
              </h2>
              <span className="bg-indigo-100 text-indigo-600 text-xs font-medium px-2 py-1 rounded-full">
                {onlineUsers.length} active
              </span>
            </div>

            <div className="flex flex-wrap gap-3">
              {onlineUsers.slice(0, 6).map((user) => (
                <div key={user.id} className="group relative">
                  <div className="w-12 h-12 rounded-full bg-gray-100 overflow-hidden border-2 border-white shadow-sm hover:ring-2 hover:ring-indigo-300 transition-all">
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                  <div className="hidden group-hover:block absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded px-2 py-1 whitespace-nowrap">
                    {user.name}
                  </div>
                </div>
              ))}
              {onlineUsers.length > 6 && (
                <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-medium shadow-sm border-2 border-white">
                  +{onlineUsers.length - 6}
                </div>
              )}
            </div>
          </div>

          {/* Achievements Card */}
          <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                <Award className="w-5 h-5 text-indigo-600" />
                <span>Achievements</span>
              </h2>
              <button className="text-indigo-600 hover:text-indigo-700 transition-colors text-sm font-medium">
                View All
              </button>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {achievements.map((achievement) => (
                <div
                  key={achievement.id}
                  className="flex flex-col items-center gap-2"
                >
                  <div
                    className={`w-16 h-16 ${achievement.color} rounded-full flex items-center justify-center text-2xl shadow-sm`}
                  >
                    {achievement.icon}
                  </div>
                  <p className="text-sm text-gray-600 text-center font-medium">
                    {achievement.name}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Reminders Card */}
          <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                <Bell className="w-5 h-5 text-indigo-600" />
                <span>Reminders</span>
              </h2>
              <span className="bg-indigo-100 text-indigo-600 text-xs font-medium px-2 py-1 rounded-full">
                4 tasks
              </span>
            </div>

            <div className="space-y-3">
              {reminders.map((reminder, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer"
                >
                  <div className={`${reminder.color} p-2 rounded-lg`}>
                    {reminder.icon}
                  </div>
                  <div className="flex-grow">
                    <p className="font-medium text-gray-800">
                      {reminder.title}
                    </p>
                    <p className="text-xs text-gray-500">Due: {reminder.due}</p>
                  </div>
                  <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizView;
