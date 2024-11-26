// import React, { useState, useEffect, useRef } from "react";
// import emailjs from "emailjs-com";
// import x from "../../../images/sections/gallery/x.svg";
// import image from "../../../images/sections/hero/7f5ca32e92fe673cb921b3112106da9c.png";
// import Description from "../../UI/Description";
// import { TextField } from "@mui/material";
// import Button from "../../UI/Button";
// import { useTranslation } from "react-i18next";
// import { motion } from "framer-motion";

// const FormModal = ({ onSubmit, onClose }) => {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [message, setMessage] = useState("");
//   const { t } = useTranslation();
//   const modalRef = useRef(null);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const templateParams = {
//       firstName,
//       lastName,
//       email,
//       phone,
//       message,
//     };

//     emailjs
//       .send(
//         "service_vq69hck",
//         "template_yj5yrge",
//         templateParams,
//         "O_Odw6jtQbJNh5cDP"
//       )
//       .then(
//         (response) => {
//           console.log("SUCCESS!", response.status, response.text);
//           onClose();
//         },
//         (err) => {
//           console.error("FAILED...", err);
//           alert("Failed to send form. Please try again.");
//         }
//       );
//   };

//   const handleEscPress = (event) => {
//     if (event.key === "Escape") {
//       onClose();
//     }
//   };

