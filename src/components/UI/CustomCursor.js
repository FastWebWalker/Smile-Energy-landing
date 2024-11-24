// import React, { useEffect, useState } from "react";
// import "./CustomCursor.css";

// const CustomCursor = () => {
//   const [position, setPosition] = useState({ x: 0, y: 0 });
//   const [clicked, setClicked] = useState(false);
//   const [hovered, setHovered] = useState(false);

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       setPosition({ x: e.clientX, y: e.clientY });
//     };

//     const handleMouseDown = () => setClicked(true);
//     const handleMouseUp = () => setClicked(false);

//     window.addEventListener("mousemove", handleMouseMove);
//     window.addEventListener("mousedown", handleMouseDown);
//     window.addEventListener("mouseup", handleMouseUp);

//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//       window.removeEventListener("mousedown", handleMouseDown);
//       window.removeEventListener("mouseup", handleMouseUp);
//     };
//   }, []);

//   // Example: Add hover effect for buttons
//   useEffect(() => {
//     const handleMouseEnter = () => setHovered(true);
//     const handleMouseLeave = () => setHovered(false);

//     const buttons = document.querySelectorAll("button");
//     buttons.forEach((button) => {
//       button.addEventListener("mouseenter", handleMouseEnter);
//       button.addEventListener("mouseleave", handleMouseLeave);
//     });

//     return () => {
//       buttons.forEach((button) => {
//         button.removeEventListener("mouseenter", handleMouseEnter);
//         button.removeEventListener("mouseleave", handleMouseLeave);
//       });
//     };
//   }, []);

//   return (
//     <div
//       style={{
//         position: "fixed",
//         top: `${position.y}px`,
//         left: `${position.x}px`,
//         width: clicked ? "40px" : hovered ? "30px" : "20px",
//         height: clicked ? "40px" : hovered ? "30px" : "20px",
//         backgroundColor: clicked
//           ? "rgba(255, 69, 58, 0.8)"
//           : hovered
//           ? "rgba(0, 122, 255, 0.8)"
//           : "rgba(255, 255, 255, 0.8)",
//         border: "2px solid rgba(0, 0, 0, 0.2)",
//         borderRadius: "50%",
//         pointerEvents: "none",
//         transform: "translate(-50%, -50%)",
//         transition:
//           "width 0.2s, height 0.2s, background-color 0.2s, transform 0.1s",
//         zIndex: 1000,
//         boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
//         mixBlendMode: "difference", // Modern effect to contrast with background
//         animation: clicked ? "pulse 0.5s ease-out" : "none", // Add pulse animation
//       }}
//     />
//   );
// };

// export default CustomCursor;

