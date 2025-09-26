"use client";

import { useEffect, useState } from "react";
import { subscribeNewsletter } from "../request";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [response, setResponse] = useState();
  const handleSubmit = async (e) => {
    e.preventDefault();
    subscribeNewsletter(email).then((out) => setResponse(out));
  };

  return (
    <div className="justify-items-center">
      <div>
        {" "}
        Want to keep up to date with news for swapper? Enter your email below
        and subscribe to our weekly newsletter!
      </div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Your email address"
          required
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <button>subscribe</button>
      </form>
      {response && (
        <div
          className="bg-green-100 border-t border-b border-green-500 text-green-700 px-4 py-3"
          role="alert"
        >
          <p className="font-bold">Thank you!</p>
          <p className="text-sm">
            You have Successfully subscribed to our newsletter
          </p>
        </div>
      )}
    </div>
  );
}
