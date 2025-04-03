import React, { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", moveCursor);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed top-0 left-0 flex items-center justify-center z-50"
      style={{
        transform: `translate(${position.x - 20}px, ${position.y - 20}px)`,
      }}
    >
      {/* Outer Circle */}
      <div className="w-12 h-12 border border-purple-200 rounded-full absolute"></div>
      {/* Inner Circle */}
      <div className="w-4 h-4 bg-purple-400 rounded-full"></div>
    </div>
  );
};

export default CustomCursor;
