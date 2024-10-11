import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginImg from "../assets/images/login-img.png";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import axios from "axios";
import toast from "react-hot-toast";
const Login = () => {
  const [isPasswordShow, setIsPasswordShow] = useState(false);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/login`,
        {
          email,
          password,
        }
      );
      if (response.status === 200) {
        toast.success("Login Successfully");
        navigate("/");
        setLoading(false);
      }
    } catch (error) {
      console.log("error in handle login", error);
      toast.error("Failed to login");
      setLoading(false);
    }
  };

  return (
    <div className="w-full flex items-center justify-center gap-[20px] bg-white py-10 overflow-y-hidden h-[100vh]">
      <div className="w-6/12 flex items-center justify-center">
        <form onSubmit={(e) => handleLogin(e)} className="w-8/12">
          <h1 className="text-4xl font-bold mb-2">Login</h1>
          <p className="text-gray-600 text-lg">
            Login to access your placement predictor account
          </p>
          <div className="w-full flex flex-col mt-4 my-3">
            <label htmlFor="email" className="mb-2 font-medium text-lg">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="border-[1px] w-full border-gray-500 rounded-2xl p-3 shadow-sm focus:outline-none"
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="w-full flex flex-col mt-4 my-3">
            <label htmlFor="password" className="mb-2 font-medium text-lg">
              Password
            </label>
            <div className="w-full relative">
              <input
                id="password"
                name="password"
                type={isPasswordShow ? "text" : "password"}
                className="border-[1px] w-full border-gray-500 rounded-2xl p-3 shadow-sm focus:outline-none"
                placeholder="Enter Your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {isPasswordShow ? (
                <FaEye
                  className="text-xl text-gray-600 absolute right-[20px] bottom-[15px] cursor-pointer"
                  onClick={() => setIsPasswordShow(!isPasswordShow)}
                />
              ) : (
                <FaEyeSlash
                  className="text-xl text-gray-600 absolute right-[20px] bottom-[15px] cursor-pointer"
                  onClick={() => setIsPasswordShow(!isPasswordShow)}
                />
              )}
            </div>
          </div>
          <div className="w-full flex justify-between items-center">
            <div className="flex gap-[10px]">
              <input type="checkbox" />
              <p className="text-base text-gray-500"> Remember me</p>
            </div>
            <div className="w-max">
              <p className="text-red-500">Forgot Password</p>
            </div>
          </div>
          {loading ? (
            <button
              className="border-[1px] rounded-xl  w-full py-2 bg-[#515DEF] text-white text-lg my-3 mt-6 cursor-not-allowed"
              disabled
            >
              Sending ...
            </button>
          ) : (
            <button
              className="border-[1px] rounded-xl  w-full py-2 bg-[#515DEF] text-white text-lg my-3 mt-6"
              onClick={(e) => handleLogin(e)}
            >
              Login
            </button>
          )}

          <p className="text-center cursor-pointer" onClick={()=>navigate('/signUp')}>
            {" "}
            Don't have an account?{" "}
            <span className="text-red-600 font-semibold">Sign up</span>
          </p>
        </form>
      </div>
      <div className="w-6/12 flex items-center justify-center">
        <img src={LoginImg} alt="login img" className="h-[90vh] w-" />
      </div>
    </div>
  );
};

export default Login;
