import React from "react";

const ToolsAndLanguagesContent = ({ heading, tools }) => {
  return (
    <div className="">
      <h5 className="text-red-500 p-6 border-b  font-bold border-red-500  text-2xl ">
        {heading}
      </h5>
      <div className="grid justify-items-start px-7 py-4 ">
        {tools.map((item) => (
          <div className="grid grid-cols-3 gap-3  sm:gap-4 mb-7 md:mb-2">
            <h6
              className="text-white text-xl pr-4  font-bold max-[640px]:text-lg"
              key={item.title}
            >
              {item.tool}
            </h6>
            <img src={item.icon} className="h-7 w-7 max-[640px]: w-5" alt="" />
            <h6 className="text-white font-bold text-sm max-[640px]:text-xs">
              <em>{item.role}</em>{" "}
            </h6>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ToolsAndLanguagesContent;
