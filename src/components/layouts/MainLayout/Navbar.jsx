import { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = (props) => {
  const [showDown, setShowdown] = useState(false);
  return (
    <>
      <header className={"wrapper z-10 w-full fixed top-0 left-0 " + props.bg}>
        <nav className="container">
          <div className="flex items-center justify-between relative">
            <div className="flex gap-16">
              <div className="flex items-center gap-4">
                <img src="/public/icons/coffee2.webp" alt="coffee" />
                <h2 className="font-bold text-lg block py-6 text-white font-sacramento">
                  Coffee Shop
                </h2>
              </div>
              <div className="lg:flex md:flex items-center gap-11 px-4 hidden">
                <h2>
                  <Link
                    to="/"
                    className={"font-md text-white clickable " + props.border}
                  >
                    Home
                  </Link>
                </h2>
                <h2>
                  <Link
                    to="/product"
                    className={"font-md text-white clickable " + props.borderP}
                  >
                    Product
                  </Link>
                </h2>
              </div>
            </div>
            <div className="flex items-center px-4 sm:hidden md:hidden lg:hidden">
              <button
                id="hamburger"
                name="hamburger"
                type="button"
                className="block absolute right-4"
                onClick={() => {
                  if (showDown === false) {
                    setShowdown(true);
                    console.log("berhasil");
                  } else {
                    setShowdown(false);
                    console.log("gagal");
                  }
                }}
              >
                <span className="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
                <span className="hamburger-line transition duration-300 ease-in-out"></span>
                <span className="hamburger-line transition duration-300 ease-in-out origin-bottom-left"></span>
              </button>
              <div
                id="nav-menu"
                className={`${
                  showDown ? "" : "hidden"
                } absolute py-5 bg-white shadow-lg rounded-lg md:w-full right-4 top-full max-w-[200px]"
                `}
              >
                <ul className="block">
                  <li className="group">
                    <Link
                      to="/"
                      className="text-base text-black py-2 mx-8 group-hover:text-primary"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="group">
                    <Link
                      to="/product"
                      className="text-base text-black py-2 mx-8 group-hover:text-primary"
                    >
                      Product
                    </Link>
                  </li>
                  <li className="group">
                    <Link
                      to="/profile"
                      className="text-base text-black py-2 mx-8 group-hover:text-primary"
                    >
                      profile
                    </Link>
                  </li>
                  <li className="group">
                    <Link
                      to="/historyOrder"
                      className="text-base text-black py-2 mx-8 group-hover:text-primary"
                    >
                      History
                    </Link>
                  </li>
                  <li className="group">
                    <Link
                      to=""
                      className="text-base text-black py-2 mx-8 group-hover:text-primary"
                    >
                      Log Out
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="lg:flex md:flex sm:flex items-center gap-5 hidden">
              <img
                src="/public/icons/Search.webp"
                alt="Search"
                className="icons"
              />
              <img
                src="/public/icons/newmarket.webp"
                alt="markets"
                className="icons"
              />
              <img
                src="/public/icons/profile.webp"
                alt="profile"
                className="icons"
              />
              <div>
                <img
                  src="/public/icons/down.webp"
                  alt="dropdown"
                  id="drop-down"
                  className="icons"
                  onClick={() => {
                    if (showDown === false) {
                      setShowdown(true);
                    } else {
                      setShowdown(false);
                    }
                  }}
                />
                <div
                  id="menu-down"
                  className={`${
                    showDown ? "" : "hidden"
                  } absolute py-4 bg-white shadow-lg rounded-lg md:w-full right-4 top-full max-w-[200px]`}
                >
                  <ul className="flex flex-col gap-3">
                    <li className="group">
                      <Link
                        to="/profile"
                        className="text-base text-black py-2 mx-8 group-hover:text-primary"
                      >
                        Profile
                      </Link>
                    </li>
                    <li className="group">
                      <Link
                        to=""
                        className="text-base text-black py-2 mx-8 group-hover:text-primary"
                      >
                        History
                      </Link>
                    </li>
                    <li className="group">
                      <Link
                        to=""
                        className="text-base text-black py-2 mx-8 group-hover:text-primary"
                      >
                        Log Out
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
