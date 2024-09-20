import { Button } from "../button/Button";
import { iconFeature } from "../../constants/constants";
import banner from "../../assets/img/banner.png";

export const Hero = () => {
  return (
    <div className="flex justify-between w-12/12 px-[150px] mt-20">
      <div>
        <h1 className="xl:text-[40px] 2xl:text-[60px] font-bold text-secondColor 2xl:mb-10 xl:mb-5">
          Forget Busy Work, <br />
          Start Next Vacation
        </h1>
        <p className="xl:text-[16px] 2xl:text-2xl font-light text-thirdColor 2xl:mb-[40px] xl:mb-[30px]">
          We provide what you need to enjoy your <br />
          holiday with family. Time to make another <br />
          memorable moments.
        </p>
        <Button variant="xl:w-[210px] 2xl:w-[250px] h-[50px]">
          Show Me Now
        </Button>
        <div className="flex items-center xl:gap-7 2xl:gap-20 xl:mt-[45px] 2xl:mt-[80px]">
          {iconFeature.map((item) => (
            <div key={item.id}>
              <img
                src={item.img}
                className="2xl:w-[40px] 2xl:h-[40px]"
                alt=""
              />
              <p className="mt-2">
                <span className="font-medium 2xl:text-[20px] xl:text-lg text-secondColor">
                  {item.count}
                </span>{" "}
                <span className="font-light 2xl:text-[20px] xl:text-md text-thirdColor">
                  {item.desc}
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <img src={banner} className="xl:w-[500px] 2xl:w-[700px]" alt="" />
      </div>
    </div>
  );
};
