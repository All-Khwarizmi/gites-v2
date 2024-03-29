import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@chakra-ui/react";

import { useState, useEffect } from "react";

const Layout = ({ children }: React.PropsWithChildren<{}>) => {
  const [color, setColor] = useState(" ");
  const [colorFont, setColorFont] = useState(" ");

  const [offset, setOffset] = useState(0);

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
  }, [offset]);

  const style = { backgroundColor: color, color: colorFont };

  return (
    <>
  <nav
    className="
  navbar
  navbar-expand-lg
  navbar-light relative
  flex
  w-full
  flex-wrap
  items-center
  justify-between
  bg-gray-100
  py-4
  text-gray-500
  shadow-lg hover:text-gray-700 focus:text-gray-700
  "
  >
    <div className="container-fluid flex w-full flex-wrap items-center justify-between px-6">
      <button
        className="
      navbar-toggler
      border-0
      bg-transparent
      py-2 px-2.5
      text-gray-500
      hover:no-underline
      hover:shadow-none
      focus:no-underline focus:shadow-none focus:outline-none focus:ring-0
    "
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="bars"
          className="w-6"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path
            fill="currentColor"
            d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
          ></path>
        </svg>
      </button>
      <div
        className="navbar-collapse collapse flex-grow items-center"
        id="navbarSupportedContent"
      >
        <a
          className="
        mt-2
        mr-1
        flex
        items-center
        text-gray-900
        hover:text-gray-900
        focus:text-gray-900
        lg:mt-0
      "
          href="#"
        >
          <img
            src="https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.png"
            style={{ height: "15px" }}
            alt=""
            loading="lazy"
          />
        </a>
        {/* <!-- Left links --> */}
        <ul className="navbar-nav list-style-none mr-auto flex flex-col pl-0">
          <li className="nav-item p-2">
            <a
              className="nav-link p-0 text-gray-500 hover:text-gray-700 focus:text-gray-700"
              href="#"
            >
              Dashboard
            </a>
          </li>
          <li className="nav-item p-2">
            <a
              className="nav-link p-0 text-gray-500 hover:text-gray-700 focus:text-gray-700"
              href="#"
            >
              Team
            </a>
          </li>
          <li className="nav-item p-2">
            <a
              className="nav-link p-0 text-gray-500 hover:text-gray-700 focus:text-gray-700"
              href="#"
            >
              Projects
            </a>
          </li>
        </ul>
        {/* <!-- Left links --> */}
      </div>
      {/*  <!-- Collapsible wrapper --> */}

      {/*  <!-- Right elements --> */}
      <div className="relative flex items-center">
        {/*   <!-- Icon --> */}
        <a
          className="mr-4 text-gray-500 hover:text-gray-700 focus:text-gray-700"
          href="#"
        >
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="shopping-cart"
            className="w-4"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
          >
            <path
              fill="currentColor"
              d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"
            ></path>
          </svg>
        </a>
        <div className="dropdown relative">
          <a
            className="
          dropdown-toggle
          hidden-arrow
          mr-4
          flex
          items-center
          text-gray-500
          hover:text-gray-700 focus:text-gray-700
        "
            href="#"
            id="dropdownMenuButton1"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="bell"
              className="w-4"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z"
              ></path>
            </svg>
            <span className="absolute -mt-2.5 ml-2 rounded-full bg-red-700 py-0 px-1.5 text-xs text-white">
              1
            </span>
          </a>
          <ul
            className="
      dropdown-menu
      absolute
      left-auto
      right-0
      z-50
      float-left
      m-0
      mt-1
      hidden
      hidden
      min-w-max
      list-none
      rounded-lg
      border-none
      bg-white
      bg-clip-padding
      py-2
      text-left
      text-base
      shadow-lg
    "
            aria-labelledby="dropdownMenuButton1"
          >
            <li>
              <a
                className="
          dropdown-item
          block
          w-full
          whitespace-nowrap
          bg-transparent
          py-2
          px-4
          text-sm
          font-normal
          text-gray-700
          hover:bg-gray-100
        "
                href="#"
              >
                Action
              </a>
            </li>
            <li>
              <a
                className="
          dropdown-item
          block
          w-full
          whitespace-nowrap
          bg-transparent
          py-2
          px-4
          text-sm
          font-normal
          text-gray-700
          hover:bg-gray-100
        "
                href="#"
              >
                Another action
              </a>
            </li>
            <li>
              <a
                className="
          dropdown-item
          block
          w-full
          whitespace-nowrap
          bg-transparent
          py-2
          px-4
          text-sm
          font-normal
          text-gray-700
          hover:bg-gray-100
        "
                href="#"
              >
                Something else here
              </a>
            </li>
          </ul>
        </div>
        <div className="dropdown relative">
          <a
            className="dropdown-toggle hidden-arrow flex items-center"
            href="#"
            id="dropdownMenuButton2"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src="https://mdbootstrap.com/img/new/avatars/2.jpg"
              className="rounded-full"
              style={{ height: "25px", width: "25px" }}
              alt=""
              loading="lazy"
            />
          </a>
          <ul
            className="
    dropdown-menu
    absolute
    left-auto
    right-0
    z-50
    float-left
    m-0
    mt-1
    hidden
    hidden
    min-w-max
    list-none
    rounded-lg
    border-none
    bg-white
    bg-clip-padding
    py-2
    text-left
    text-base
    shadow-lg
  "
            aria-labelledby="dropdownMenuButton2"
          >
            <li>
              <a
                className="
        dropdown-item
        block
        w-full
        whitespace-nowrap
        bg-transparent
        py-2
        px-4
        text-sm
        font-normal
        text-gray-700
        hover:bg-gray-100
      "
                href="#"
              >
                Action
              </a>
            </li>
            <li>
              <a
                className="
        dropdown-item
        block
        w-full
        whitespace-nowrap
        bg-transparent
        py-2
        px-4
        text-sm
        font-normal
        text-gray-700
        hover:bg-gray-100
      "
                href="#"
              >
                Another action
              </a>
            </li>
            <li>
              <a
                className="
        dropdown-item
        block
        w-full
        whitespace-nowrap
        bg-transparent
        py-2
        px-4
        text-sm
        font-normal
        text-gray-700
        hover:bg-gray-100
      "
                href="#"
              >
                Something else here
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/*  <!-- Right elements --> */}
    </div>
  </nav>
