import logo from "../assets/logo.svg";

export default function Header() {
  return (
    <header className="flex justify-center items-center py-4">
      <img
        className="h-16 w-16 object-contain"
        src={logo}
        alt="Khabarein logo"
      />
      <h1 className="font-title text-4xl text-gray-500">Khabarein</h1>
    </header>
  );
}
