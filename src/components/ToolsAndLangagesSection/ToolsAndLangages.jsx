import React, { useState } from "react";
import { TOOLS } from "../../utilities/data";
import ToolsAndLangagesCard from "./ToolsAndLangagesCard/ToolsAndLangagesCard";
import ToolsAndLanguagesContent from "./ToolsAndLangagesContent/ToolsAndLanguagesContent";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "./ToolsAndLangages.css";
const ToolsAndLangages = () => {
  const [selectedItem, setSelectedItem] = useState(TOOLS[0]);
  const handleOnclick = function (data) {
    setSelectedItem(data);
  };
  useEffect(() => {
    AOS.init({
      disable: function () {
        var maxWidth = 800;
        return window.innerWidth < maxWidth;
      },
    });
  }, []);
  return (
    <section className="sm: px-0 mt-52 h-auto mb-32">
      <div>
        <h5 className="text-white mb-10 text-4xl font-semibold text-center md:text-6xl    ">
          Outils Techniques
        </h5>
        <div className="Tools-content flex flex-wrap  gap-32">
          <div
            className="Tools grid grid-cols-2  grid-rows-2 gap-6  aos-animate w-96 md: flex-2  "
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            {TOOLS.map((item) => (
              <ToolsAndLangagesCard
                key={item.title}
                iconUrl={item.icon}
                title={item.title}
                isActive={selectedItem.title === item.title}
                onClick={() => handleOnclick(item)}
              />
            ))}
          </div>
          <div
            className="Tools-info border border-red-500 rounded-lg aos-animate w-96 text-center w-auto sm: flex-1 h-[500px] md:h-[300px]
          "
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
          >
            <ToolsAndLanguagesContent
              heading={selectedItem.title}
              tools={selectedItem.tools}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default ToolsAndLangages;
