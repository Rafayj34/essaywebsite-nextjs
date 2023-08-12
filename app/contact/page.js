"use client"
import React, { useState } from "react";

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [query, setQuery] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
          },
        body: JSON.stringify(
            {
                'name':name,
                'email':email,
                'phoneNumber': phoneNumber,
                'query': query
            }
        ),
      });

      if (response.ok) {
        console.log("Form submitted successfully");
        // Clear form fields
        setName("");
        setEmail("");
        setPhoneNumber("");
        setQuery("");
      } else {
        console.error("Error submitting form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="max-w-[1100px] text-center container mt-32 h-auto mx-auto p-10">
      <div className="m-10  border border-gray-300 p-6 rounded-md">
        <h1 className="my-5">
          <span className="font-bold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
            Contact us Directly
          </span>
        </h1>
        <form onSubmit={handleSubmit} className="text-left">
          <div className="mb-4">
            <input
              type="text"
              className="border border-gray-300 focus:outline-none focus:ring focus:ring-orange-700 rounded-md p-2 w-full"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              className="border border-gray-300 focus:outline-none focus:ring focus:ring-orange-700 rounded-md p-2 w-full"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="tel"
              className="border border-gray-300 focus:outline-none focus:ring focus:ring-orange-700 rounded-md p-2 w-full"
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <textarea
              className="border border-gray-300 focus:outline-none focus:ring focus:ring-orange-700 rounded-md p-2 w-full"
              placeholder="Query"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-orange-400 text-white px-4 py-2 rounded-md hover:bg-orange-500 transition-colors"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
