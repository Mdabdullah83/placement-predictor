import React, { useEffect, useState } from "react";
// import axios from "axios";
// import toast from "react-hot-toast";
import { 
  Clock, 
  Users, 
  BookOpen, 
  Trophy, 
  ChevronRight, 
  Search,
  Filter,
  Calendar,
  Target,
  Zap,
  Play,
  Star,
  Award
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import axios from "axios";
import toast from "react-hot-toast";

const QuizList = () => {
  const [quizzes, setQuizzes] = useState([]);
  const [filteredQuizzes, setFilteredQuizzes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [loading, setLoading] = useState(true);
  
  const token = localStorage.getItem("quiz_access_token");

  const handleGetQuizzes = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/quiz`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setQuizzes(response?.data?.data);
      setFilteredQuizzes(response?.data?.data);
    } catch (error) {
      console.log("error while getting the quizzes:", error);
      toast.error(error?.message || "failed to get the quizzes");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleGetQuizzes();
  }, []);

  useEffect(() => {
    let filtered = quizzes;

    if (searchTerm) {
      filtered = filtered.filter(quiz =>
        quiz?.title?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
        quiz?.description?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
        quiz?.jobRole?.toLowerCase()?.includes(searchTerm?.toLowerCase())
      );
    }

    if (selectedLevel !== "all") {
      filtered = filtered.filter(quiz => quiz?.level === selectedLevel);
    }

    if (selectedCategory !== "all") {
      filtered = filtered.filter(quiz => quiz?.category === selectedCategory);
    }

    setFilteredQuizzes(filtered);
  }, [searchTerm, selectedLevel, selectedCategory, quizzes]);

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'easy': return 'bg-green-100 text-green-800 border-green-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'hard': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getLevelColor = (level) => {
    switch (level) {
      case 'beginner': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'intermediate': return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'advanced': return 'bg-indigo-100 text-indigo-800 border-indigo-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getCategoryIcon = (category) => {
    switch (category?.toLowerCase()) {
      case 'technical skills': return <Zap className="w-4 h-4" />;
      case 'problem solving': return <Target className="w-4 h-4" />;
      case 'behavioral': return <Users className="w-4 h-4" />;
      default: return <BookOpen className="w-4 h-4" />;
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading quizzes...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Quiz List</h1>
        <p className="text-gray-600 text-lg">Test your knowledge with our comprehensive quiz collection</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <Card className="bg-gradient-to-r from-blue-50 to-blue-100 border-blue-200">
          <CardContent className="p-4">
            <div className="flex items-center">
              <Trophy className="w-8 h-8 text-blue-600 mr-3" />
              <div>
                <p className="text-2xl font-bold text-blue-900">{quizzes?.length}</p>
                <p className="text-blue-700 text-sm">Total Quizzes</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-r from-green-50 to-green-100 border-green-200">
          <CardContent className="p-4">
            <div className="flex items-center">
              <Target className="w-8 h-8 text-green-600 mr-3" />
              <div>
                <p className="text-2xl font-bold text-green-900">
                  {new Set(quizzes?.map(q => q?.category))?.size}
                </p>
                <p className="text-green-700 text-sm">Categories</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-r from-purple-50 to-purple-100 border-purple-200">
          <CardContent className="p-4">
            <div className="flex items-center">
              <BookOpen className="w-8 h-8 text-purple-600 mr-3" />
              <div>
                <p className="text-2xl font-bold text-purple-900">
                  {quizzes?.reduce((sum, quiz) => sum + (quiz?.questions?.length || 0), 0)}
                </p>
                <p className="text-purple-700 text-sm">Questions</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-r from-orange-50 to-orange-100 border-orange-200">
          <CardContent className="p-4">
            <div className="flex items-center">
              <Award className="w-8 h-8 text-orange-600 mr-3" />
              <div>
                <p className="text-2xl font-bold text-orange-900">
                  {new Set(quizzes?.map(q => q?.jobRole))?.size}
                </p>
                <p className="text-orange-700 text-sm">Job Roles</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Filter className="w-5 h-5" />
            Filter & Search
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search quizzes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <Select value={selectedLevel} onValueChange={setSelectedLevel}>
              <SelectTrigger>
                <SelectValue placeholder="Select Level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Levels</SelectItem>
                <SelectItem value="beginner">Beginner</SelectItem>
                <SelectItem value="intermediate">Intermediate</SelectItem>
                <SelectItem value="advanced">Advanced</SelectItem>
              </SelectContent>
            </Select>
            
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Select Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {[...new Set(quizzes?.map(q => q?.category))]?.map(category => (
                  <SelectItem key={category} value={category}>{category}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Quiz Grid */}
      {filteredQuizzes?.length === 0 ? (
        <Card className="text-center py-12">
          <CardContent>
            <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No quizzes found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria</p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredQuizzes?.map((quiz) => (
            <Card key={quiz?._id} className="hover:shadow-lg transition-all duration-300 group cursor-pointer border-l-4 border-l-blue-500">
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start mb-2">
                  <Badge className={getLevelColor(quiz?.level)}>
                    {quiz?.level}
                  </Badge>
                  <Badge className={getDifficultyColor(quiz?.difficulty)}>
                    {quiz?.difficulty}
                  </Badge>
                </div>
                
                <CardTitle className="text-lg line-clamp-2 group-hover:text-blue-600 transition-colors">
                  {quiz?.title}
                </CardTitle>
                
                <p className="text-sm text-gray-600 line-clamp-2 mt-2">
                  {quiz?.description}
                </p>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="space-y-3">
                  {/* Job Role */}
                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="w-4 h-4 mr-2" />
                    <span className="font-medium">{quiz?.jobRole}</span>
                  </div>
                  
                  {/* Category */}
                  <div className="flex items-center text-sm text-gray-600">
                    {getCategoryIcon(quiz?.category)}
                    <span className="ml-2">{quiz?.category}</span>
                  </div>
                  
                  {/* Questions Count */}
                  <div className="flex items-center text-sm text-gray-600">
                    <BookOpen className="w-4 h-4 mr-2" />
                    <span>{quiz?.questions?.length || 0} Questions</span>
                  </div>
                  
                  {/* Created Date */}
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{formatDate(quiz?.createdAt)}</span>
                  </div>
                  
                  {/* Action Button */}
                  <Button 
                    className="w-full mt-4 group-hover:bg-blue-600 transition-colors"
                    onClick={() => {
                      // Handle quiz start/navigation
                      console.log(`Starting quiz: ${quiz?.title}`);
                    }}
                  >
                    <Play className="w-4 h-4 mr-2" />
                    Start Quiz
                    <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default QuizList;