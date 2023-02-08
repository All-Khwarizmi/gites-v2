import { useEffect, useState, useRef } from "react";

function NavLink({ to, children }: any) {
  return (
    <a href={to} className={`mx-4`}>
      {children}
    </a>
  );
}

function MobileNav({ open, setOpen }: any) {
  return (
    <div
      className={`absolute top-0 left-0 h-screen w-screen transform bg-white ${
        open ? "-translate-x-0" : "-translate-x-full"
      } drop-shadow-md filter transition-transform duration-300 ease-in-out `}
    >
      <div className="flex h-20 items-center justify-center bg-white drop-shadow-md filter">
        {" "}
        {/*logo container*/}
        <a className="text-2xl font-semibold" href="/">
          <img
            className="w-24 hover:w-32"
            src="/IMG_0318.JPG"
            alt="Gîtes Mon Tresor Logo"
          />
        </a>
      </div>
      <div className="ml-4 flex flex-col items-center">
        <a
          className="my-4 text-xl font-medium"
          href="#section-1"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Accueil
        </a>
        <a
          className="my-4 text-xl font-normal"
          href="#section-2"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Gîtes
        </a>
        <a
          className="my-4 text-xl font-normal"
          href="#"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Localisation
        </a>
        <a
          className="my-4 text-xl font-normal"
          href="#"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Tarifs
        </a>
        <a
          className="my-4 text-xl font-normal"
          href="#"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Contact
        </a>
        <a
          className="my-4 text-xl font-normal"
          href="#"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Partenariats
        </a>
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
  }, [offset]);
  
  const style = { backgroundColor: color, color: colorFont };
  return (
    <nav
      className={`nav flex h-20 w-full items-center gap-4 ${style.backgroundColor}  px-4 py-4 drop-shadow-md filter`}
    >
      <MobileNav open={open} setOpen={setOpen} />
      <div className="flex w-3/12 items-center">
        <a className="text-2xl font-semibold" href="/">
          <img
            className="w-24 hover:w-32"
            src="/IMG_0318.JPG"
            alt="Gîtes Mon Tresor Logo"
          />
        </a>
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
                className={` flex-initial text-2xl ${style.color} text-justify   hover:underline`}
                href="#"
              >
                Accueil
              </a>
            </li>
            <li className="mr-6">
              <a
                className={` flex-initial text-2xl ${style.color} text-justify   hover:underline`}
                href="#"
              >
                Gîtes
              </a>
            </li>
            <li className="mr-6">
              <a
                className={` flex-initial text-2xl ${style.color} text-justify   hover:underline`}
                href="#"
              >
                Localisation
              </a>
            </li>
            <li className="mr-6">
              <a
                className={` flex-initial text-2xl ${style.color} text-justify   hover:underline`}
                href="#"
              >
                Tarifs
              </a>
            </li>
            <li className="mr-6">
              <a
                className={` flex-initial text-2xl ${style.color} text-justify   hover:underline`}
                href="#"
              >
                Contact
              </a>
            </li>
            <li className="mr-6">
              <a
                className={` flex-initial text-2xl ${style.color} text-justify   hover:underline`}
                href="#"
              >
                Partenariats
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
