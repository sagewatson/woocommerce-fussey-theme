import Link from "next/link";
import Image from "next/image";
import CartIcon from "./cart/CartIcon";
import { useState } from "react";

const Nav = () => {
  const [isMenuVisible, setMenuVisibility] = useState(false);

  return (
    <nav className="bg-black p-4 ">
      <div className="flex items-center justify-between flex-wrap container mx-auto">
        <div className="flex items-center flex-shrink-0 text-black mr-20">
          <span className="font-semibold text-xl tracking-tight">
            <Link href="/">
              <a className="">
                <Image
                  src="https://my-wordpress.fussey.co/wp-content/uploads/2021/11/main-logo.png"
                  alt="logo"
                  width="200"
                  height="50"
                />
              </a>
            </Link>
          </span>
        </div>

        {/*Menu button*/}
        <div className="block lg:hidden">
          <button
            onClick={() => setMenuVisibility(!isMenuVisible)}
            className="flex items-center px-3 py-2 border rounded text-black border-black hover:text-black hover:border-black"
          >
            <svg
              className="fill-current h-5 w-5 text-white"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>

        {/*MMenu in mobile*/}
        <div
          className={`${
            isMenuVisible ? "max-h-full h-full" : "h-0"
          } w-full overflow-hidden lg:h-full flex-grow lg:flex lg:items-center lg:w-auto`}
        >
          <div className="font-medium uppercase lg:flex-grow text-xl">
            <Link href="#products-anchor">
              <a className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-10">
                Shop
              </a>
            </Link>
            <Link href="#contact-form">
              <a className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-10">
                Contact
              </a>
            </Link>
          </div>

          <div className="text-xl font-medium ">
            <CartIcon />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
