// // import React, { useState, useEffect, useRef } from "react";
// // import x from "../../../images/sections/gallery/x.svg";
// // import image from "../../../images/sections/hero/7f5ca32e92fe673cb921b3112106da9c.png";
// // import Description from "../../UI/Description";
// // import { TextField } from "@mui/material";
// // import Button from "../../UI/Button";
// // import ContentContainer from "../../UI/ContentContainer";
// // import { useTranslation } from "react-i18next";
// // import { motion } from "framer-motion";

// // const FormModal = ({ onSubmit, onClose }) => {
// //   const [firstName, setFirstName] = useState("");
// //   const [lastName, setLastName] = useState("");
// //   const [email, setEmail] = useState("");
// //   const [phone, setPhone] = useState("");
// //   const [message, setMessage] = useState("");
// //   const { t } = useTranslation();
// //   const modalRef = useRef(null);

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     onSubmit({ firstName, lastName, email, phone, message });
// //     onClose();
// //   };

// //   const handleEscPress = (event) => {
// //     if (event.key === "Escape") {
// //       onClose();
// //     }
// //   };

// //   const handleClickOutside = (event) => {
// //     if (modalRef.current && !modalRef.current.contains(event.target)) {
// //       onClose();
// //     }
// //   };

// //   useEffect(() => {
// //     window.addEventListener("keydown", handleEscPress);
// //     document.addEventListener("mousedown", handleClickOutside);
// //     return () => {
// //       window.removeEventListener("keydown", handleEscPress);
// //       document.removeEventListener("mousedown", handleClickOutside);
// //     };
// //   }, []);

// //   useEffect(() => {
// //     document.body.style.overflow = "hidden";
// //     return () => {
// //       document.body.style.overflow = "unset";
// //     };
// //   }, []);

// //   const modalVariants = {
// //     hidden: { opacity: 0, scale: 0.8 },
// //     visible: { opacity: 1, scale: 1 },
// //     exit: { opacity: 0, scale: 0.8 },
// //   };

