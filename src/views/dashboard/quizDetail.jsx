import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  FaClock,
  FaFlag,
  FaCheckCircle,
  FaExclamationTriangle,
} from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const QuizDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 minutes in seconds
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [unansweredQuestions, setUnansweredQuestions] = useState(0);
  const [results, setResults] = useState([]);

  const questions = location.state?.questions || [];
  const quizTitle = location.state?.title || "Quiz";

  useEffect(() => {
    if (timeLeft > 0 && !isSubmitted) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else if (timeLeft === 0 && !isSubmitted) {
      handleSubmit();
    }
  }, [timeLeft, isSubmitted]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  const handleOptionSelect = (questionId, optionId) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [questionId]: optionId,
    }));
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    }
  };

  const handleSubmit = () => {
    let correctAnswers = 0;
    let unanswered = 0;
    console.log("questions", questions,selectedOptions);
    const results = questions.map((question, index) => {
      const selectedOption = selectedOptions[index];
      let isCorrect = false;
      if (question.correctAnswer === "A" && selectedOption === 1) {
        isCorrect = true;
      } else if (question.correctAnswer === "B" && selectedOption === 2) {
        isCorrect = true;
      } else if (question.correctAnswer === "C" && selectedOption === 3) {
        isCorrect = true;
      } else if (question.correctAnswer === "D" && selectedOption === 4) {
        isCorrect = true;
      } else {
        isCorrect = false;
      }

      if (isCorrect) {
        correctAnswers++;
      }
      if (!selectedOption) {
        unanswered++;
      }
      return {
        question: question.questionText,
        selectedAnswer: selectedOption
          ? question.options[selectedOption-1]
          : "Not answered",
        correctAnswer:
          question.options[question.correctAnswer.charCodeAt(0) - 65],
        isCorrect,
        explanation: question.explanation,
      };
    });
    console.log("results", results);
    setUnansweredQuestions(unanswered);
    setScore(correctAnswers);
    setResults(results);
    setIsSubmitted(true);
  };

  const handleSubmitClick = () => {
    setShowConfirmation(true);
  };

  const handleConfirmSubmit = () => {
    setShowConfirmation(false);
    handleSubmit();
  };

  const handleCancelSubmit = () => {
    setShowConfirmation(false);
  };

  if (!questions.length) {
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-xl text-gray-600">No questions available</p>
      </div>
    );
  }

  if (isSubmitted) {
    const scorePercentage = Math.round((score / questions.length) * 100);
    const isEligible = scorePercentage >= 60;

    return (
      <div className="h-full w-full p-8 overflow-y-scroll mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl w-full mx-auto">
          <h2 className="text-2xl font-bold text-center mb-6">Quiz Results</h2>

          {/* Score Summary */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="bg-green-50 p-4 rounded-lg text-center">
              <p className="text-3xl font-bold text-green-600">{score}</p>
              <p className="text-gray-600">Correct Answers</p>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg text-center">
              <p className="text-3xl font-bold text-yellow-600">
                {unansweredQuestions}
              </p>
              <p className="text-gray-600">Unanswered</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg text-center">
              <p className="text-3xl font-bold text-blue-600">{scorePercentage}%</p>
              <p className="text-gray-600">Score</p>
            </div>
          </div>

          {/* Score Message */}
          <div className={`mb-8 p-4 rounded-lg text-center ${
            isEligible 
              ? "bg-green-50 text-green-700" 
              : "bg-yellow-50 text-yellow-700"
          }`}>
            <h3 className="text-xl font-semibold mb-2">
              {isEligible ? "Congratulations! 🎉" : "Keep Working Hard! 💪"}
            </h3>
            <p className="text-lg">
              {isEligible 
                ? "You will be eligible for placement with this score!" 
                : "Try again and work hard to improve your score."}
            </p>
          </div>

          {/* Detailed Results */}
          <div className="space-y-6 mt-8">
            {results.map((result, index) => (
              <div key={index} className="border rounded-lg p-4">
                <div className="flex items-start mb-3">
                  <div
                    className={`w-[30px] h-[30px] rounded-full flex items-center justify-center mr-3 p-0  ${
                      result.isCorrect
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {result.isCorrect ? (
                      <FaCheckCircle className="m-0 p-0" size={20} />
                    ) : (
                      <FaExclamationTriangle className="m-0 p-0" size={20} />
                    )}
                  </div>
                  <div>
                    <p className="font-medium mb-2">
                      Question {index + 1}: {result.question}
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-500">Your Answer:</p>
                        <p
                          className={`font-medium ${
                            result.isCorrect ? "text-green-600" : "text-red-600"
                          }`}
                        >
                          {result?.selectedAnswer?.option}
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-500">Correct Answer:</p>
                        <p className="font-medium text-green-600">
                          {result?.correctAnswer?.option}
                        </p>
                      </div>
                    </div>
                    {result.explanation && (
                      <div className="mt-3 bg-gray-50 p-3 rounded">
                        <p className="text-sm text-gray-600">
                          {result.explanation}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <button
              onClick={() => navigate("/dashboard/quiz-view")}
              className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark transition-colors"
            >
              Back to Quiz List
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-full">
      {/* Confirmation Popup */}
      {showConfirmation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-8 max-w-md w-full mx-4 shadow-2xl transform transition-all">
            <div className="flex justify-center mb-6">
              <div className="bg-yellow-100 p-4 rounded-full">
                <FaExclamationTriangle className="text-yellow-500 text-4xl" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-center mb-4">
              Confirm Submission
            </h3>
            <p className="text-gray-600 text-center mb-6">
              Are you sure you want to submit your quiz? This action cannot be
              undone.
            </p>
            <div className="flex flex-col space-y-3">
              <button
                onClick={handleConfirmSubmit}
                className="bg-primary text-white py-3 rounded-lg font-medium hover:bg-primary-dark transition-colors"
              >
                Yes, Submit Quiz
              </button>
              <button
                onClick={handleCancelSubmit}
                className="border border-gray-300 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
              >
                No, Continue Quiz
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Question Area */}
      <div className="w-3/4 p-6">
        <div className="bg-white rounded-lg shadow-lg p-6 h-full">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">{quizTitle}</h2>
            <div className="flex items-center text-red-500">
              <FaClock className="mr-2" />
              <span className="font-semibold">{formatTime(timeLeft)}</span>
            </div>
          </div>

          <div className="mb-6">
            <p className="text-lg font-medium mb-4">
              Question {currentQuestion + 1} of {questions.length}
            </p>
            <p className="text-gray-700 mb-6">
              {questions[currentQuestion].question}
            </p>

            <div className="space-y-4">
              {questions[currentQuestion].options.map((option, index) => (
                <div
                  key={option.id}
                  className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                    selectedOptions[currentQuestion] === option.id
                      ? "bg-primary text-white border-primary"
                      : "hover:bg-gray-50"
                  }`}
                  onClick={() => handleOptionSelect(currentQuestion, option.id)}
                >
                  <div className="flex items-center">
                    <span className="mr-3 font-medium">
                      {String.fromCharCode(65 + index)}.
                    </span>
                    <span>{option.option}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-between mt-6">
            <button
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
              className={`flex items-center px-4 py-2 rounded-lg ${
                currentQuestion === 0
                  ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              <IoIosArrowBack className="mr-2" />
              Previous
            </button>
            {currentQuestion === questions.length - 1 ? (
              <button
                onClick={handleSubmitClick}
                className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark transition-colors"
              >
                Submit
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="flex items-center bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors"
              >
                Next
                <IoIosArrowForward className="ml-2" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Question Navigation Sidebar */}
      <div className="w-1/4 p-6">
        <div className="bg-white rounded-lg shadow-lg p-6 h-full">
          <h3 className="text-lg font-semibold mb-4">Question Navigation</h3>
          <div className="grid grid-cols-5 gap-2">
            {questions.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentQuestion(index)}
                className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                  currentQuestion === index
                    ? "bg-primary text-white"
                    : selectedOptions[index]
                    ? "bg-green-100 text-green-700"
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
          <div className="mt-6">
            <div className="flex items-center mb-2">
              <div className="w-4 h-4 bg-primary rounded-full mr-2"></div>
              <span>Current Question</span>
            </div>
            <div className="flex items-center mb-2">
              <div className="w-4 h-4 bg-green-100 rounded-full mr-2"></div>
              <span>Answered</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-gray-100 rounded-full mr-2"></div>
              <span>Unanswered</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizDetail;
