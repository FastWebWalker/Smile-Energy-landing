import logo from "../../../images/sections/header/logo.svg";

export default function Logo() {
  return (
    <div className="flex-shrink-0">
      <a href="/" className="flex">
        <img src={logo} alt="Logo" className="h-9 w-auto" />
      </a>
    </div>
  );
}
