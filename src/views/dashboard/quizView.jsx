import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Dialog } from "@material-tailwind/react";
import axios from "axios";
import { 
  Clock, 
  Flag, 
  CheckCircle2, 
  ThumbsUp, 
  ThumbsDown, 
  Power, 
  Grid, 
  List, 
  Pencil 
} from "lucide-react";

// Import images
import quizImg1 from "../../assets/images/quiz-item-img-1.png";
import quizImg2 from "../../assets/images/quiz-item-img-2.png";
import quizImg3 from "../../assets/images/quiz-item-img-3.png";
import onlineUserImg1 from "../../assets/images/online-user-img-1.svg";
import onlineUserImg2 from "../../assets/images/online-user-img-2.svg";
import onlineUserImg3 from "../../assets/images/online-user-img-3.svg";
import onlineUserImg4 from "../../assets/images/online-user-img-4.svg";
import onlineUserImg5 from "../../assets/images/online-user-img-5.svg";
import onlineUserImg6 from "../../assets/images/online-user-img-6.svg";
import badgeImg1 from "../../assets/images/Badge-img-1.svg";
import badgeImg2 from "../../assets/images/Badge-img-2.svg";
import badgeImg3 from "../../assets/images/Badge-img-3.svg";

const QuizView = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = React.useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [isSubmitScreenShow, setIsSubmitScreenShow] = useState(false);
  const [isScoreScreenShow, setIsScoreScreenShow] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleOpen = () => setOpen(!open);

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

      const formattedQuestions = response.data.data.questions.map((q, index) => ({
        id: index + 1,
        question: q.questionText,
        options: q.options.map((opt, optIndex) => ({
          id: optIndex + 1,
          option: opt,
          isCorrect: opt === q.correctAnswer,
        })),
        correctAnswer: q.correctAnswer,
        explanation: q.explanation,
      }));

      navigate('/dashboard/quiz-detail', { 
        state: { 
          questions: formattedQuestions,
          title: location.state?.title,
          image: location.state?.image
        }
      });
    } catch (err) {
      console.error("Quiz generation error:", err);
      setError(err.response?.data?.message || "Failed to generate quiz");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full flex gap-6 p-6 h-full overflow-hidden">
      {/* Main Quiz Content */}
      <div className="w-9/12 flex flex-col bg-white rounded-2xl shadow-lg p-6 overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-primary">Quiz Details</h1>
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
              <ThumbsUp className="w-5 h-5" />
              <span className="text-sm">178</span>
            </button>
            <button className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
              <ThumbsDown className="w-5 h-5" />
              <span className="text-sm">178</span>
            </button>
          </div>
        </div>

        <div className="flex gap-6 mb-8">
          <div className="w-8/12">
            <img
              src={location?.state?.image}
              alt="Quiz"
              className="w-full h-[300px] object-cover rounded-xl shadow-md"
            />
          </div>
          <div className="w-4/12 space-y-4">
            <div className="bg-gray-50 p-4 rounded-xl">
              <h2 className="text-lg font-semibold text-primary mb-4">Quiz Information</h2>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="text-gray-600">Time Limit: 15 Mins</span>
                </div>
                <div className="flex items-center gap-2">
                  <Flag className="w-5 h-5 text-primary" />
                  <span className="text-gray-600">Pass Points: 80 Points</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span className="text-gray-600">Attempts: Twice</span>
                </div>
              </div>
            </div>
            <button
              onClick={handleStartQuiz}
              disabled={isLoading}
              className="w-full bg-primary text-white py-3 rounded-xl font-medium hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "Generating Quiz..." : "Start Quiz"}
            </button>
            {error && (
              <div className="text-red-500 text-sm mt-2">{error}</div>
            )}
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-primary">{location?.state?.title}</h2>
          <div className="prose max-w-none">
            <p className="text-gray-600 mb-4">{location?.state?.description}</p>
            <div className="bg-gray-50 p-4 rounded-xl">
              <h3 className="text-lg font-medium text-primary mb-2">Instructions</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>The quiz consists of multiple-choice questions</li>
                <li>You have 15 minutes to complete the quiz</li>
                <li>You need 80 points to pass</li>
                <li>You can attempt the quiz twice</li>
                <li>Click the "Start Quiz" button when you're ready</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div className="w-3/12 space-y-6">
        {/* Online Users */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-lg font-semibold text-primary mb-4">Online Users</h2>
          <div className="grid grid-cols-3 gap-4">
            {[onlineUserImg1, onlineUserImg2, onlineUserImg3, onlineUserImg4, onlineUserImg5, onlineUserImg6].map((img, index) => (
              <div key={index} className="bg-gray-50 rounded-full p-2 flex justify-center items-center">
                <img src={img} alt={`User ${index + 1}`} className="h-10 w-10" />
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-primary">Achievements</h2>
            <button className="text-primary hover:text-primary/80 transition-colors text-sm">
              View All
            </button>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {[badgeImg1, badgeImg2, badgeImg3].map((img, index) => (
              <div key={index} className="text-center">
                <img src={img} alt={`Badge ${index + 1}`} className="w-16 h-16 mx-auto" />
                <p className="text-sm text-gray-600 mt-2">
                  {["Comeback", "Winner", "Lucky"][index]}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Reminders */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-lg font-semibold text-primary mb-4">Reminders</h2>
          <div className="space-y-4">
            {[
              { icon: <Power className="w-5 h-5" />, title: "Control Your Account", due: "Due Today" },
              { icon: <Grid className="w-5 h-5" />, title: "Clear Desk Policy", due: "Due Next Week" },
              { icon: <List className="w-5 h-5" />, title: "Use of Flash Drives", due: "Due November 17" },
              { icon: <Pencil className="w-5 h-5" />, title: "Reporting an Incident", due: "Due December 20" }
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                <div className="bg-primary text-white p-2 rounded-lg">
                  {item.icon}
                </div>
                <div>
                  <p className="font-medium text-gray-800">{item.title}</p>
                  <p className="text-sm text-gray-500">{item.due}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizView;
