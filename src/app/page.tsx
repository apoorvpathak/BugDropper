import { Button } from "@radix-ui/themes";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";

export default function Home() {
  const logos = [
    { src: "https://www.svgrepo.com/show/331567/sap.svg", alt: "SAP Logo" },
    { src: "https://www.svgrepo.com/show/354004/linux-tux.svg", alt: "Linux Logo" },
    { src: "https://www.svgrepo.com/show/452142/adobe.svg", alt: "Adobe Logo" },
    { src: "https://www.svgrepo.com/show/452062/microsoft.svg", alt: "Microsoft Logo" },
    { src: "https://www.svgrepo.com/show/512317/github-142.svg", alt: "GitHub Logo" }
  ];
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
      <div className="py-8 px-4">
      <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10 md:gap-16">
        {logos.map((logo, index) => (
          <div key={index} className="flex items-center justify-center w-20 sm:w-24 md:w-32">
            <img 
              src={logo.src} 
              alt={logo.alt} 
              className="max-h-10 sm:max-h-12 md:max-h-14 object-contain" 
            />
          </div>
        ))}
      </div>
    </div>
    </div>
  </main>
  );
}
