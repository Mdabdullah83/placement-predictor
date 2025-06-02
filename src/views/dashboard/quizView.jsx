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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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
  const [selectedLevel, setSelectedLevel] = useState(
    location.state?.level || "intermediate"
  );

  const handleStartQuiz = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const token = localStorage.getItem("quiz_access_token");
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/quiz/generate`,
        {
          jobRole: location.state?.jobRole || "Software Engineer",
          level: selectedLevel,
          category: location.state?.category || "Technical Skills",
          numberOfQuestions: 10,
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
        <div className="w-full flex flex-col gap-6">
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
                <div className="space-y-4 mb-4">
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="level"
                      className="text-sm font-medium text-gray-700"
                    >
                      Select Difficulty Level
                    </label>
                    <Select
                      value={selectedLevel}
                      onValueChange={setSelectedLevel}
                    >
                      <SelectTrigger id="level" className="w-full">
                        <SelectValue placeholder="Select level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="beginner">Beginner</SelectItem>
                        <SelectItem value="intermediate">Intermediate</SelectItem>
                        <SelectItem value="advanced">Advanced</SelectItem>
                      </SelectContent>
                    </Select>
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

       
      </div>
    </div>
  );
};

export default QuizView;
