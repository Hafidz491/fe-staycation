import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Houses = () => {
  const settings = {};

  return (
    <div className="w-12/12 px-[150px] my-[70px]">
      <h1 className="text-3xl font-medium text-secondColor mb-[20px]">
        Houses with beauty backyard
      </h1>

      <div>
        <Slider {...settings}></Slider>
      </div>
    </div>
  );
};
