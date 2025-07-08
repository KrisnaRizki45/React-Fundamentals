import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-white">
      <div className="w-16 h-16 border-4 border-t-transparent border-blue-500 rounded-full animate-spin"></div>
    </div>
  );
};


export default LoadingSpinner;