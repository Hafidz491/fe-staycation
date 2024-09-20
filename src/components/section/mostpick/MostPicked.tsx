import { itemProductSmall } from "../../../constants/constants";
import { CardSlider } from "./card-1/CardSlider";

export const MostPicked = () => {
  return (
    <div className="w-12/12 px-[150px] my-[70px]">
      <h1 className="text-3xl font-medium text-secondColor mb-[20px]">
        Most Picked
      </h1>

      <div className="grid grid-cols-1 auto-rows-[minmax(215px,auto)] lg:grid-cols-[1fr_2fr] gap-4">
        <div>
          <CardSlider />
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {itemProductSmall.map((item) => (
            <div
              key={item.id}
              className="relative overflow-hidden bg-white rounded-2xl shadow-lg lg:h-[210px] 2xl:h-[313px]
            "
            >
              <div>
                <span className="absolute font-semibold top-0 2xl:w-[180px] lg:w-[150px] z-10 right-0 px-2 py-1 text-center text-white bg-bannerSpecial rounded-bl-2xl ">
                  {item.special}{" "}
                  <span className="font-extralight">{item.option}</span>
                </span>
              </div>
              <img
                src={item.img}
                alt={item.tittle}
                className="object-cover w-full h-full"
              />

              <div className="absolute bottom-0 z-10 pb-4 text-white left-4">
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
        </div>
      </div>
    </div>
  );
};