</>
   /*  <>
      <nav style={style} className="nav flex w-full p-2">
        <ul className="flex justify-items-center gap-x-3 ">
          <li className="mr-6">
            <img
              className="w-24 hover:w-32"
              src="/IMG_0318.JPG"
              alt="Gîtes Mon Tresor Logo"
            />
          </li>
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
      </nav>

      <>{children}</>
    </> */
  );
};
<>
  <nav
    className="
  navbar
  navbar-expand-lg
  navbar-light relative
  flex
  w-full
  flex-wrap
  items-center
  justify-between
  bg-gray-100
  py-4
  text-gray-500
  shadow-lg hover:text-gray-700 focus:text-gray-700
  "
  >
    <div className="container-fluid flex w-full flex-wrap items-center justify-between px-6">
      <button
        className="
      navbar-toggler
      border-0
      bg-transparent
      py-2 px-2.5
      text-gray-500
      hover:no-underline
      hover:shadow-none
      focus:no-underline focus:shadow-none focus:outline-none focus:ring-0
    "
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="bars"
          className="w-6"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path
            fill="currentColor"
            d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
          ></path>
        </svg>
      </button>
      <div
        className="navbar-collapse collapse flex-grow items-center"
        id="navbarSupportedContent"
      >
        <a
          className="
        mt-2
        mr-1
        flex
        items-center
        text-gray-900
        hover:text-gray-900
        focus:text-gray-900
        lg:mt-0
      "
          href="#"
        >
          <img
            src="https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.png"
            style={{ height: "15px" }}
            alt=""
            loading="lazy"
          />
        </a>
        {/* <!-- Left links --> */}
        <ul className="navbar-nav list-style-none mr-auto flex flex-col pl-0">
          <li className="nav-item p-2">
            <a
              className="nav-link p-0 text-gray-500 hover:text-gray-700 focus:text-gray-700"
              href="#"
            >
              Dashboard
            </a>
          </li>
          <li className="nav-item p-2">
            <a
              className="nav-link p-0 text-gray-500 hover:text-gray-700 focus:text-gray-700"
              href="#"
            >
              Team
            </a>
          </li>
          <li className="nav-item p-2">
            <a
              className="nav-link p-0 text-gray-500 hover:text-gray-700 focus:text-gray-700"
              href="#"
            >
              Projects
            </a>
          </li>
        </ul>
        {/* <!-- Left links --> */}
      </div>
      {/*  <!-- Collapsible wrapper --> */}

      {/*  <!-- Right elements --> */}
      <div className="relative flex items-center">
        {/*   <!-- Icon --> */}
        <a
          className="mr-4 text-gray-500 hover:text-gray-700 focus:text-gray-700"
          href="#"
        >
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="shopping-cart"
            className="w-4"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
          >
            <path
              fill="currentColor"
              d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"
            ></path>
          </svg>
        </a>
        <div className="dropdown relative">
          <a
            className="
          dropdown-toggle
          hidden-arrow
          mr-4
          flex
          items-center
          text-gray-500
          hover:text-gray-700 focus:text-gray-700
        "
            href="#"
            id="dropdownMenuButton1"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="bell"
              className="w-4"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z"
              ></path>
            </svg>
            <span className="absolute -mt-2.5 ml-2 rounded-full bg-red-700 py-0 px-1.5 text-xs text-white">
              1
            </span>
          </a>
          <ul
            className="
      dropdown-menu
      absolute
      left-auto
      right-0
      z-50
      float-left
      m-0
      mt-1
      hidden
      hidden
      min-w-max
      list-none
      rounded-lg
      border-none
      bg-white
      bg-clip-padding
      py-2
      text-left
      text-base
      shadow-lg
    "
            aria-labelledby="dropdownMenuButton1"
          >
            <li>
              <a
                className="
          dropdown-item
          block
          w-full
          whitespace-nowrap
          bg-transparent
          py-2
          px-4
          text-sm
          font-normal
          text-gray-700
          hover:bg-gray-100
        "
                href="#"
              >
                Action
              </a>
            </li>
            <li>
              <a
                className="
          dropdown-item
          block
          w-full
          whitespace-nowrap
          bg-transparent
          py-2
          px-4
          text-sm
          font-normal
          text-gray-700
          hover:bg-gray-100
        "
                href="#"
              >
                Another action
              </a>
            </li>
            <li>
              <a
                className="
          dropdown-item
          block
          w-full
          whitespace-nowrap
          bg-transparent
          py-2
          px-4
          text-sm
          font-normal
          text-gray-700
          hover:bg-gray-100
        "
                href="#"
              >
                Something else here
              </a>
            </li>
          </ul>
        </div>
        <div className="dropdown relative">
          <a
            className="dropdown-toggle hidden-arrow flex items-center"
            href="#"
            id="dropdownMenuButton2"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src="https://mdbootstrap.com/img/new/avatars/2.jpg"
              className="rounded-full"
              style={{ height: "25px", width: "25px" }}
              alt=""
              loading="lazy"
            />
          </a>
          <ul
            className="
    dropdown-menu
    absolute
    left-auto
    right-0
    z-50
    float-left
    m-0
    mt-1
    hidden
    hidden
    min-w-max
    list-none
    rounded-lg
    border-none
    bg-white
    bg-clip-padding
    py-2
    text-left
    text-base
    shadow-lg
  "
            aria-labelledby="dropdownMenuButton2"
          >
            <li>
              <a
                className="
        dropdown-item
        block
        w-full
        whitespace-nowrap
        bg-transparent
        py-2
        px-4
        text-sm
        font-normal
        text-gray-700
        hover:bg-gray-100
      "
                href="#"
              >
                Action
              </a>
            </li>
            <li>
              <a
                className="
        dropdown-item
        block
        w-full
        whitespace-nowrap
        bg-transparent
        py-2
        px-4
        text-sm
        font-normal
        text-gray-700
        hover:bg-gray-100
      "
                href="#"
              >
                Another action
              </a>
            </li>
            <li>
              <a
                className="
        dropdown-item
        block
        w-full
        whitespace-nowrap
        bg-transparent
        py-2
        px-4
        text-sm
        font-normal
        text-gray-700
        hover:bg-gray-100
      "
                href="#"
              >
                Something else here
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/*  <!-- Right elements --> */}
    </div>
  </nav>
</>;
export default Layout;
