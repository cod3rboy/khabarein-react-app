import logo from "../assets/logo.svg";

export default function Header() {
  return (
    <header className="text-slate-300 bg-slate-500 sm:bg-inherit sm:text-gray-500 flex justify-center items-center py-2 sm:py-4 mb-2">
      <img
        className="h-12 w-12 sm:h-16 sm:w-16 object-contain"
        src={logo}
        alt="Khabarein logo"
      />
      <h1 className="font-title text-2xl sm:text-4xl">Khabarein</h1>
    </header>
  );
}
