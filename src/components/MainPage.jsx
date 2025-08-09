import { ChartSection } from "./ChartSection";
import { HeaderWithLogo } from "./HeaderWithLogo";

export function MainPage() {
  return (
    <main className="flex flex-col gap-y-6 items-center my-16 w-full">
      <HeaderWithLogo />
      <ChartSection />
    </main>
  );
}
