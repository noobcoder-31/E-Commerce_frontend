import { useState } from "react";
import openeye from "./../../images/eyeopen.png";
import closedeye from "./../../images/eyeclosed.png";
import axios from "axios";
import URL from "../Url";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(""); // State variable for error message

  const loginRequest = async () => {
    try {
      const data = await axios.post(`${URL}/users/login`, { email, password });
      console.log(data.data);
      localStorage.setItem("userInformation", JSON.stringify(data.data));
      navigate("/");
    } catch (err) {
      console.log(err);
      setError("Invalid email or password");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    loginRequest();
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <h1 className="md:text-xl  text-lg">Happy To see You Again</h1>
      <div className="border border-gray-300 md:px-14 px-6 py-8 m-8 md:w-1/2 text-left">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-black md:text-xl font-bold"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError("");
              }}
              className="w-full border rounded-md py-2 px-3 mt-1 border-black"
              required
            />
          </div>
          <div className="mb-4 relative">
            <label
              htmlFor="password"
              className="block text-black md:text-xl font-bold"
            >
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError("");
              }}
              className="w-full border rounded-md py-2 px-3 mt-1 border-black"
              required
            />
            <button
              type="button"
              className="absolute top-3 right-3 text-gray-500 hover:text-black focus:outline-none"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? (
                <img src={openeye} alt=".." />
              ) : (
                <img src={closedeye} alt=".." />
              )}
            </button>
          </div>
          {error && <p className="text-red-600 mb-1">{error}</p>}
          <button
            type="submit"
            className="bg-indigo-600 hover:bg-white hover:text-indigo-600 hover:border hover:border-indigo-600 text-white rounded-md py-2 px-4 text-sm"
          >
            Log In
          </button>
        </form>
      </div>
    </>
  );
}
