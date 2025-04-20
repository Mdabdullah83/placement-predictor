import profileImg from "../../assets/images/profile-img.png";
import { FaFlag } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { IoIosCheckmarkCircle } from "react-icons/io";
import QuizItemCard from "../../components/quizItemCard";
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

const Dashboard = () => {
  const quizItemArray = [
    {
      id: 1,
      image: quizImg1,
      title: "Cybersecurity Fundamentals",
      subject: "Computer Science",
      time: "15 min",
      description: "Test your knowledge of essential cybersecurity concepts, including threat prevention, data protection, and security best practices. Perfect for beginners and professionals alike.",
      questions: [
        {
          id: 1,
          question: "What is the most common type of cyber attack?",
          options: [
            { id: 1, option: "Phishing", isCorrect: true },
            { id: 2, option: "DDoS", isCorrect: false },
            { id: 3, option: "SQL Injection", isCorrect: false },
            { id: 4, option: "Man-in-the-Middle", isCorrect: false },
          ],
        },
      ],
    },
    {
      id: 2,
      image: quizImg2,
      title: "JavaScript Essentials",
      subject: "Programming",
      time: "20 min",
      description: "Master the fundamentals of JavaScript programming. This quiz covers variables, functions, objects, and common programming patterns used in modern web development.",
      questions: [
        {
          id: 1,
          question: "Which keyword is used to declare variables in JavaScript?",
          options: [
            { id: 1, option: "var", isCorrect: false },
            { id: 2, option: "let", isCorrect: false },
            { id: 3, option: "const", isCorrect: false },
            { id: 4, option: "All of the above", isCorrect: true },
          ],
        },
      ],
    },
    {
      id: 3,
      image: quizImg3,
      title: "World Capitals",
      subject: "Geography",
      time: "10 min",
      description: "Challenge your knowledge of world geography with this quiz about capital cities. Test your memory of countries and their capitals from around the globe.",
      questions: [
        {
          id: 1,
          question: "What is the capital of Japan?",
          options: [
            { id: 1, option: "Beijing", isCorrect: false },
            { id: 2, option: "Seoul", isCorrect: false },
            { id: 3, option: "Tokyo", isCorrect: true },
            { id: 4, option: "Bangkok", isCorrect: false },
          ],
        },
      ],
    },
    {
      id: 4,
      image: quizImg1,
      title: "Human Anatomy",
      subject: "Biology",
      time: "15 min",
      description: "Explore the fascinating world of human anatomy. This quiz covers major body systems, organs, and their functions. Perfect for medical students and biology enthusiasts.",
      questions: [
        {
          id: 1,
          question: "How many bones are in the adult human body?",
          options: [
            { id: 1, option: "206", isCorrect: true },
            { id: 2, option: "150", isCorrect: false },
            { id: 3, option: "300", isCorrect: false },
            { id: 4, option: "187", isCorrect: false },
          ],
        },
      ],
    },
    {
      id: 5,
      image: quizImg2,
      title: "Financial Literacy",
      subject: "Economics",
      time: "20 min",
      description: "Test your understanding of personal finance, investment strategies, and economic principles. This quiz helps you assess your financial knowledge and decision-making skills.",
      questions: [
        {
          id: 1,
          question: "What does 'APR' stand for in banking?",
          options: [
            { id: 1, option: "Annual Percentage Rate", isCorrect: true },
            { id: 2, option: "Average Payment Ratio", isCorrect: false },
            { id: 3, option: "Accumulated Principal Return", isCorrect: false },
            { id: 4, option: "Applied Percentage Revenue", isCorrect: false },
          ],
        },
      ],
    },
    {
      id: 6,
      image: quizImg3,
      title: "Artificial Intelligence",
      subject: "Computer Science",
      time: "15 min",
      description: "Dive into the world of AI and machine learning. This quiz covers fundamental concepts, applications, and ethical considerations in artificial intelligence.",
      questions: [
        {
          id: 1,
          question: "What does 'ML' stand for in AI?",
          options: [
            { id: 1, option: "Machine Learning", isCorrect: true },
            { id: 2, option: "Meta Language", isCorrect: false },
            { id: 3, option: "Memory Logic", isCorrect: false },
            { id: 4, option: "Mainframe Link", isCorrect: false },
          ],
        },
      ],
    },
    {
      id: 7,
      image: quizImg1,
      title: "Environmental Science",
      subject: "Science",
      time: "10 min",
      description: "Test your knowledge of environmental issues, climate change, and sustainability. This quiz covers important topics about our planet's health and conservation efforts.",
      questions: [
        {
          id: 1,
          question: "Which gas is primarily responsible for global warming?",
          options: [
            { id: 1, option: "Oxygen", isCorrect: false },
            { id: 2, option: "Carbon Dioxide", isCorrect: true },
            { id: 3, option: "Nitrogen", isCorrect: false },
            { id: 4, option: "Helium", isCorrect: false },
          ],
        },
      ],
    },
    {
      id: 8,
      image: quizImg1,
      title: "Python Basics",
      subject: "Programming",
      time: "10 min",
      description: "Test your understanding of Python programming fundamentals. This quiz covers syntax, data structures, and basic programming concepts in Python.",
      questions: [
        {
          id: 1,
          question: "Which of the following is a Python data type?",
          options: [
            { id: 1, option: "List", isCorrect: true },
            { id: 2, option: "Array", isCorrect: false },
            { id: 3, option: "Vector", isCorrect: false },
            { id: 4, option: "Matrix", isCorrect: false },
          ],
        },
      ],
    },
  ];
  return (
    <div
      className="w-full flex gap-[20px] my-2 pb-5 h-full overflow-hidden pe-3"
      style={{ scrollbarWidth: "none" }}
    >
      {/**================= dashboard content ================== */}
      <div
        className="w-9/12 flex flex-col bg-white shadow-lg rounded-2xl border p-3 overflow-y-scroll"
        style={{ scrollbarWidth: "none" }}
      >
        {/**=========== profile section ============== */}
        <div className="w-full flex gap-[20px]">
          <img
            src={profileImg}
            alt=""
            className="h-[150px] w-[150px] rounded-lg "
          />
          <div className="w-9/12 flex flex-col">
            <h1 className="text-2xl font-semibold text-primary">
              Michael Cliford
            </h1>
            <p className="text-secondary">Bonus booster 24v</p>
            <div className="w-8/12 bg-[#e2e2e2] h-[10px] rounded-xl my-2">
              <div className="w-8/12 bg-primary rounded-xl h-full"></div>
            </div>
            <div className="w-full flex gap-[20px] my-2">
              <div className="flex gap-[10px]">
                <div className="shadow-lg p-3 rounded-md">
                  <FaFlag className="text-primary text-[20px]" />
                </div>
                <div className="">
                  <h1 className="text-xl text-secondary font-semibold">26</h1>
                  <p className="text-secondary text-xs">Quiz Passed</p>
                </div>
              </div>
              <div className="flex gap-[10px]">
                <div className="shadow-lg p-3 rounded-md">
                  <FaClock className="text-primary text-[20px]" />
                </div>
                <div className="">
                  <h1 className="text-xl text-secondary font-semibold">
                    28 min
                  </h1>
                  <p className="text-secondary text-xs">Fastet Time</p>
                </div>
              </div>
              <div className="flex gap-[10px]">
                <div className="shadow-lg p-3 rounded-md">
                  <IoIosCheckmarkCircle className="text-primary text-[20px]" />
                </div>
                <div className="">
                  <h1 className="text-xl text-secondary font-semibold">220</h1>
                  <p className="text-secondary text-xs">Correct Answers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/**=========== quizzes section ============== */}
        <div className="w-full my-3">
          <div className="w-full flex justify-between ">
            <p className="text-primary font-semibold text-lg">
              Featured Quizzes
            </p>
            <p className="text-primary font-medium cursor-pointer hover:text-secondary">
              View All
            </p>
          </div>
          <div className="w-full flex flex-wrap">
            {Array.isArray(quizItemArray) &&
              quizItemArray.map((item, index) => (
                <QuizItemCard
                  key={index}
                  image={item.image}
                  title={item.title}
                  time={item.time}
                  description={item.description}
                  questions={item.questions}
                />
              ))}
          </div>
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
    </div>
  );
};

export default Dashboard;
