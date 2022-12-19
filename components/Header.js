import React, { useRef, useEffect } from "react";
import close from "../images/close-outline.svg";
import menu from "../images/menu-outline.svg";
import Image from "next/image";
import gsap from "gsap";
import Link from "next/link";

function Header() {
  let resMenu = useRef(null);
  let resMenuHeader = useRef(null);
  let resMenuItem1 = useRef(null);
  let resMenuItem2 = useRef(null);
  let resMenuItem3 = useRef(null);
  let resMenuItem4 = useRef(null);

  const menu_open = gsap.timeline({ paused: "true", reversed: "true" });
  useEffect(() => {
    menu_open.to(resMenu.current, {
      y: 0,
      zIndex: 100,
      duration: 0.2,
    });
    menu_open.from(
      [
        resMenuHeader.current,
        resMenuItem1.current,
        resMenuItem2.current,
        resMenuItem3.current,
        resMenuItem4.current,
      ],
      {
        duration: 0.5,
        stagger: {
          amount: 0.4,
        },
        y: -50,
      }
    );
  });

  function menuOpen() {
    menu_open.reversed() ? menu_open.play() : menu_open.reverse();
  }

  return (
    <div>
      <div
        ref={resMenu}
        className="fixed w-full top-0 left-0 overflow-hidden h-screen bg-black -translate-y-[1200px]"
      >
        <div
          className="flex items-start justify-between w-[100%] h-fit py-[5px]"
          ref={resMenuHeader}
        >
          <div className="mx-[5px] mix-blend-difference font-monument font-semibold text-[20px] leading-none">
            Emre <br /> Sezer
          </div>
          <div
            onClick={menuOpen}
            className="block md:hidden cursor-pointer mx-[5px]"
          >
            <Image
              src={close}
              className="w-9 object-contain invert"
              alt=""
            ></Image>
          </div>
        </div>
        <div className="mx-2 my-10 space-y-1">
          <span className="overflow-hidden block">
            <div
              ref={resMenuItem1}
              className="font-neutralFace font-bold text-[30px]"
            >
              <Link onClick={menuOpen} href="#slider">
                WORK
              </Link>
            </div>
          </span>
          <span className="overflow-hidden block">
            <div
              ref={resMenuItem2}
              className="font-neutralFace font-bold text-[30px]"
            >
              <Link onClick={menuOpen} href="#whoWeAre">
                ABOUT
              </Link>
            </div>
          </span>
          <span className="overflow-hidden block">
            <div
              ref={resMenuItem3}
              className="font-neutralFace font-bold text-[30px]"
            >
              <Link onClick={menuOpen} href="#publications">
                PUBLICATIONS
              </Link>
            </div>
          </span>
          <span className="overflow-hidden block">
            <div
              ref={resMenuItem4}
              className="font-neutralFace font-bold text-[30px]"
            >
              <Link onClick={menuOpen} href="#office">
                OFFICE
              </Link>
            </div>
          </span>
        </div>
      </div>

      <div className="absolute bg-black top-0  font-neutralFace h-[20vh] flex justify-between flex-col w-[100%]">
        <div
          id="header"
          className="fixed z-50	bg-black flex items-start justify-between w-[100%] h-fit border-b-2 border-white"
        >
          <div className="mx-[5px] mix-blend-difference font-monument font-semibold text-[20px] leading-none">
            <Link href="">
              {" "}
              Emre <br /> Sezer
            </Link>
          </div>
          <div className="mx-1 md:block hidden mix-blend-difference  font-neutralFace font-bold text-[30px]">
            <Link href="#slider" scroll={false}>
              WORK
            </Link>
          </div>
          <div className="mx-1 md:block hidden mix-blend-difference  font-neutralFace font-bold text-[30px]">
            <Link href="#whoWeAre" scroll={false}>
              ABOUT
            </Link>
          </div>
          <div className="mx-1 md:block hidden mix-blend-difference  font-neutralFace font-bold text-[30px]">
            <Link href="#publications" scroll={false}>
              PUBLICATIONS
            </Link>
          </div>
          <div className="mx-1 md:block hidden mix-blend-difference  font-neutralFace font-bold text-[30px]">
            <Link href="#office" scroll={false}>
              OFFICE
            </Link>
          </div>
          <div
            onClick={menuOpen}
            className="block md:hidden cursor-pointer mx-[5px]"
          >
            <Image
              alt=""
              src={menu}
              className="w-9 object-contain invert"
            ></Image>
          </div>
        </div>

        <div className="flex items-start text-sm justify-between sm:justify-evenly px-5 w-[100%] h-fit mt-[150px]">
          <div>
            An independent <br /> music agency
          </div>
          <div>Istanbul</div>
        </div>
      </div>
    </div>
  );
}

export default Header;
