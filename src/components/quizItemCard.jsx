import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const QuizItemCard = ({ image, title, time,questions }) => {
  const navigate=useNavigate();
  const handleNavigate = () => {
    navigate('/dashboard/quiz-view',{state:{
      image:image,
      title:title,
      time:time,
      questions:questions
    }})
  }

  useEffect(()=>{
    console.log("questions:",questions);
  },[])
  return (
    <div className="w-4/12 flex justify-center items-center px-2 py-2" onClick={()=>handleNavigate()}>
      <div
        className="h-[200px] w-full bg-cover rounded-xl border overflow-hidden"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="h-full w-full flex flex-col justify-between p-5 bg-[#0000004c]">
          <div className="bg-white rounded-lg w-max px-3 text-primary text-sm font-medium py-1">
            {time}
          </div>
          <div className="w-full bg-[#0a0909a1] rounded-xl p-2 px-3 shadow-xl">
            <p className="text-white text-sm">{title}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizItemCard;
