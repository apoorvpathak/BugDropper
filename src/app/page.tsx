import { Button } from "@radix-ui/themes";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";

export default function Home() {
  return (
  <main>
    <div className="space-y-6 mt-8 md:mt-12 mb-8">
      <p className="font-semibold text-center text-4xl md:text-7xl md:font-bold">Track Issues and Tackle them</p>
      <p className="text-center md:text-2xl">Catch Bugs Faster, Code with Confidence – A Developer-Friendly Platform for Seamless Issue Resolution</p>
    </div>
    <div className="text-center mb-20">
      <Button size={"3"}><Link href={"/dashboard"}>Get Started</Link><GoArrowRight /></Button>
    </div>
    <div>
      <p className="text-zinc-500 text-center font-normal text-sm md:text-lg pt-5">
        Trusted by employees and users at these big companies
      </p>
      <div className="pt-8 flex justify-center gap-32">
          <img src="https://www.svgrepo.com/show/331567/sap.svg" alt="" className="h-10" />
          <img src="https://www.svgrepo.com/show/354004/linux-tux.svg" alt="" className="h-10" />
          <img src="https://www.svgrepo.com/show/452142/adobe.svg" alt="" className="h-10" />
          <img src="https://www.svgrepo.com/show/452062/microsoft.svg " alt="" className="h-10" />
      </div>
    </div>
  </main>
  );
}
