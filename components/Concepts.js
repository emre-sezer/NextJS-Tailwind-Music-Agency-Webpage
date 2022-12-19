import React from "react";
import Image from "next/image";
import concept1 from "../images/concept1.png";
import concept2 from "../images/concept2.png";
function Concepts() {
  return (
    <div id="concepts" className="relative font-neutralFace px-3 w-full h-fit">
      <div className="w-full h-[1px] bg-white"></div>
      <div className="my-32">
        <p className="text-8xl sm:text-9xl md:text-[12rem] xl:text-[18rem] font-light leading-none">
          MUSIC
        </p>
        <p className="text-8xl sm:text-9xl md:text-[12rem] xl:text-[18rem] font-light leading-none">
          IS MORE
        </p>
        <p className="text-8xl sm:text-9xl md:text-[12rem] xl:text-[18rem] indent-[10vw]  font-light leading-none">
          THAN ME
        </p>
        <p className="text-8xl sm:text-9xl md:text-[12rem] xl:text-[18rem] font-light leading-none">
          NOTES
        </p>
      </div>
      <div className="w-full h-[1px] bg-transparent md:bg-white mb-[20vh] md:mb-[40vh]"></div>
      <div className="absolute top-[30%] md:top-0 right-0 flex items-center justify-center flex-col w-[60vw] mt-[30vh]">
        <div className="hidden md:block mb-20">
          <p className="text-xl">(CONCEPT)</p>
          <p className="text-xl">(IDEAS)</p>
          <p className="text-xl">(MOTIVE)</p>
        </div>
        <Image alt="" src={concept1} className="-z-10 my-10 w-[50%]"></Image>
        <Image alt="" src={concept2} className="my-10"></Image>
      </div>
    </div>
  );
}

export default Concepts;
