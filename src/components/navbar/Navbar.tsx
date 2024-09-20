import { navbarItems } from "../../constants/constants";
import staycation from "../../assets/img/staycation.svg";

export const Navbar = () => {
  return (
    <nav>
      <div className="flex justify-between w-12/12 h-20 px-[150px] border-b-2">
        <div className="flex items-center">
          <img src={staycation} alt="" />
        </div>
        <div className="flex items-center">
          <ul className="flex items-center justify-center gap-7">
            {navbarItems.map((item) => (
              <li key={item.label} className="text-secondColor">
                <a key={item.link} className="text-lg font-normal">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
