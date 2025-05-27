import { FiHome } from "react-icons/fi";
import { IoArrowBackSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../store/auth/authSlice";
import { TbUserSquareRounded } from "react-icons/tb";
import imgSignup from "../assets/imgsignup.jpg";

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, errorData } = useSelector((state) => state.auth);
  const [error, setError] = useState(errorData);

  const [formData, setformData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      formData.name === "" ||
      formData.email === "" ||
      formData.password === ""
    ) {
      return setError("All fields are required");
    }
    try {
      setLoading(true);
      const resultAction = await dispatch(signup(formData));
      if (signup.fulfilled.match(resultAction)) {
        navigate("/auction");
      } else {
        if (resultAction.payload) {
          setError(resultAction.payload);
          setLoading(false);
        } else {
          setError("Signup failed. Please try again.");
          setLoading(false);
        }
      }
    } catch (error) {
      setError("An unexpected error occurred. Please try again.");
      setLoading(false);
      console.error(error);
    }
  };

  useEffect(() => {
    if (user) {
      navigate("/auction");
    }
  }, [user, navigate]);

  return (
    <section className="h-screen bg-[#040301] flex flex-col md:flex-row">
      {/* Left Section: Image */}
      <div className="w-full md:w-1/2 h-1/2 md:h-screen">
        <img
          src={imgSignup}
          alt="Signup Illustration"
          className="w-full h-full object-cover "
        />
      </div>

      {/* Right Section: Form */}
      <div className="w-full md:w-1/2 h-1/2 md:h-screen flex items-center justify-center px-6 py-8 ">
        <div className="w-full max-w-xl bg-[#3A2F5F] rounded-lg shadow-[0_0_8px_1px_#FF69B4] p-10 space-y-8 md:space-y-12">
          {/* Header with Icons */}
          <div className="flex items-center justify-between mb-6 text-2xl font-semibold text-white">
            <IoArrowBackSharp
              className="w-8 h-8 cursor-pointer text-[#1E90FF] hover:text-[#FF69B4] transition-colors duration-300"
              onClick={() => navigate(-1)}
            />
            <TbUserSquareRounded className="w-12 h-12 -mb-8 z-10 text-[#1E90FF]" />
            <FiHome
              className="w-8 h-8 cursor-pointer text-[#1E90FF] hover:text-[#FF69B4] transition-colors duration-300"
              onClick={() => navigate("/")}
            />
          </div>

          {/* Form Title */}
          <h1 className="text-2xl md:text-3xl font-bold text-center text-white">
            Sign Up
          </h1>

          {/* Error Message */}
          {error && (
            <span className="block px-4 text-[#FF69B4] font-semibold text-center text-lg">
              {error}
            </span>
          )}

          {/* Form */}
          <form className="space-y-6 md:space-y-8" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="name"
                className="block mb-3 text-lg font-medium text-white"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="bg-[#1E1E2F] border border-[#1E90FF] text-white text-lg rounded-lg focus:ring-[#1E90FF] focus:border-[#FF69B4] block w-full p-3.5 transition-colors duration-300"
                placeholder="John Doe"
                required=""
                onChange={(e) =>
                  setformData({ ...formData, name: e.target.value })
                }
                value={formData.name}
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block mb-3 text-lg font-medium text-white"
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-[#1E1E2F] border border-[#1E90FF] text-white text-lg rounded-lg focus:ring-[#1E90FF] focus:border-[#FF69B4] block w-full p-3.5 transition-colors duration-300"
                placeholder="name@xyz.com"
                required=""
                onChange={(e) =>
                  setformData({ ...formData, email: e.target.value })
                }
                value={formData.email}
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block mb-3 text-lg font-medium text-white"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className="bg-[#1E1E2F] border border-[#1E90FF] text-white text-lg rounded-lg focus:ring-[#1E90FF] focus:border-[#FF69B4] block w-full p-3.5 transition-colors duration-300"
                required=""
                onChange={(e) =>
                  setformData({ ...formData, password: e.target.value })
                }
                value={formData.password}
              />
            </div>

            {loading ? (
              <button
                className="flex items-center justify-center gap-3 text-white bg-gradient-to-r from-[#1E90FF] to-[#FF69B4] py-2 px-6 rounded w-full opacity-70 cursor-not-allowed"
                disabled
              >
                <svg
                  className="text-white animate-spin"
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                >
                  <path
                    d="M32 3C35.8083 3 39.5794 3.75011 43.0978 5.20749C46.6163 6.66488 49.8132 8.80101 52.5061 11.4939C55.199 14.1868 57.3351 17.3837 58.7925 20.9022C60.2499 24.4206 61 28.1917 61 32C61 35.8083 60.2499 39.5794 58.7925 43.0978C57.3351 46.6163 55.199 49.8132 52.5061 52.5061C49.8132 55.199 46.6163 57.3351 43.0978 58.7925C39.5794 60.2499 35.8083 61 32 61C28.1917 61 24.4206 60.2499 20.9022 58.7925C17.3837 57.3351 14.1868 55.199 11.4939 52.5061C8.801 49.8132 6.66487 46.6163 5.20749 43.0978C3.7501 39.5794 3 35.8083 3 32C3 28.1917 3.75011 24.4206 5.2075 20.9022C6.66489 17.3837 8.80101 14.1868 11.4939 11.4939C14.1868 8.80099 17.3838 6.66487 20.9022 5.20749C24.4206 3.7501 28.1917 3 32 3L32 3Z"
                    stroke="currentColor"
                    stroke-width="5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M32 3C36.5778 3 41.0906 4.08374 45.1692 6.16256C49.2477 8.24138 52.7762 11.2562 55.466 14.9605C58.1558 18.6647 59.9304 22.9531 60.6448 27.4748C61.3591 31.9965 60.9928 36.6232 59.5759 40.9762"
                    stroke="currentColor"
                    stroke-width="5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="text-white"
                  ></path>
                </svg>
                Loading...
              </button>
            ) : (
              <button
                type="submit"
                className="text-white bg-gradient-to-r from-[#1E90FF] to-[#FF69B4] hover:from-[#FF69B4] hover:to-[#1E90FF] py-2 px-6 rounded w-full hover:scale-105 transition-transform duration-300 animate-pulse"
              >
                Sign Up
              </button>
            )}

            <p className="text-lg text-center text-[#CCCCCC]">
              Already have an account?{" "}
              <a
                href=""
                className="font-medium text-[#1E90FF] hover:text-[#FF69B4] transition-colors duration-300"
                onClick={() => navigate("/login")}
              >
                Log In
              </a>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Signup;