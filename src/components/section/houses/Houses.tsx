import Slider from "react-slick";
import { housesPoduct } from "../../../constants/constants";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../../../index.css";

export const Houses = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 2000,
    adaptiveHeight: true,
    pauseOnHover: true,
  };

  return (
    <div className="w-12/12 px-[150px] my-[70px]">
      <h1 className="text-3xl font-medium text-secondColor mb-[20px]">
        Houses with beauty backyard
      </h1>

      <div>
        <Slider {...settings}>
          {housesPoduct.map((item) => (
            <div
              key={item.id}
              className="content-item relative overflow-hidden  lg:h-[230px] 2xl:h-[330px]
          "
            >
              {item.special && item.option && (
                <div>
                  <span className="absolute font-semibold top-0 2xl:w-[180px] lg:w-[150px] z-10 right-0 px-2 py-1 text-center text-white bg-bannerSpecial rounded-bl-2xl rounded-tr-2xl ">
                    {item.special}{" "}
                    <span className="font-extralight">{item.option}</span>
                  </span>
                </div>
              )}
              <img
                src={item.img}
                alt={item.tittle}
                className="object-cover w-full h-180 rounded-2xl"
              />
              <div className=" z-10 pb-4 text-white left-4">
                <span className="text-lg font-normal text-secondColor 2xl:text-2xl">
                  {item.tittle}
                </span>
                <p className="text-secondColor font-extralight 2xl:text-xl">
                  {item.city}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
