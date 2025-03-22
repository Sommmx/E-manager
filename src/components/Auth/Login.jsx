import React, { useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 border-emerald-400 p-10 rounded-xl">
        <form
          onSubmit={submitHandler}
          className="flex flex-col items-center justify-center"
        >
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            className="border-2 outline-none bg-transparent  border-emerald-400 rounded-full py-2 px-3 placeholder:text-grey"
            type="Email"
            placeholder="Enter your email"
          />
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
            className="border-2 outline-none bg-transparent  border-emerald-400 rounded-full py-2 px-3 placeholder:text-grey mt-3"
            type="Password"
            placeholder="Enter your password"
          />
          <button className="font-semibold border-2 mt-5 border-none outline-none bg-emerald-400 rounded-2xl py-2 px-7 placeholder:text-white hover:bg-emerald-600">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
