import { useState } from "react";
import openeye from "./../../images/eyeopen.png";
import closedeye from "./../../images/eyeclosed.png";
import axios from "axios";
import URL from "./../Url";
import LoadingComponent from "../LoadingComponent";
import DisplayError from "../DisplayError";

export default function Register() {
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const RegisterRequest = async () => {
    try {
      console.log("Register");
      const data = await axios.post(`${URL}/users/register`, {
        fullname: fullname,
        email: email,
        password: password,
      });
      console.log(data);
      setLoading(false);
      setSuccess(true);
    } catch (err) {
      if (err.response.data.message === "User already exists")
        setError(err.response.data.message);
      else setError("Server Issues!! Try again later");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    if (password.length < 8) {
      setError("Password must be at least 8 characters long");
    } else {
      let hasCapitalLetter = /[A-Z]/.test(password);
      let hasNumber = /[0-9]/.test(password);

      if (!hasCapitalLetter) {
        setError("Password must contain at least one capital letter.");
      } else if (!hasNumber) {
        setError("Password must contain at least one number.");
      } else {
        // Password meets the requirements, proceed with registration
        RegisterRequest();
      }
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className="border border-gray-300 md:px-14 px-6 py-8 m-8 md:w-1/2 text-left">
        {error ? (
          <DisplayError />
        ) : loading ? (
          <LoadingComponent />
        ) : success ? (
          <>
            <h1 className="md:font-semibold md:text-3xl md:ml-10  text-sm font-bold  ">
              Registration Successful
            </h1>
            <p className="md:ml-16 md:mt-4 md:text-lg">
              Please Login to start Shopping
            </p>
          </>
        ) : (
          <>
            <form onSubmit={handleSubmit}>
              <div className="mb-4 text-black md:text-md">
                <label
                  htmlFor="fullname"
                  className="block text-black md:text-xl font-bold"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullname"
                  name="fullname"
                  value={fullname}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full border rounded-md py-2 px-3 mt-1 border-black"
                  required
                />
              </div>
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
                  onChange={(e) => setEmail(e.target.value)}
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
                  onChange={(e) => setPassword(e.target.value)}
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
              <button
                type="submit"
                className="bg-indigo-600 hover:bg-white hover:text-indigo-600 hover:border hover:border-indigo-600 text-white rounded-md py-2 px-4 text-sm"
              >
                Register
              </button>
            </form>
          </>
        )}
      </div>
    </>
  );
}