//   const handleClickOutside = (event) => {
//     if (modalRef.current && !modalRef.current.contains(event.target)) {
//       onClose();
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("keydown", handleEscPress);
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       window.removeEventListener("keydown", handleEscPress);
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   useEffect(() => {
//     document.body.style.overflow = "hidden";
//     return () => {
//       document.body.style.overflow = "unset";
//     };
//   }, []);

//   const modalVariants = {
//     hidden: { opacity: 0, scale: 0.8 },
//     visible: { opacity: 1, scale: 1 },
//     exit: { opacity: 0, scale: 0.8 },
//   };

//   return (
//     <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 z-[51] flex justify-center items-center p-4">
//       <button
//         className="absolute top-6 right-6 text-white font-bold cursor-pointer z-40 hover:opacity-80 transition-opacity"
//         onClick={onClose}>
//         <img src={x} className="w-8 h-8" alt="close-button" />
//       </button>
//       <motion.div
//         ref={modalRef}
//         className="w-full max-w-[1200px] bg-white rounded-lg overflow-hidden relative max-h-[90vh]"
//         variants={modalVariants}
//         initial="hidden"
//         animate="visible"
//         exit="exit"
//         transition={{ duration: 0.3, ease: "easeInOut" }}>
//         <div className="overflow-y-auto max-h-[90vh]">
//           <div className="flex flex-col lg:flex-row">
//             <div className="lg:w-[60%] p-4 md:p-6 lg:p-8">
//               <div className="mb-4 lg:mb-6">
//                 <h2 className="font-normal text-xl md:text-2xl lg:text-3xl mb-2 uppercase">
//                   {t("formModal.title")}
//                 </h2>
//                 <Description className="text-sm md:text-base lg:text-lg">
//                   {t("formModal.description")}
//                 </Description>
//               </div>
//               <form onSubmit={handleSubmit} className="space-y-4">
//                 <div className="flex flex-col md:flex-row gap-4">
//                   <TextField
//                     id="firstName"
//                     value={firstName}
//                     onChange={(e) => setFirstName(e.target.value)}
//                     variant="standard"
//                     required
//                     className="w-full"
//                     label="First Name"
//                     sx={{
//                       "& .MuiInput-underline:after": {
//                         borderBottomColor: "#A40004",
//                       },
//                     }}
//                   />
//                   <TextField
//                     id="lastName"
//                     value={lastName}
//                     onChange={(e) => setLastName(e.target.value)}
//                     variant="standard"
//                     required
//                     className="w-full"
//                     label="Last Name"
//                     sx={{
//                       "& .MuiInput-underline:after": {
//                         borderBottomColor: "#A40004",
//                       },
//                     }}
//                   />
//                 </div>
//                 <TextField
//                   id="email"
//                   type="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   variant="standard"
//                   required
//                   className="w-full"
//                   label="Email"
//                   sx={{
//                     "& .MuiInput-underline:after": {
//                       borderBottomColor: "#A40004",
//                     },
//                   }}
//                 />
//                 <TextField
//                   id="phone"
//                   type="tel"
//                   value={phone}
//                   onChange={(e) => setPhone(e.target.value)}
//                   variant="standard"
//                   required
//                   className="w-full"
//                   label="Phone"
//                   sx={{
//                     "& .MuiInput-underline:after": {
//                       borderBottomColor: "#A40004",
//                     },
//                   }}
//                 />
//                 <TextField
//                   id="message"
//                   multiline
//                   rows={3}
//                   value={message}
//                   onChange={(e) => setMessage(e.target.value)}
//                   variant="standard"
//                   required
//                   className="w-full"
//                   label="Message"
//                   sx={{
//                     "& .MuiInput-underline:after": {
//                       borderBottomColor: "#A40004",
//                     },
//                   }}
//                 />
//                 <button type="submit" className="inline-block">
//                   <Button variant="red-white" className="font-normal">
//                     Send
//                   </Button>
//                 </button>
//               </form>
//             </div>
//             <div className="lg:w-[40%] h-[200px] md:h-[300px] lg:h-auto">
//               <img
//                 src={image}
//                 className="w-full h-full object-cover grayscale"
//                 alt="form-modal-image"
//               />
//             </div>
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default FormModal;

import React, { useState, useEffect, useRef } from "react";
import emailjs from "emailjs-com";
import x from "../../../images/sections/gallery/x.svg";
import image from "../../../images/sections/hero/7f5ca32e92fe673cb921b3112106da9c.png";
import Description from "../../UI/Description";
import { TextField } from "@mui/material";
import Button from "../../UI/Button";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Notification from "./Notification";

const FormModal = ({ onSubmit, onClose }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [showNotification, setShowNotification] = useState(false);
  const { t } = useTranslation();
  const modalRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      firstName,
      lastName,
      email,
      phone,
      message,
    };

    emailjs
      .send(
        "service_vq69hck",
        "template_yj5yrge",
        templateParams,
        "O_Odw6jtQbJNh5cDP"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setShowNotification(true);
          setTimeout(() => {
            onClose();
          }, 1000);
        },
        (err) => {
          console.error("FAILED...", err);
          alert("Failed to send form. Please try again.");
        }
      );
  };

  const handleEscPress = (event) => {
    if (event.key === "Escape") {
      onClose();
    }
  };

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      onClose();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleEscPress);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("keydown", handleEscPress);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    // Save current scroll position
    const scrollPosition = window.pageYOffset;

    // Prevent scrolling on mount
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollPosition}px`;
    document.body.style.width = "100%";

    // Cleanup function
    return () => {
      // Re-enable scrolling on unmount
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";

      // Restore scroll position
      window.scrollTo(0, scrollPosition);
    };
  }, []);

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 },
  };

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 z-[51] flex justify-center items-center p-4">
        <button
          className="absolute top-6 right-6 text-white font-bold cursor-pointer z-40 hover:opacity-80 transition-opacity"
          onClick={onClose}>
          <img src={x} className="w-8 h-8" alt="close-button" />
        </button>
        <motion.div
          ref={modalRef}
          className="w-full max-w-[1200px] bg-white rounded-lg overflow-hidden relative sm:max-h-[90vh] max-h-[80vh]"
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ duration: 0.3, ease: "easeInOut" }}>
          <div className="overflow-y-auto max-h-[90vh]">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-[60%] p-4 md:p-6 lg:p-8">
                <div className="mb-4 lg:mb-6">
                  <h2 className="font-normal text-xl md:text-2xl lg:text-3xl mb-2 uppercase">
                    {t("formModal.title")}
                  </h2>
                  <Description className="text-sm md:text-base lg:text-lg">
                    {t("formModal.description")}
                  </Description>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex flex-col md:flex-row gap-4">
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
                          borderBottomColor: "#A40004",
                        },
                      }}
                    />
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
                          borderBottomColor: "#A40004",
                        },
                      }}
                    />
                  </div>
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
                        borderBottomColor: "#A40004",
                      },
                    }}
                  />
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
                        borderBottomColor: "#A40004",
                      },
                    }}
                  />
                  <TextField
                    id="message"
                    multiline
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    variant="standard"
                    required
                    className="w-full"
                    label="Message"
                    sx={{
                      "& .MuiInput-underline:after": {
                        borderBottomColor: "#A40004",
                      },
                    }}
                  />
                  <button type="submit" className="inline-block">
                    <Button variant="red-white" className="font-normal">
                      Send
                    </Button>
                  </button>
                </form>
              </div>
              <div className="lg:w-[40%] h-[200px] md:h-[300px] lg:h-auto">
                <img
                  src={image}
                  className="w-full h-full object-cover grayscale"
                  alt="form-modal-image"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <Notification
        message="Message sent successfully!"
        isVisible={showNotification}
        onClose={() => setShowNotification(false)}
      />
    </>
  );
};

export default FormModal;
