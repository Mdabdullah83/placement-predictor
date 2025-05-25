import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function QuizCard({ quiz }) {
  const navigate = useNavigate();
  
  const getLevelColor = (level) => {
    switch(level) {
      case 'beginner': return 'bg-green-100 text-green-800';
      case 'intermediate': return 'bg-blue-100 text-blue-800';
      case 'advanced': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handleNavigate = () => {
    navigate("/dashboard/quiz-view", {
      state: {
        ...quiz,
        image: quiz?.image || `/assets/images/${quiz.jobRole.toLowerCase().replace(/ /g, '-')}.png`,
      },
    });
  };
  return (
    <Card className="overflow-hidden h-full flex flex-col">
      <div className="relative h-40 w-full">
        <img
          src={quiz?.image || "/placeholder.svg"}
          alt={quiz.title}
          fill
          className="object-cover h-full w-full"
        />
      </div>      <CardHeader className="p-4 pb-0">
        <div className="flex justify-between items-start mb-2">
          <CardTitle className="text-lg font-semibold">{quiz.title}</CardTitle>
          <Badge variant="outline" className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            {quiz.time || "15 min"}
          </Badge>
        </div>
        
        <div className="flex gap-2 mb-3">
          <Badge className={getLevelColor(quiz.level)}>
            {quiz.level?.charAt(0).toUpperCase() + quiz.level?.slice(1) || 'Beginner'}
          </Badge>
          <Badge variant="outline" className="bg-gray-50">
            {quiz.jobRole}
          </Badge>
        </div>
        
        <Badge className="w-fit bg-purple-700 hover:bg-purple-800">
          {quiz.category}
        </Badge>
      </CardHeader>
      <CardContent className="p-4 flex-grow">
        <CardDescription className="text-sm line-clamp-3">
          {quiz.description}
        </CardDescription>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button
          className="w-full bg-purple-700 hover:bg-purple-800"
          onClick={() => handleNavigate()}
        >
          Start Quiz
        </Button>
      </CardFooter>
    </Card>
  );
}
