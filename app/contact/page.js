"use client"
import React, { useState } from "react";
import "react-toastify/dist/ReactToastify.css"; // Import the CSS for styling
import { ToastContainer, toast } from "react-toastify";

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [query, setQuery] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = toast.loading("Query is being sent ...", { autoClose: false });

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
        const responseData = await response.text(); 
        toast.update(id, {
          render: responseData,
          type: "success",
          isLoading: false,
          autoClose: 5000,
        });
        setName("");
        setEmail("");
        setPhoneNumber("");
        setQuery("");
      } else {
        const responseData  = await response.json();
        toast.update(id, {
          render: responseData,
          type: "error",
          isLoading: false,
          autoClose: 5000,
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="max-w-[1100px] text-center container mt-32 h-auto mx-auto sm:p-2 md:p-10">
      <div className="  sm:border sm:border-gray-300 p-6 rounded-md">
        <h1 className="my-5">
          <span className="font-bold  text-2xl sm:text-3xl md:text-4xl  lg:text-5xl text-orange-600">
            Contact us Directly
          </span>
        </h1>
        <form onSubmit={handleSubmit} className="text-left">
          <div className="mb-4">
            <input
              type="text"
              className="border border-gray-300 focus:outline-none focus:ring-1 focus:ring-orange-700 rounded-md p-2 w-full"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              className="border border-gray-300 focus:outline-none focus:ring-1 focus:ring-orange-700 rounded-md p-2 w-full"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="tel"
              className="border border-gray-300 focus:outline-none focus:ring-1 focus:ring-orange-700 rounded-md p-2 w-full"
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <textarea
              className="border border-gray-300 focus:outline-none focus:ring-1 focus:ring-orange-700 rounded-md p-2 w-full"
              placeholder="Query"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700 transition-colors"
          >
            Submit
          </button>
        </form>
      </div>
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick
        rtl={false}
        theme="dark"
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default ContactPage;
