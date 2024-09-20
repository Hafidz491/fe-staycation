import { itemProductsBig } from "../../../../constants/constants";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const CardSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 4000,
    adaptiveHeight: true,
  };

  return (
    <div className="relative container-slider 2xl:max-w-[530px] lg:max-w-[320px]">
      <Slider {...settings}>
        {itemProductsBig.map((item) => (
          <div
            key={item.id}
            className="relative slider-container overflow-hidden bg-white rounded-2xl shadow-lg card lg:h-[450px] 2xl:h-[660px]"
          >
            <div>
              <span className="absolute top-0 right-0 z-10 font-semibold px-2 py-1 2xl:w-[180px] lg:w-[150px] text-center text-white bg-bannerSpecial rounded-bl-2xl ">
                {item.special}{" "}
                <span className="font-extralight">{item.option}</span>
              </span>
            </div>
            <img
              src={item.img}
              alt={item.tittle}
              className="object-cover w-full h-full overflow-hidden"
            />

            <div className="absolute z-10 pb-4 text-white bottom-10 left-4">
              <span className="text-lg font-normal text-white 2xl:text-2xl">
                {item.tittle}
              </span>
              <p className="text-white font-extralight 2xl:text-xl">
                {item.city}
              </p>
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-40"></div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
