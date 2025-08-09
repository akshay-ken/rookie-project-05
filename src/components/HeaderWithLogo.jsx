import logo from "../assets/logo.svg";

export function HeaderWithLogo() {
  return (
    <header className="bg-Red-500 flex flex-row rounded-xl p-4 justify-between w-sm md:w-lg items-center">
      <div>
        <p className="text-gray-200 text-base">My balance</p>
        <h1 className="font-semibold text-2xl text-white">$921.48</h1>
      </div>
      <img src={logo} className="size-[20%]" alt="two circles" />
    </header>
  );
}
