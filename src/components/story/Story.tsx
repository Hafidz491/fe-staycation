import foto from "../../assets/img/foto_keluarga.jpg";
import rates from "../../assets/img/rate.png";
import { Button } from "../button/Button";

export const Story = () => {
  return (
    <div className="flex 2xl:justify-center 2xl:items-center gap-14 px-[150px] my-[70px]">
      <div className="w-full h-full">
        <img src={foto} alt="photos family" className="2xl:mx-auto" />
      </div>
      <div className="flex flex-col w-full justify-center">
        <h1 className="text-2xl font-medium text-secondColor">Happy Family</h1>
        <div className=" mt-[40px]">
          <img src={rates} alt="rates" className="w-[180px] h-[36px]" />
          <p className="text-[24px] 2xl:text-4xl font-light text-secondColor mt-[8px]">
            What a great trip with my family and I should try again next time
            soon...
          </p>
          <p className="text-[18px] font-light text-thirdColor mt-[8px]">
            Angga, Product Manager
          </p>
        </div>
        <Button variant="w-[210px] h-[50px] mt-[50px]">Read Their Story</Button>
      </div>
    </div>
  );
};
