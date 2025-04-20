import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaClock } from "react-icons/fa";

const QuizItemCard = ({ image, title, time, questions, description }) => {
  const navigate = useNavigate();
  
  const handleNavigate = () => {
    navigate('/dashboard/quiz-view', {
      state: {
        image: image,
        title: title,
        time: time,
        questions: questions,
        description: description
      }
    });
  };

  useEffect(()=>{
    console.log("questions:",questions);
  },[])

  return (
    <div 
      className="w-4/12 flex justify-center items-center px-2 py-2 transition-all duration-300 hover:scale-[1.02]"
      onClick={handleNavigate}
    >
      <div className="h-[280px] w-full rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group">
        <div 
          className="h-full w-full bg-cover bg-center relative"
          style={{ backgroundImage: `url(${image})` }}
        >
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
          
          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-between p-6">
            {/* Top Section */}
            <div className="flex justify-between items-start">
              <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1.5 flex items-center gap-2">
                <FaClock className="text-primary text-sm" />
                <span className="text-primary text-sm font-medium">{time}</span>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="space-y-3">
              <h3 className="text-white text-xl font-semibold group-hover:text-primary transition-colors duration-300">
                {title}
              </h3>
              <p className="text-white/80 text-sm line-clamp-2 group-hover:text-white transition-colors duration-300">
                {description}
              </p>
              <div className="flex items-center gap-2">
                <span className="text-white/60 text-xs">
                  {questions?.length || 0} questions
                </span>
                <span className="text-white/60 text-xs">•</span>
                <span className="text-white/60 text-xs">
                  {Math.ceil((questions?.length || 0) * 1.5)} min
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizItemCard;