import React, { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  useEffect(() => {
    const handleMouseEnter = () => setHovered(true);
    const handleMouseLeave = () => setHovered(false);

    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
      button.addEventListener("mouseenter", handleMouseEnter);
      button.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      buttons.forEach((button) => {
        button.removeEventListener("mouseenter", handleMouseEnter);
        button.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div
        style={{
          position: "fixed",
          top: `${position.y}px`,
          left: `${position.x}px`,
          width: clicked ? "40px" : hovered ? "30px" : "20px",
          height: clicked ? "40px" : hovered ? "30px" : "20px",
          backgroundColor: clicked
            ? "rgba(255, 69, 58, 0.8)"
            : hovered
            ? "rgba(0, 122, 255, 0.8)"
            : "rgba(255, 255, 255, 0.8)",
          border: "2px solid rgba(0, 0, 0, 0.2)",
          borderRadius: "50%",
          pointerEvents: "none",
          transform: "translate(-50%, -50%)",
          transition:
            "width 0.2s, height 0.2s, background-color 0.2s, transform 0.1s",
          zIndex: 1000,
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
          mixBlendMode: "difference",
          animation: clicked ? "pulse 0.5s ease-out" : "none",
        }}
      />
      {/* Hide default cursor */}
      <style>
        {`
          * {
            cursor: none !important;
          }
        `}
      </style>
    </>
  );
};

export default CustomCursor;

// import React, { useEffect, useState } from "react";

// const CustomCursor = () => {
//   const [position, setPosition] = useState({ x: 0, y: 0 });
//   const [clicked, setClicked] = useState(false);
//   const [hovered, setHovered] = useState(false);

//   // Colors from the dental health theme
//   const colors = {
//     red: "#A40004",
//     grey: "#808080",
//     white: "#FFFFFF",
//   };

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       setPosition({ x: e.clientX, y: e.clientY });
//     };

//     const handleMouseDown = () => setClicked(true);
//     const handleMouseUp = () => setClicked(false);

//     window.addEventListener("mousemove", handleMouseMove);
//     window.addEventListener("mousedown", handleMouseDown);
//     window.addEventListener("mouseup", handleMouseUp);

//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//       window.removeEventListener("mousedown", handleMouseDown);
//       window.removeEventListener("mouseup", handleMouseUp);
//     };
//   }, []);

//   useEffect(() => {
//     const handleMouseEnter = () => setHovered(true);
//     const handleMouseLeave = () => setHovered(false);

//     // Adding hover effect for interactive elements
//     const interactiveElements = document.querySelectorAll(
//       "button, a, input, select, textarea, [role='button']"
//     );

//     interactiveElements.forEach((element) => {
//       element.addEventListener("mouseenter", handleMouseEnter);
//       element.addEventListener("mouseleave", handleMouseLeave);
//     });

//     return () => {
//       interactiveElements.forEach((element) => {
//         element.removeEventListener("mouseenter", handleMouseEnter);
//         element.removeEventListener("mouseleave", handleMouseLeave);
//       });
//     };
//   }, []);

//   return (
//     <>
//       {/* Main cursor */}
//       <div
//         className="pointer-events-none fixed z-50"
//         style={{
//           top: `${position.y}px`,
//           left: `${position.x}px`,
//           width: clicked ? "40px" : hovered ? "35px" : "20px",
//           height: clicked ? "40px" : hovered ? "35px" : "20px",
//           backgroundColor: clicked
//             ? colors.red
//             : hovered
//             ? colors.grey
//             : colors.white,
//           borderRadius: "50%",
//           transform: "translate(-50%, -50%)",
//           transition:
//             "width 0.3s ease-out, height 0.3s ease-out, background-color 0.3s ease-out",
//           opacity: 0.9,
//           boxShadow: `0 0 10px ${colors.grey}40`,
//           border: `2px solid ${colors.grey}`,
//         }}
//       />

//       {/* Secondary ring */}
//       <div
//         className="pointer-events-none fixed z-40"
//         style={{
//           top: `${position.y}px`,
//           left: `${position.x}px`,
//           width: clicked ? "50px" : hovered ? "45px" : "30px",
//           height: clicked ? "50px" : hovered ? "45px" : "30px",
//           border: `2px solid ${colors.red}`,
//           borderRadius: "50%",
//           transform: "translate(-50%, -50%)",
//           transition:
//             "width 0.2s ease-out, height 0.2s ease-out, opacity 0.2s ease-out",
//           opacity: clicked ? 0.8 : hovered ? 0.6 : 0.4,
//         }}
//       />

//       {/* Hide default cursor */}
//       <style>
//         {`
//           * {
//             cursor: none !important;
//           }
//         `}
//       </style>
//     </>
//   );
// };

// export default CustomCursor;

// import React, { useEffect, useState } from "react";

// // Variant 1: Minimal Tooth Shape
// const CustomCursor = () => {
//   const [position, setPosition] = useState({ x: 0, y: 0 });
//   const [clicked, setClicked] = useState(false);

//   useEffect(() => {
//     const handleMouseMove = (e) => setPosition({ x: e.clientX, y: e.clientY });
//     const handleMouseDown = () => setClicked(true);
//     const handleMouseUp = () => setClicked(false);

//     window.addEventListener("mousemove", handleMouseMove);
//     window.addEventListener("mousedown", handleMouseDown);
//     window.addEventListener("mouseup", handleMouseUp);

//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//       window.removeEventListener("mousedown", handleMouseDown);
//       window.removeEventListener("mouseup", handleMouseUp);
//     };
//   }, []);

//   return (
//     <div
//       className="fixed pointer-events-none z-50"
//       style={{
//         top: `${position.y}px`,
//         left: `${position.x}px`,
//         transform: "translate(-50%, -50%)",
//       }}>
//       <svg
//         width={clicked ? "30" : "24"}
//         height={clicked ? "30" : "24"}
//         viewBox="0 0 24 24"
//         style={{
//           transition: "all 0.2s ease",
//           fill: clicked ? "#A40004" : "#808080",
//         }}>
//         <path d="M12 2C7.5 2 4 5.5 4 10c0 2.5 1 4.5 2 6s2 3 2 4.5V22h8v-1.5c0-1.5 1-3 2-4.5s2-3.5 2-6c0-4.5-3.5-8-8-8z" />
//       </svg>
//     </div>
//   );
// };

// export default CustomCursor;

// import { useEffect, useState } from "react";
// // Variant 2: Dot with Pulse Effect
// const CustomCursor = () => {
//   const [position, setPosition] = useState({ x: 0, y: 0 });
//   const [clicked, setClicked] = useState(false);
//   const [hovered, setHovered] = useState(false);

//   useEffect(() => {
//     const handleMouseMove = (e) => setPosition({ x: e.clientX, y: e.clientY });
//     const handleMouseDown = () => setClicked(true);
//     const handleMouseUp = () => setClicked(false);

//     window.addEventListener("mousemove", handleMouseMove);
//     window.addEventListener("mousedown", handleMouseDown);
//     window.addEventListener("mouseup", handleMouseUp);

//     const handleMouseEnter = () => setHovered(true);
//     const handleMouseLeave = () => setHovered(false);
//     const elements = document.querySelectorAll("button, a, input");
//     elements.forEach((el) => {
//       el.addEventListener("mouseenter", handleMouseEnter);
//       el.addEventListener("mouseleave", handleMouseLeave);
//     });

//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//       window.removeEventListener("mousedown", handleMouseDown);
//       window.removeEventListener("mouseup", handleMouseUp);
//       elements.forEach((el) => {
//         el.removeEventListener("mouseenter", handleMouseEnter);
//         el.removeEventListener("mouseleave", handleMouseLeave);
//       });
//     };
//   }, []);

//   return (
//     <>
//       <div
//         className="fixed pointer-events-none z-50"
//         style={{
//           top: `${position.y}px`,
//           left: `${position.x}px`,
//           transform: "translate(-50%, -50%)",
//         }}>
//         <div
//           className="rounded-full"
//           style={{
//             width: clicked ? "20px" : "12px",
//             height: clicked ? "20px" : "12px",
//             backgroundColor: "#A40004",
//             transition: "all 0.2s ease",
//             opacity: hovered ? 0.8 : 0.6,
//           }}
//         />
//         {hovered && (
//           <div
//             className="absolute rounded-full animate-ping"
//             style={{
//               top: "50%",
//               left: "50%",
//               width: "30px",
//               height: "30px",
//               border: "2px solid #A40004",
//               transform: "translate(-50%, -50%)",
//             }}
//           />
//         )}
//       </div>
//     </>
//   );
// };

// export default CustomCursor;

// import { useEffect, useState } from "react";
// // Variant 3: Modern Ring
// const CustomCursor = () => {
//   const [position, setPosition] = useState({ x: 0, y: 0 });
//   const [clicked, setClicked] = useState(false);

//   useEffect(() => {
//     const handleMouseMove = (e) => setPosition({ x: e.clientX, y: e.clientY });
//     const handleMouseDown = () => setClicked(true);
//     const handleMouseUp = () => setClicked(false);

//     window.addEventListener("mousemove", handleMouseMove);
//     window.addEventListener("mousedown", handleMouseDown);
//     window.addEventListener("mouseup", handleMouseUp);

//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//       window.removeEventListener("mousedown", handleMouseDown);
//       window.removeEventListener("mouseup", handleMouseUp);
//     };
//   }, []);

//   return (
//     <>
//       <div
//         className="fixed pointer-events-none z-50"
//         style={{
//           top: `${position.y}px`,
//           left: `${position.x}px`,
//           transform: "translate(-50%, -50%)",
//         }}>
//         <div
//           style={{
//             width: clicked ? "40px" : "30px",
//             height: clicked ? "40px" : "30px",
//             border: `2px solid ${clicked ? "#A40004" : "#808080"}`,
//             borderRadius: "50%",
//             transition: "all 0.2s ease",
//             opacity: 0.8,
//           }}
//         />
//         <div
//           className="absolute rounded-full"
//           style={{
//             top: "50%",
//             left: "50%",
//             width: "4px",
//             height: "4px",
//             backgroundColor: clicked ? "#A40004" : "#808080",
//             transform: "translate(-50%, -50%)",
//             transition: "all 0.2s ease",
//           }}
//         />
//       </div>
//     </>
//   );
// };

// export default CustomCursor;
