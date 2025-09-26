"use client";

import { useState } from "react";
import { createUser } from "../request";
import { useRouter } from "next/navigation";

export default function signUp() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    createUser(email, password).then(async (out) => {
      if (!out) {
        setError(true);
        return;
      }
      router.push("/sign-in");
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
        <div>first name</div>
        <input
          className="border-1 mb-5 rounded-sm"
          placeholder="Your first name"
          required
          type="text"
          onChange={(e) => setFirstname(e.target.value)}
          value={firstname}
        />
        <div>last name</div>
        <input
          className="border-1 mb-5 rounded-sm"
          placeholder="Your last name"
          required
          type="text"
          onChange={(e) => setLastname(e.target.value)}
          value={lastname}
        />
        <div className="flex items-center justify-center mb-3">
          <button
            className="bg-black text-white w-full py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign Up
          </button>
        </div>
      </form>
      {error && <div>wrong email or password</div>}
    </div>
  );
}
