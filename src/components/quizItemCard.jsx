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

  const handleNavigate = () => {
    navigate("/dashboard/quiz-view", {
      state: {
        image: quiz?.image,
        title: quiz?.title,
        time: quiz?.time,
        questions: quiz?.questions,
        description: quiz?.description,
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
      </div>
      <CardHeader className="p-4 pb-0">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg font-semibold">{quiz.title}</CardTitle>
          <Badge
            variant="outline"
            className="flex items-center gap-1 bg-purple-50"
          >
            <Clock className="h-3 w-3" />
            {quiz.time}
          </Badge>
        </div>
        <Badge className="w-fit bg-purple-700 hover:bg-purple-800">
          {quiz.subject}
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