// //   return (
// //     <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 z-[51] flex justify-center items-center">
// //       <button
// //         className="absolute top-4 right-4 text-white font-bold cursor-pointer z-40"
// //         onClick={onClose}>
// //         <img src={x} className="w-[28px] h-[28px]" alt="close-button" />
// //       </button>
// //       <motion.div
// //         ref={modalRef}
// //         className="w-full max-w-[90vw] bg-white rounded-md overflow-hidden relative"
// //         variants={modalVariants}
// //         initial="hidden"
// //         animate="visible"
// //         exit="exit"
// //         transition={{ duration: 0.3, ease: "easeInOut" }}>
// //         <ContentContainer>
// //           <div className="bg-white max-h-[80vh] overflow-x-hidden overflow-y-scroll px-[3.05%] xl:py-[2.29%] py-[25px] rounded-md relative flex lg:flex-row flex-col justify-between xl:gap-[87px] gap-[20px]">
// //             <div>
// //               <div className="max-w-[468px] xl:mb-[63px] mb-[20px]">
// //                 <h2 className="font-normal text-[32px] mb-4 uppercase xl:pt-[37px]">
// //                   {t("formModal.title")}
// //                 </h2>
// //                 <Description className="font-normal text-[20px]">
// //                   {t("formModal.description")}
// //                 </Description>
// //               </div>
// //               <form onSubmit={handleSubmit} className="xl:space-y-6 space-y-3">
// //                 <div className="flex space-x-4">
// //                   <div className="flex-1">
// //                     <TextField
// //                       id="firstName"
// //                       value={firstName}
// //                       onChange={(e) => setFirstName(e.target.value)}
// //                       variant="standard"
// //                       required
// //                       className="w-full"
// //                       label="First Name"
// //                       sx={{
// //                         "& .MuiInput-underline:after": {
// //                           borderBottomColor: "#A40004",
// //                         },
// //                       }}
// //                     />
// //                   </div>
// //                   <div className="flex-1">
// //                     <TextField
// //                       id="lastName"
// //                       value={lastName}
// //                       onChange={(e) => setLastName(e.target.value)}
// //                       variant="standard"
// //                       required
// //                       className="w-full"
// //                       label="Last Name"
// //                       sx={{
// //                         "& .MuiInput-underline:after": {
// //                           borderBottomColor: "#A40004",
// //                         },
// //                       }}
// //                     />
// //                   </div>
// //                 </div>
// //                 <div>
// //                   <TextField
// //                     id="email"
// //                     type="email"
// //                     value={email}
// //                     onChange={(e) => setEmail(e.target.value)}
// //                     variant="standard"
// //                     required
// //                     className="w-full"
// //                     label="Email"
// //                     sx={{
// //                       "& .MuiInput-underline:after": {
// //                         borderBottomColor: "#A40004",
// //                       },
// //                     }}
// //                   />
// //                 </div>
// //                 <div>
// //                   <TextField
// //                     id="phone"
// //                     type="tel"
// //                     value={phone}
// //                     onChange={(e) => setPhone(e.target.value)}
// //                     variant="standard"
// //                     required
// //                     className="w-full"
// //                     label="Phone"
// //                     sx={{
// //                       "& .MuiInput-underline:after": {
// //                         borderBottomColor: "#A40004",
// //                       },
// //                     }}
// //                   />
// //                 </div>
// //                 <div>
// //                   <TextField
// //                     id="message"
// //                     multiline
// //                     rows={4}
// //                     value={message}
// //                     onChange={(e) => setMessage(e.target.value)}
// //                     variant="standard"
// //                     required
// //                     className="w-full mb-[44px]"
// //                     label="Message"
// //                     sx={{
// //                       "& .MuiInput-underline:after": {
// //                         borderBottomColor: "#A40004",
// //                       },
// //                     }}
// //                   />
// //                 </div>
// //                 <button onClick={handleSubmit}>
// //                   <Button variant="red-white" className="font-normal mb-[20px]">
// //                     Send
// //                   </Button>
// //                 </button>
// //               </form>
// //             </div>
// //             <div className="flex justify-center">
// //               <img
// //                 src={image}
// //                 className="lg:max-w-[490px] md:max-w-[600px] grayscale object-cover h-full"
// //                 alt="form-modal-image"
// //               />
// //             </div>
// //           </div>
// //         </ContentContainer>
// //       </motion.div>
// //     </div>
// //   );
// // };

// // export default FormModal;

// import React, { useState, useEffect, useRef } from "react";
// import emailjs from "emailjs-com"; // Додайте цей імпорт
// import x from "../../../images/sections/gallery/x.svg";
// import image from "../../../images/sections/hero/7f5ca32e92fe673cb921b3112106da9c.png";
// import Description from "../../UI/Description";
// import { TextField } from "@mui/material";
// import Button from "../../UI/Button";
// import ContentContainer from "../../UI/ContentContainer";
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

//     // Дані для надсилання
//     const templateParams = {
//       firstName,
//       lastName,
//       email,
//       phone,
//       message,
//     };

