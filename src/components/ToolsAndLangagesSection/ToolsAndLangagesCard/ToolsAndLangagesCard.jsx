import React from "react";

const ToolsAndLangagesCard = ({ title, iconUrl, isActive, onClick }) => {
  return (
    <div
      className={`Tools-card border border-red-500 rounded-lg transition ease delay-300 bg-black backdrop-blur-lg text-white relative  max-[640px]:p-8 text-center hover:bg-red-700   `}
      onClick={() => onClick()}
    >
      <div className="Tool-icon flex absolute items-center justify-center -top-4 -left-4 bg-black h-8 w-8 border border-red-700 rounded-lg">
        <img src={iconUrl} alt={title} className="h-auto w-5" />
      </div>
      <span className="text-2xl text-center flex items-center font-bold justify-center h-full max-[640px]:text-sm ">
        {title}
      </span>
    </div>
  );
};

export default ToolsAndLangagesCard;
