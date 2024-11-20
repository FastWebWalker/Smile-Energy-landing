import React, { useState, useEffect } from "react";
import x from "../../../images/sections/gallery/x.svg";

const FormModal = ({ onSubmit, onClose }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ firstName, lastName, email, phone, message });
    onClose();
  };

  useEffect(() => {
    // Prevent scrolling when modal is open
    document.body.style.overflow = "hidden";

    // Cleanup function to restore scrolling when modal closes
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 z-[51] flex justify-center items-center">
      <button
        className="absolute top-4 right-4 text-white font-bold cursor-pointer z-40"
        onClick={onClose}>
        <img src={x} className="w-[28px] h-[28px]" alt="close-button" />
      </button>
      <div className="bg-white w-[450px] p-8 rounded-md relative">
        <h2 className="text-2xl font-bold mb-4">Do you have any questions?</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex space-x-4">
            <div className="flex-1">
              <label
                htmlFor="firstName"
                className="block mb-1 text-sm font-medium">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-redCustom"
                required
              />
            </div>
            <div className="flex-1">
              <label
                htmlFor="lastName"
                className="block mb-1 text-sm font-medium">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-redCustom"
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block mb-1 text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-redCustom"
              required
            />
          </div>
          <div>
            <label htmlFor="phone" className="block mb-1 text-sm font-medium">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-redCustom"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-1 text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-redCustom"
              rows={4}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-redCustom text-white px-4 py-2 rounded-md hover:bg-redCustomDark transition-colors duration-300">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormModal;
