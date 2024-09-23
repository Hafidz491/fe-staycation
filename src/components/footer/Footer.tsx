import staycation from "../../assets/img/staycation.svg";

export const Footer = () => {
  return (
    <div>
      <div className="flex justify-center gap-[132px] mt-[30px] pt-[50px] border-t-2">
        <div>
          <img src={staycation} alt="staycation" className="h-[39px]" />
          <p className="text-lg font-extralight text-thirdColor mt-[8px]">
            We kaboom your beauty holiday <br /> instantly and memorable.
          </p>
        </div>
        <div className="flex justify-center gap-16">
          <div>
            <h2 className="text-lg font-medium text-secondColor mb-[23px]">
              For Beginners
            </h2>
            <ul>
              <li className="mb-[10px] text-thirdColor font-extralight">
                New account
              </li>
              <li className="mb-[10px] text-thirdColor font-extralight">
                Start booking a room
              </li>
              <li className=" text-thirdColor font-extralight">Use payment</li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-medium text-secondColor mb-[23px]">
              Explore Us.
            </h2>
            <ul>
              <li className="mb-[10px] text-thirdColor font-extralight">
                Our careers
              </li>
              <li className="mb-[10px] text-thirdColor font-extralight">
                Privacy
              </li>
              <li className=" text-thirdColor font-extralight">
                Terms & Conditions
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-medium text-secondColor mb-[23px]">
              Connect Us
            </h2>
            <ul>
              <li className="mb-[10px] text-thirdColor font-extralight">
                support@staycation.id
              </li>
              <li className="mb-[10px] text-thirdColor font-extralight">
                012-354-313
              </li>
              <li className=" text-thirdColor font-extralight">
                Staycation, Metro, Lampung
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="my-[50px]">
        <h1 className="text-xl text-thirdColor text-center">
          Copyright 2019 • All rights reserved • Staycation
        </h1>
      </div>
    </div>
  );
};
