import React from "react";
import { STEPS } from "../../utilities/steps";
import ProductionProcessCard from "./ProductionProcessCard";
import Slider from "react-slick";

const ProductionProcess = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="">
      <h5 className="text-white m-8 text-4xl font-semibold text-center md:text-6xl    max-[640px]: ">
        Processus de Production
      </h5>
      <div className="experience-content ">
        <Slider {...settings} className=" flex gap-6 max-[640px]:gap-3">
          {STEPS.map((item) => (
            <ProductionProcessCard key={item.title} steps={item} />
          ))}
        </Slider>
      </div>
    </section>
  );
};
export default ProductionProcess;
