import React from "react";

const Loader = () => {
  return (
    <div>
      <div className="absolute right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2 ">
        <div className="border-t-transparent border-solid animate-spin  rounded-full border-[#2CAFFE] border-8 h-44 w-44"></div>
      </div>
    </div>
  );
};

export default Loader;
