import React from "react";

const ChartLoader = () => {
  return (
    <div className="flex justify-center items-center">
      <span className="loading loading-bars loading-xs text-white"></span>
      <span className="loading loading-bars loading-sm text-white"></span>
      <span className="loading loading-barsr loading-md text-white"></span>
      <span className="loading loading-bars loading-lg text-white"></span>
    </div>
  );
};

export default ChartLoader;
