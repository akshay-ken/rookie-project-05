import data from "../assets/data.json";
import logo from "../assets/logo.svg";

const total = data.reduce((sum, item) => sum + item.amount, 0);

export function HeaderWithLogo() {
  return (
    <header className="bg-Red-500 flex flex-row rounded-xl p-4 justify-between min-w-sm max-w-lg">
      <div>
        <p className="text-gray-200 text-base">My balance</p>
        <h1 className="font-semibold text-2xl text-white">${total}</h1>
      </div>
      <img src={logo} className="size-[20%]" alt="two circles" />
    </header>
  );
}