//     // Виклик EmailJS
//     emailjs
//       .send(
//         "service_way53og", // Замініть на ваш Service ID
//         "template_kq46inf", // Замініть на ваш Template ID
//         templateParams,
//         "1QWvUi0rPUGnqqFGx" // Замініть на ваш Public Key
//       )
//       .then(
//         (response) => {
//           console.log("SUCCESS!", response.status, response.text);
//           alert("Form successfully sent!");
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
//     <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 z-[51] flex justify-center items-center">
//       <button
//         className="absolute top-4 right-4 text-white font-bold cursor-pointer z-40"
//         onClick={onClose}>
//         <img src={x} className="w-[28px] h-[28px]" alt="close-button" />
//       </button>
//       <motion.div
//         ref={modalRef}
//         className="w-full max-w-[87.68vw] bg-white rounded-md overflow-hidden relative"
//         variants={modalVariants}
//         initial="hidden"
//         animate="visible"
//         exit="exit"
//         transition={{ duration: 0.3, ease: "easeInOut" }}>
//         <ContentContainer>
//           <div className="bg-white max-h-[62.6vh] overflow-x-hidden overflow-y-scroll px-[3.05%] xl:py-[2.29%] py-[25px] rounded-md relative flex lg:flex-row flex-col justify-between xl:gap-[87px] gap-[20px]">
//             <div>
//               <div className="max-w-[468px] xl:mb-[63px] mb-[20px]">
//                 <h2 className="font-normal text-[32px] mb-4 uppercase xl:pt-[37px]">
//                   {t("formModal.title")}
//                 </h2>
//                 <Description className="font-normal text-[20px]">
//                   {t("formModal.description")}
//                 </Description>
//               </div>
//               <form onSubmit={handleSubmit} className="xl:space-y-6 space-y-3">
//                 <div className="flex space-x-4">
//                   <div className="flex-1">
//                     <TextField
//                       id="firstName"
//                       value={firstName}
//                       onChange={(e) => setFirstName(e.target.value)}
//                       variant="standard"
//                       required
//                       className="w-full"
//                       label="First Name"
//                       sx={{
//                         "& .MuiInput-underline:after": {
//                           borderBottomColor: "#A40004",
//                         },
//                       }}
//                     />
//                   </div>
//                   <div className="flex-1">
//                     <TextField
//                       id="lastName"
//                       value={lastName}
//                       onChange={(e) => setLastName(e.target.value)}
//                       variant="standard"
//                       required
//                       className="w-full"
//                       label="Last Name"
//                       sx={{
//                         "& .MuiInput-underline:after": {
//                           borderBottomColor: "#A40004",
//                         },
//                       }}
//                     />
//                   </div>
//                 </div>
//                 <div>
//                   <TextField
//                     id="email"
//                     type="email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     variant="standard"
//                     required
//                     className="w-full"
//                     label="Email"
//                     sx={{
//                       "& .MuiInput-underline:after": {
//                         borderBottomColor: "#A40004",
//                       },
//                     }}
//                   />
//                 </div>
//                 <div>
//                   <TextField
//                     id="phone"
//                     type="tel"
//                     value={phone}
//                     onChange={(e) => setPhone(e.target.value)}
//                     variant="standard"
//                     required
//                     className="w-full"
//                     label="Phone"
//                     sx={{
//                       "& .MuiInput-underline:after": {
//                         borderBottomColor: "#A40004",
//                       },
//                     }}
//                   />
//                 </div>
//                 <div>
//                   <TextField
//                     id="message"
//                     multiline
//                     rows={4}
//                     value={message}
//                     onChange={(e) => setMessage(e.target.value)}
//                     variant="standard"
//                     required
//                     className="w-full mb-[44px]"
//                     label="Message"
//                     sx={{
//                       "& .MuiInput-underline:after": {
//                         borderBottomColor: "#A40004",
//                       },
//                     }}
//                   />
//                 </div>
//                 <button type="submit">
//                   <Button variant="red-white" className="font-normal mb-[20px]">
//                     Send
//                   </Button>
//                 </button>
//               </form>
//             </div>
//             <div className="flex justify-center">
//               <img
//                 src={image}
//                 className="lg:max-w-[490px] md:max-w-[600px] grayscale object-cover h-full"
//                 alt="form-modal-image"
//               />
//             </div>
//           </div>
//         </ContentContainer>
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
import ContentContainer from "../../UI/ContentContainer";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const FormModal = ({ onSubmit, onClose }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
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
        "service_way53og",
        "template_kq46inf",
        templateParams,
        "1QWvUi0rPUGnqqFGx"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Form successfully sent!");
          onClose();
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
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 },
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 z-[51] flex justify-center items-center p-4">
      <button
        className="absolute top-6 right-6 text-white font-bold cursor-pointer z-40 hover:opacity-80 transition-opacity"
        onClick={onClose}>
        <img src={x} className="w-8 h-8" alt="close-button" />
      </button>
      <motion.div
        ref={modalRef}
        className="w-full max-w-[1200px] bg-white rounded-lg overflow-hidden relative max-h-[90vh]"
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
  );
};

export default FormModal;
