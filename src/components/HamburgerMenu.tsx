import { JSX } from "react";
const HamburgerMenu = (): JSX.Element => {
  return (
    <div className="">
      <div className="flex flex-col gap-[5px] cursor-pointer relative">
        <span
          className={`h-[2px] w-3 hover:bg-[red] absolute bottom-2 right-3 rounded-md bg-[white] transition-transform duration-300
          }`}
        ></span>

        <span
          className={`h-[2px] w-5 mx-auto hover:bg-[red] rounded-md bg-[white] transition-opacity duration-300 opacity-100"
          }`}
        ></span>

        <span
          className={`h-[2px] absolute hover:bg-[red] left-3 top-2 w-3 right-0 rounded-md bg-[white] transition-transform duration-300
          }`}
        ></span>
      </div>
    </div>
  );
};

export default HamburgerMenu;
