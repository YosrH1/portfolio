import Image from "next/image";
import bg from "../../../../public/background/about-background.png";
import RenderModel from "@/components/RenderModel";
// import HatModel from "@/components/models/HatModel";
import AboutDetails from "@/components/about";
import dynamic from "next/dynamic";

import clsx from "clsx";

const HatModel = dynamic(() => import("@/components/models/HatModel"), {
  ssr: false,
});

export const metadata = {
  title: "About",
};

export default function Home() {
  return (
    <>


      <div className="w-full h-3/5 xs:h-3/4 sm:h-screen absolute top-1/2 -translate-y-1/2 left-0 z-10">
        <RenderModel>
          <HatModel />
        </RenderModel>
      </div>

      <div className="relative w-full h-screen flex flex-col items-center justify-center">
        <div className="absolute flex flex-col items-center text-center top-1/2 sm:top-[60%] left-1/2 -translate-y-1/2 -translate-x-1/2">
          <h1 className={clsx(
        "font-lamoric"," text-3xl xs:text-3xl sm:text-2xl  lg:text-7xl text-ort")}>
            Elhamdouni Yosr
          </h1>
          <p className={clsx(
        "font-lamoric","font-light text-foreground text-lg")}>
            Meet the witch behind this portfolio
          </p>
        </div>
      </div>

      <AboutDetails />
    </>
  );
}
