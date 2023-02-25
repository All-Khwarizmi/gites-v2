import { useEffect, useState} from "react";
import Link from "next/link";
import clsx from "clsx";
import { cabin } from "../pages/_app";
import PartenariatsModal from "./PartenariatsModal";
import PartenariatsModalLG from "./PartenariatsModalLG";
import { Flex, HStack, IconButton, useColorModeValue } from "@chakra-ui/react";
import { SiFacebook, SiGooglemaps, SiInstagram } from "react-icons/si";
import Image from "next/image";

function MobileNav({ open, setOpen }: any) {
    const bg = useColorModeValue("white", "white");
  return (
    <div
      className={`absolute top-0 left-0 h-screen w-screen transform bg-white ${
        open ? "-translate-x-0" : "-translate-x-full"
      } drop-shadow-md filter transition-transform duration-300 ease-in-out `}
    >
      <div className="flex h-20  items-center justify-center bg-white drop-shadow-md filter">
        {" "}
        {/*logo container*/}
        <Link className=" h-auto text-2xl font-semibold" href="/">
          <div className="h-auto">

          <Image
            className="w-44 hover:w-48"
            src="/IMG_0318.JPG"
            alt="Gîtes Mon Tresor Logo"
            fill
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          />
          </div>
        </Link>
      </div>
      <div className="ml-4 flex flex-col items-center">
        <Link
          className={clsx(cabin.className, "my-4 text-xl font-bold uppercase")}
          href="#section-1"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Accueil
        </Link>
        <Link
          className={clsx(cabin.className, "my-4 text-xl font-bold uppercase")}
          href="#welcome"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Gîtes
        </Link>
        <Link
          className={clsx(cabin.className, "my-4 text-xl font-bold uppercase")}
          href="#section-3"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Localisation
        </Link>
        <Link
          className={clsx(cabin.className, "my-4 text-xl font-bold uppercase")}
          href="#section-4"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Tarifs
        </Link>
        <Link
          className={clsx(cabin.className, "my-4 text-xl font-bold uppercase")}
          href="#section-5"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Contact
        </Link>

        <PartenariatsModal open={setOpen} />
        <Flex
          className="py-2"
          direction={["column", "column", "row"]}
          w="full"
          px={6}
          align="center"
          bg={bg}
          justify="flex-end"
        >
          {" "}
          <HStack spacing={1}>
            {" "}
            <a
              rel="noreferrer"
              target={"_blank"}
              href="https://www.facebook.com/gitesmontresor/?locale=fr_FR"
            >
              <IconButton
                className="icon"
                aria-label="Facebook"
                icon={<SiFacebook />}
              ></IconButton>
            </a>{" "}
            <a
              rel="noreferrer"
              target={"_blank"}
              href="https://www.instagram.com/gitesmontresor/"
            >
              <IconButton
                className="icon"
                aria-label="Twitter"
                icon={<SiInstagram />}
              ></IconButton>
            </a>
            <a
              rel="noreferrer"
              target={"_blank"}
              href="https://www.google.com/maps/place/Les+G%C3%AEtes+Mon+Tr%C3%A9sor/@16.4645595,-61.4847141,17z/data=!3m1!4b1!4m6!3m5!1s0x8c133104d554b2bd:0x36ef5cfef0b588d1!8m2!3d16.4645544!4d-61.4825254!16s%2Fg%2F11s7tslv7h"
            >
              <IconButton
                className="icon"
                aria-label="Maps"
                icon={<SiGooglemaps />}
              ></IconButton>
            </a>
          </HStack>
        </Flex>
      </div>
    </div>
  );
}

export default function Navbar({ position }: any) {
  const [open, setOpen] = useState(false);
  const [color, setColor] = useState(" ");
  const [colorFont, setColorFont] = useState(" ");
  const [offset, setOffset] = useState(0);


  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    if (position?.current?.getBoundingClientRect().top < 80) {
      setColor("bg-white");
      setColorFont("text-black");
    } else {
      setColor(" ");
      setColorFont("text-white");
    }
    return () => window.removeEventListener("scroll", onScroll);
  }, [offset, position]);
  
  const style = { backgroundColor: color, color: colorFont };
  return (
    <nav
      className={`nav flex h-20 w-full items-center gap-4 ${style.backgroundColor}  px-4 py-4 drop-shadow-md filter`}
    >
      <MobileNav open={open} setOpen={setOpen} />
      <div className="flex w-3/12 items-center">
        <Link
          
          className="text-3xl font-semibold"
          href="/"
        >
          <img
            className="w-44 hover:w-48"
            src="/IMG_0318.JPG"
            alt="Gîtes Mon Tresor Logo"
          />
        </Link>
      </div>
      <div className="flex w-9/12 items-center justify-end">
        <div
          className="relative z-50 flex h-8 w-8 flex-col items-center justify-between lg:hidden"
          onClick={() => {
            setOpen(!open);
          }}
        >
          {/* hamburger button */}
          <span
            className={`h-1 w-full transform rounded-lg bg-black transition duration-300 ease-in-out ${
              open ? "translate-y-3.5 rotate-45" : ""
            }`}
          />
          <span
            className={`h-1 w-full rounded-lg bg-black transition-all duration-300 ease-in-out ${
              open ? "w-0" : "w-full"
            }`}
          />
          <span
            className={`h-1 w-full transform rounded-lg bg-black transition duration-300 ease-in-out ${
              open ? "-translate-y-3.5 -rotate-45" : ""
            }`}
          />
        </div>
        {/* TODO change a => Link to each section */}
        <div className="hidden lg:flex">
          <ul className="flex justify-items-center gap-x-3">
            <li className="mr-6">
              <a
                className={clsx(
                  cabin.className,
                  `my-4 flex-initial text-2xl font-bold uppercase  hover:underline  ${style.color}   `
                )}
                href="#section-1"
              >
                Accueil
              </a>
            </li>
            <li className="mr-6">
              <a
                className={clsx(
                  cabin.className,
                  `my-4 flex-initial text-2xl font-bold uppercase  hover:underline  ${style.color}   `
                )}
                href="#welcome"
              >
                Gîtes
              </a>
            </li>
            <li className="mr-6">
              <a
                className={clsx(
                  cabin.className,
                  `my-4 flex-initial text-2xl font-bold uppercase  hover:underline  ${style.color}   `
                )}
                href="#section-3"
              >
                Localisation
              </a>
            </li>
            <li className="mr-6">
              <a
                className={clsx(
                  cabin.className,
                  `my-4 flex-initial text-2xl font-bold uppercase  hover:underline  ${style.color}   `
                )}
                href="#section-4"
              >
                Tarifs
              </a>
            </li>
            <li className="mr-6">
              <a
                className={clsx(
                  cabin.className,
                  `my-4 flex-initial text-2xl font-bold uppercase  hover:underline  ${style.color}   `
                )}
                href="#section-5"
              >
                Contact
              </a>
            </li>
            <li className="mr-6">
              <PartenariatsModalLG open={setOpen} style={style} />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
