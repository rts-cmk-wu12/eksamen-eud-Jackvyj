"use client";

import { useState } from "react";
import { createToken } from "../request";
import { useRouter } from "next/navigation";

export default function signIn() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    createToken(email, password).then(async (out) => {
      if (!out) {
        setError(true);
        return;
      }
      localStorage.setItem("token", out.token);
      localStorage.setItem("userid", out.userId);
      router.push("/");
    });
  };

  return (
    <div className="justify-items-center block">
      <form
        className="border-1 border-b-gray-200 rounded-sm p-5"
        onSubmit={handleSubmit}
      >
        <div>Email</div>
        <input
          className="border-1 mb-5 rounded-sm"
          placeholder="Your email address"
          required
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <div>Password</div>
        <input
          className="border-1 mb-5 rounded-sm"
          placeholder="Your password"
          required
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <div className="flex items-center justify-center mb-3">
          <button
            className="bg-black text-white w-full py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign In
          </button>
        </div>
        <a className="inline-block align-baseline text-sm text-blue-500 hover:text-blue-800">
          Forgot Password?
        </a>
      </form>
      {error && <div>wrong email or password</div>}
    </div>
  );
}
