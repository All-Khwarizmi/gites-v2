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
        <a className="text-xl font-semibold" href="/">
          LOGO
        </a>
      </div>
      <div className="ml-4 flex flex-col">
        <a
          className="my-4 text-xl font-medium"
          href="#"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          About
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
      </div>
    </div>
  );
}

export default function Navbar({position}: any) {
  const [open, setOpen] = useState(false);
    const [color, setColor] = useState(" ");
    const [colorFont, setColorFont] = useState(" ");
    const [offset, setOffset] = useState(0);

    const divPosition = useRef()

    useEffect(() => {
      const onScroll = () => setOffset(window.pageYOffset);
      // clean up code
      window.removeEventListener("scroll", onScroll);
      window.addEventListener("scroll", onScroll, { passive: true });
      if (offset > 622) {
        setColor("white");
        setColorFont("text-black");
      } else {
        setColor(" ");
        setColorFont("text-white");
      }
      return () => window.removeEventListener("scroll", onScroll);
    }, [position]);
console.log(position?.current.getBoundingClientRect().top)
    const style = { backgroundColor: color, color: colorFont };
  return (
    <nav
      style={style}
      className="nav flex h-20 w-full items-center gap-4   px-4 py-4 drop-shadow-md filter"
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
          className="relative z-50 flex h-8 w-8 flex-col items-center justify-between md:hidden"
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

        <div className="hidden md:flex">
          <NavLink to="/contact">CONTACT</NavLink>
          <NavLink to="/about">ABOUT</NavLink>
        </div>
      </div>
    </nav>
  );
}
