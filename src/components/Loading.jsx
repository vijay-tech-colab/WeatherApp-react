import React from "react";

const Loading = () => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-white/20 backdrop-blur-sm z-50">
      <div className="w-16 h-16 border-4 border-white/50 border-t-blue-500 rounded-full animate-spin"></div>
    </div>
  );
};

export default Loading;
