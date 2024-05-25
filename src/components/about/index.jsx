import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";

import clsx from "clsx";

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6  md:gap-8 w-full">
        <ItemLayout
          className={
            " col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className={clsx("font-lamoric","text-ort  text-xl md:text-2xl text-left w-full capitalize")}>
            Architect of Enchantment
          </h2>
          <p className={clsx("font-lamoric","font-light  text-xs sm:text-sm md:text-base   ")}>
          Architect Of Enchantment
          My journey in web development is powered by an array of mystical tools and languages, with JavaScript casting the core of my enchantments.
          I wield frameworks like React.js , Next.js , vite and Angular with precision, 
          crafting seamless portals (websites) that connect realms (users) across the digital universe.
      The ancient arts of the react  empower me to create fast, secure, and dynamic experiences, 
  while my design skills ensure every creation is not only functional but visually captivating.
 Join me as I continue to explore new spells and technologies to shape the future of the web.
          </p>
        </ItemLayout>

        <ItemLayout
          className={" col-span-full xs:col-span-6 lg:col-span-4 text-ort"}
        >
          <p className=" w-full text-left text-2xl sm:text-5xl">
            10+ <sub className="text-base">clients</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-ort"}
        >
          <p className="w-full text-left text-2xl sm:text-5xl">
            3+{" "}
            <sub className=" text-base">years of experience</sub>
          </p>
        </ItemLayout>
        <ItemLayout
          className={"col-span-full sm:col-span-7 md:col-span-4 !p-0"}
        >
          <img
            className="w-[100vw] h-auto"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=anuraghazra&show_icons=true&theme=transparent&hide_border=true&title_color=DEAA44&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false"alt="Stats"
            loading="lazy"
          />
        </ItemLayout>
        <ItemLayout
          className={"col-span-full sm:col-span-3 md:col-span-8 !p-0"}
        >
          <img
            className="w-[100vw] h-auto"
            src="https://github-readme-stats.vercel.app/api?username=YosrH1&show_icons=true&theme=transparent&hide_border=true&title_color=DEAA44&text_color=FFFFFF&icon_color=DEAA44&text_bold=false"alt="Stats"
            loading="lazy"
          />
        </ItemLayout>


        <ItemLayout className={"col-span-full"}>
          <img
            className="w-full h-auto"
            src="https://skillicons.dev/icons?i=bootstrap,css,figma,firebase,git,github,html,js,jquery,linux,mongodb,mysql,nextjs,nodejs,npm,react,tailwind,threejs,ts,angular,mongodb,blender,python,php,java,unity,ps,ai,ae,vite,vscode,eclipse,express"
            alt="CodeBucks" 
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <img
            className="w-full h-auto"
            src="https://github-readme-streak-stats.herokuapp.com?user=YosrH1&theme=highcontrast&hide_border=true&date_format=M%20j%5B%2C%20Y%5D&type=png&background=EB545400&ring=DEAA44&currStreakLabel=DEAA44 "alt="CodeBucks"
            loading="lazy"
          />
          
        </ItemLayout>
        <ItemLayout
          className={"col-span-full sm:col-span-6 md:col-span-6 !p-0"}
        >
          <img
            className="w-[100vw] h-auto"
            src="https://github-readme-stats.vercel.app/api/pin/?username=anuraghazra&repo=github-readme-stats&show_icons=true&theme=transparent&hide_border=true&title_color=DEAA44&text_color=FFFFFF&icon_color=DEAA44&text_bold=false"alt="Stats"
            loading="lazy"
          />
        </ItemLayout>
        
       
      </div>
    </section>
  );
};

export default AboutDetails;
