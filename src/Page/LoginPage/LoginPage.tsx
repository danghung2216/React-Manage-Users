import React, { Fragment, useState } from "react";
import {
  FaFacebook,
  FaGoogle,
  FaGithub,
  FaEyeSlash,
  FaEye,
} from "react-icons/fa";
export interface User {
  username: string;
  email?: string;
  password: string;
  confirmPassword?: string;
  id?: string | number;
}

export interface UserInfo {
  name: string;
  email: string;
  phone: number;
  address: string;
}

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = () => {
    alert("Submit successfull");
    setPassword("");
  };

  return (
    <Fragment>
      <div className="container-wrap flex justify-items-center  items-center h-screen">
        <div className="login-wraper mx-auto border-2 p-5 rounded-2xl">
          <div className="login-content flex flex-col ">
            <h1 className="my-auto text-center text-5xl">Login</h1>
            <div className="login-form flex flex-col my-2 items-center">
              <label htmlFor="user" className="text-left w-64 mt-4">
                User Name
              </label>
              <input
                id="user"
                className="m-auto p-2 border-2 w-64 rounded-lg "
                type="text
              "
                placeholder="Username"
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="password" className="text-left w-64 mt-4">
                User Name
              </label>
              <div className="input-password  flex flex-row items-center relative">
                <input
                  id="password"
                  className="password1 m-auto p-2 border-2 w-64 rounded-lg z-0  "
                  type={showPassword === true ? "text" : "password"}
                  placeholder="**********"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span className="z-10 absolute translate-x-56">
                  <button
                    className=""
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEye /> : <FaEyeSlash />}
                  </button>
                </span>
              </div>
              <button
                // className="border-2 w-32 rounded-2xl bg-cyan-300 my-5"
                className={
                  email && password
                    ? " border-2 w-32 rounded-2xl bg-cyan-300 my-5"
                    : "  border-2 w-32 rounded-2xl my-5  opacity-50"
                }
                onClick={email && password ? handleSubmit : undefined}
                disabled={!email || !password}
              >
                Submit
              </button>
              <a
                href=""
                className=" hover:underline hover:text-blue-400 {user && }"
              >
                Forgot Password?
              </a>
            </div>
          </div>
          <div className="login-footer flex flex-col items-center">
            <h2>
              Login with or{" "}
              <a href="" className="text-blue-400 hover:underline">
                SignUp
              </a>
              ?
            </h2>
            <div className="login-icon flex flex-row space-x-5 mt-3 ">
              <a href="" className="facebook">
                <FaFacebook size={35} />
              </a>
              <a href="" className="google">
                <FaGoogle size={35} />
              </a>
              <a href="" className="github">
                <FaGithub size={35} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default LoginPage;
