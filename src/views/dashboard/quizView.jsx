import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaFlag } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { IoIosCheckmarkCircle } from "react-icons/io";
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

import { RxSwitch } from "react-icons/rx";
import { IoMdGrid } from "react-icons/io";
import { IoListOutline } from "react-icons/io5";
import { FaPencilAlt } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { FaQuestion } from "react-icons/fa6";

import { Dialog } from "@material-tailwind/react";

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

  const handleOpen = () => setOpen(!open);

  // Start quiz by opening dialog
  const handleStartQuiz = () => {
    setOpen(true);
    setCurrentQuestion(0);
    setSelectedOption(null);
  };

  // Handle option selection
  const handleOptionClick = (optionId) => {
    setSelectedOption(optionId);

    if (
      questions[currentQuestion].options.find((opt) => opt.id === optionId)
        .isCorrect
    ) {
      setScore((prev) => prev + 1);
    }
  };

  // Move to the next question
  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
    } else {
      setIsSubmitScreenShow(true);
    }
  };

  useEffect(() => {
    console.log("state data:", location?.state?.questions);
    if (location?.state?.questions) {
      setQuestions(location?.state?.questions);
    }
  }, []);

  return (
    <div
      className="w-full flex gap-[20px] my-2 pb-5 h-full overflow-hidden pe-3"
      style={{ scrollbarWidth: "none" }}
    >
      {/**================= Quiz View content ================== */}
      <div
        className="w-9/12 flex flex-col bg-white shadow-lg rounded-2xl border p-5 overflow-y-scroll"
        style={{ scrollbarWidth: "none" }}
      >
        <p className="font-semibold text-lg text-primary">Recent Quizzes</p>
        <div className="w-full flex gap-[20px] my-4">
          <img
            src={location?.state?.image}
            alt=""
            className="rounded-xl h-[300px] w-8/12"
          />
          <div className="flex flex-col w-5/12">
            <div className="flex gap-[10px] w-full items-center my-3">
              <div className="w-4/12">
                <p className="text-secondary font-semibold">Date:</p>
              </div>
              <div className="w-6/12">
                <p className="text-sm text-secondary">28/07/2023</p>
              </div>
            </div>
            <div className="flex gap-[10px] w-full items-center my-3">
              <div className="w-4/12">
                <p className="text-secondary font-semibold">Time Limit:</p>
              </div>
              <div className="w-6/12">
                <p className="text-sm text-secondary">15 Mins</p>
              </div>
            </div>
            <div className="flex gap-[10px] w-full items-center my-3">
              <div className="w-4/12">
                <p className="text-secondary font-semibold">Attempts:</p>
              </div>
              <div className="w-6/12">
                <p className="text-sm text-secondary">Twice</p>
              </div>
            </div>
            <div className="flex gap-[10px] w-full items-center my-3">
              <div className="w-4/12">
                <p className="text-secondary font-semibold">Pass Points:</p>
              </div>
              <div className="w-6/12">
                <p className="text-sm text-secondary">80 Points</p>
              </div>
            </div>
            <button
              className="text-white bg-primary rounded-lg w-max px-8 py-2 my-4"
              onClick={handleStartQuiz}
            >
              Start Quiz
            </button>
          </div>
        </div>
        <div className="w-8/12 my-4 flex justify-between  gap-[20px]">
          <h1 className="text-xl font-semibold w-max">
            {location?.state?.title}
          </h1>
          <div className="flex gap-[3px]">
            <AiOutlineLike className="text-green-600 text-xl cursor-pointer" />
            <p className="text-sm">178</p>
            <AiOutlineDislike className="text-green-600 text-xl cursor-pointer" />
            <p className="text-sm">178</p>
          </div>
        </div>
        <div className="w-8/12">
          <p className="my-2 text-secondary text-base">
            One of the most efficient ways to protect against cyber attacks and
            all types of data breaches is to train your employees on cyber
            attack prevention and
          </p>
          <p className="my-4 text-secondary text-base">
            The quiz consists of questions. To be successful with the quizzes,
            it’s important to conversant with the topic by paying attention to
            the short video
          </p>
          <p className="my-2 text-secondary text-base">
            To start, click the "Start" button. When finished, click the "Submit
            " button.
          </p>
        </div>
      </div>
      {/**============= badges content ================== */}
      <div
        className="w-3/12 shadow-lg p-5 border rounded-2xl overflow-y-scroll"
        style={{ scrollbarWidth: "none" }}
      >
        <p className="text-primary font-semibold">Other Users Online</p>
        <div className="w-full flex gap-[20px] flex-wrap justify-between my-4">
          <div className="rounded-full p-3 flex justify-center items-center bg-[#BFF6FF]">
            <img src={onlineUserImg1} alt="" className="h-[40px] w-[40px]" />
          </div>
          <div className="rounded-full p-3 flex justify-center items-center bg-[#BFFFCB]">
            <img src={onlineUserImg2} alt="" className="h-[40px] w-[40px]" />
          </div>
          <div className="rounded-full p-3 flex justify-center items-center bg-[#CAB9D0]">
            <img src={onlineUserImg3} alt="" className="h-[40px] w-[40px]" />
          </div>
          <div className="rounded-full p-3 flex justify-center items-center bg-[#FFDEBF]">
            <img src={onlineUserImg4} alt="" className="h-[40px] w-[40px]" />
          </div>
          <div className="rounded-full p-3 flex justify-center items-center bg-[#FFDEBF]">
            <img src={onlineUserImg5} alt="" className="h-[40px] w-[40px]" />
          </div>
          <div className="rounded-full p-3 flex justify-center items-center bg-[#F7C5BA]">
            <img src={onlineUserImg6} alt="" className="h-[40px] w-[40px]" />
          </div>
        </div>
        <div className="flex justify-between w-full">
          <p className="text-primary font-semibold">Achievements</p>
          <p className="text-primary cursor-pointer hover:text-secondary">
            View All
          </p>
        </div>
        <div className="w-full flex justify-between my-2">
          <div className="">
            <img src={badgeImg1} alt="" className="" />
            <p className="text-center text-secondary my-2">Comeback</p>
          </div>
          <div className="">
            <img src={badgeImg2} alt="" className="" />
            <p className="text-center text-secondary my-2">Winner</p>
          </div>
          <div className="">
            <img src={badgeImg3} alt="" className="" />
            <p className="text-center text-secondary my-2">Lucky</p>
          </div>
        </div>
        <p className="text-primary font-semibold">Reminders</p>
        <div className="w-full">
          <div className="flex  w-full my-5 gap-[10px]">
            <div className="rounded-xl bg-primary p-2 px-3 flex justify-center items-center">
              <RxSwitch className="text-white text-2xl" />
            </div>
            <div className="">
              <p className="text-black font-medium">Control Your Account</p>
              <p className="text-sm text-secondary">Due Today</p>
            </div>
          </div>
          <div className="flex  w-full my-5 gap-[10px]">
            <div className="rounded-xl bg-primary p-2 px-3 flex justify-center items-center">
              <IoMdGrid className="text-white text-2xl" />
            </div>
            <div className="">
              <p className="text-black font-medium">Clear Desk Policy</p>
              <p className="text-sm text-secondary">Due Next Week</p>
            </div>
          </div>
          <div className="flex  w-full my-5 gap-[10px]">
            <div className="rounded-xl bg-primary p-2 px-3 flex justify-center items-center">
              <IoListOutline className="text-white text-2xl" />
            </div>
            <div className="">
              <p className="text-black font-medium">Use of Flash Drives</p>
              <p className="text-sm text-secondary">Due November 17</p>
            </div>
          </div>
          <div className="flex  w-full my-5 gap-[10px]">
            <div className="rounded-xl bg-primary p-2 px-3 flex justify-center items-center">
              <FaPencilAlt className="text-white text-2xl" />
            </div>
            <div className="">
              <p className="text-black font-medium">Reporting an Incident</p>
              <p className="text-sm text-secondary">Due December 20</p>
            </div>
          </div>
        </div>
      </div>

      {/**=========== dialog box for questions and options */}
      <Dialog open={open} handler={handleOpen} className="rounded-3xl">
        {!isSubmitScreenShow ? (
          <div className="w-full bg-white p-5 rounded-3xl">
            {questions.length > 0 && questions[currentQuestion] ? (
              <>
                <h1 className="text-center text-xl font-semibold text-black">
                  Question {currentQuestion + 1}/{questions.length}
                </h1>
                <p className="my-4 text-base font-normal text-black">
                  {questions[currentQuestion].question}
                </p>

                {/**========== options ======== */}
                <div className="w-full flex flex-col">
                  {questions[currentQuestion].options.map((option) => (
                    <div
                      key={option.id}
                      className={`group w-full rounded-xl border px-4 py-4 cursor-pointer my-2 
                    ${
                      selectedOption === option.id
                        ? "bg-primary text-white"
                        : "hover:bg-primary hover:text-white"
                    }`}
                      onClick={() => handleOptionClick(option.id)}
                    >
                      <p className="text-sm">{option.option}</p>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <p>Loading questions...</p>
            )}

            <div className="w-full flex justify-end my-3">
              <button
                className="bg-primary text-white px-8 py-2 rounded-xl"
                onClick={handleNextQuestion}
                disabled={selectedOption === null}
              >
                {currentQuestion < questions.length - 1 ? "Next" : "Submit"}
              </button>
            </div>
          </div>
        ) : !isScoreScreenShow ? (
          <div className="w-full bg-white p-5 rounded-3xl flex flex-col justify-center items-center">
            <div className="p-8 flex justify-center items-center shadow-xl bg-primary rounded-full mt-6">
              <FaQuestion className="text-white text-6xl" />
            </div>
            <p className="my-5 text-center text-black text-xl">
              Are you Sure , You want to submit Quiz?
            </p>
            <div className="w-6/12 flex justify-between my-8">
              <button
                className="border-2 border-primary rounded-xl px-6 py-2 text-primary"
                onClick={() => setIsSubmitScreenShow(false)}
              >
                No
              </button>
              <button
                className="bg-primary text-white rounded-xl px-6 py-2"
                onClick={() => setIsScoreScreenShow(true)}
              >
                Yes
              </button>
            </div>
          </div>
        ) : (
          <div className="w-full bg-white p-5 rounded-3xl flex flex-col justify-center items-center">
            <img src={badgeImg1} alt="" className="my-6" />
            <h1 className="text-center my-2 mt-4 font-semibold text-2xl text-black">
              Congratulations you have passed
            </h1>
            <p className="text-center my-2 text-black">
              You Scored {(score / questions.length) * 100} %
            </p>
            <div className="w-6/12 flex justify-center my-8">
              <button
                className="bg-primary text-white rounded-xl px-6 py-2"
                onClick={() => setOpen(false)}
              >
                Go Home
              </button>
            </div>
          </div>
        )}
      </Dialog>
    </div>
  );
};

export default QuizView;
