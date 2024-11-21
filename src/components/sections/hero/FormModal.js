import React, { useState, useEffect } from "react";
import x from "../../../images/sections/gallery/x.svg";
import image from "../../../images/sections/hero/7f5ca32e92fe673cb921b3112106da9c.png";
import Description from "../../UI/Description";
import { Box, TextField, Typography } from "@mui/material";
import Button from "../../UI/Button";

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
      <div className="bg-white xl:w-[78.68%] xl:h-[71.28%] w-[90%] h-[80%] min-h-[730px] px-[3.05%] xl:py-[2.29%] py-[25px] rounded-md relative flex xl:flex-row flex-col justify-between xl:gap-[87px] gap-[50px]">
        <div>
          <div className="max-w-[468px] xl:mb-[63px] mb-[20px]">
            <h2 className="font-normal text-[32px] mb-4 uppercase xl:pt-[37px]">
              Do you have any questions?
            </h2>
            <Description className="font-normal text-[20px]">
              Leave your details and we will definitely contact you!
            </Description>
          </div>
          <form onSubmit={handleSubmit} className="xl:space-y-6 space-y-3">
            <div className="flex space-x-4">
              <div className="flex-1">
                <TextField
                  id="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  variant="standard"
                  required
                  className="w-full"
                  label="First Name"
                  sx={{
                    "& .MuiInput-underline:after": {
                      borderBottomColor: "#A40004", // Color when the input is focused
                    },
                  }}
                />
              </div>
              <div className="flex-1">
                <TextField
                  id="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  variant="standard"
                  required
                  className="w-full"
                  label="Last Name"
                  sx={{
                    "& .MuiInput-underline:after": {
                      borderBottomColor: "#A40004", // Color when the input is focused
                    },
                  }}
                />
              </div>
            </div>
            <div>
              <TextField
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                variant="standard"
                required
                className="w-full"
                label="Email"
                sx={{
                  "& .MuiInput-underline:after": {
                    borderBottomColor: "#A40004", // Color when the input is focused
                  },
                }}
              />
            </div>
            <div>
              <TextField
                id="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                variant="standard"
                required
                className="w-full"
                label="Phone"
                sx={{
                  "& .MuiInput-underline:after": {
                    borderBottomColor: "#A40004", // Color when the input is focused
                  },
                }}
              />
            </div>
            <div>
              <TextField
                id="message"
                multiline
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                variant="standard"
                required
                className="w-full mb-[44px]"
                label="Message"
                sx={{
                  "& .MuiInput-underline:after": {
                    borderBottomColor: "#A40004", // Color when the input is focused
                  },
                }}
              />
            </div>
            <Button variant="red-white" className="font-normal">
              Send
            </Button>
          </form>
        </div>
        <div className="flex justify-center">
          <img
            src={image}
            className="xl:max-w-[490px] grayscale object-cover xl:h-full w-[40%] xl:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default FormModal;
