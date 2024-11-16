import React from "react";

const LShapeReverse = () => {
  return (
    <div className="absolute bottom-[-25px] right-0 z-0">
      <div
        className="relative h-[25px] w-[94.60px] bg-transparent justify-end z-0"
        style={{
          filter: "none",
          opacity: 1,
          color: "initial",
        }}>
        {/* Vertical Line */}
        <div className="absolute right-0 bottom-0 w-[2px] h-full bg-redCustom"></div>
        {/* Horizontal Line */}
        <div className="absolute right-0 bottom-0 h-[2px] w-full bg-redCustom"></div>
      </div>
    </div>
  );
};

export default LShapeReverse;
