import logo from "../../../images/sections/header/logo.svg";
import part1logo from "../../../images/sections/header/part1logo.svg";
import part2logo from "../../../images/sections/header/part2logo.svg";
import line from "../../../images/sections/header/Vector-1.svg";

export default function Logo() {
  return (
    <div className="flex-shrink-0">
      <a href="/" className="flex">
        <img src={logo} alt="Logo" className="h-9 w-auto" />
        <div className="flex flex-col justify-center items-start">
          <div className="relative mb-[5px] h-4">
            <img src={part1logo} alt="part-logo" />
            <img
              src={line}
              className="absolute top-[17.18px]"
              alt="part-logo"
            />
          </div>

          <img src={part2logo} className="h-[9.27px]" alt="part-logo" />
        </div>
      </a>
    </div>
  );
}
