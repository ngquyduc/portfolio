import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import navLogo from "../public/assets/navLogo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#ecf0f3");
  const [linkColor, setLinkColor] = useState("#1f2937");
  const router = useRouter();

  useEffect(() => {
    if (
      router.asPath === "/" ||
      router.asPath === "/#contact" ||
      router.asPath === "/#about" ||
      router.asPath === "/#skills" ||
      router.asPath === "/#projects"
    ) {
      setNavBg("#ecf0f3");
      setLinkColor("#1f2937");
    }

    if (
      router.asPath === "/monkey" ||
      router.asPath === "/restaurantUI" ||
      router.asPath === "/hobbyList" ||
      router.asPath === "/sheep"
    ) {
      setNavBg("transparent");
      setLinkColor("#ecf0f3");
    }
  }, [router, router.asPath]);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  });

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100]"
          : "fixed w-full h-20 z-[100]"
      }
    >
      <div className="flex justify-between items-center w-full h-full pl-10 px-2 2xl:px-16">
        <Link href="/">
          <Image src={navLogo} alt="/" width="70" height="70" />
        </Link>

        <div>
          <ul style={{ color: `${linkColor}` }} className="hidden md:flex">
            <Link href="/">
              <li
                className="ml-10 text-sm uppercase
                        hover:border-b
                        "
              >
                Home
              </li>
            </Link>
            <Link href="/#about">
              <li
                className="ml-10 text-sm uppercase
                        hover:border-b
                        "
              >
                About
              </li>
            </Link>
            <Link href="/#skills">
              <li
                className="ml-10 text-sm uppercase
                        hover:border-b
                        "
              >
                Skills
              </li>
            </Link>
            <Link href="/#projects">
              <li
                className="ml-10 text-sm uppercase
                        hover:border-b
                        "
              >
                Project
              </li>
            </Link>
            <Link href="/#contact">
              <li
                className="ml-10 text-sm uppercase
                        hover:border-b
                        "
              >
                Contact
              </li>
            </Link>
          </ul>

          <div
            style={{ color: `${linkColor}` }}
            onClick={handleNav}
            className="md:hidden cursor-pointer"
          >
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div
              className="flex w-full items-center justify-between "
              onClick={() => setNav(false)}
            >
              <Link href="/">
                <Image src={navLogo} width="80" height="80" alt="/" />
                <div
                  onClick={handleNav}
                  lassName="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
                ></div>
              </Link>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                Let's build something together
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Home
                </li>
              </Link>
              <Link href="/#about">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  About
                </li>
              </Link>
              <Link href="/#skills">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Skills
                </li>
              </Link>
              <Link href="/#projects">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Projects
                </li>
              </Link>
              <Link href="/#contact">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Contact
                </li>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="uppsercase tracking-widest text-[#5651e5">
                Let's Connect
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <a href="https://www.linkedin.com/in/quyduc/" target="_blank">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaLinkedin />
                  </div>
                </a>
                <a href="https://github.com/ngquyduc/" target="_blank">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaGithub />
                  </div>
                </a>
                <Link href="/#contact">
                  <div
                    className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                    onClick={() => setNav(false)}
                  >
                    <AiOutlineMail />
                  </div>
                </Link>
                <a
                  href="https://drive.google.com/file/d/1Mj0hnCdL7jYCTvzs6YGC-TsqiSOaG0Zx/view?usp=sharing"
                  target="_blank"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <BsFillPersonLinesFill />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
