import { useState } from "react";
import DarkLogo from "../../assets/logo/DarkLogo";
import Logo from "../../assets/logo/Logo";
import Button from "../button/Button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home" },
    { label: "About Me" },
    { label: "Service" },
    { label: "Projects" },
    { label: "Testimonials" },
    { label: "Contact" },
  ];

  return (
    <nav className="bg-white dark:bg-[#1E1E1E] flex justify-between items-center pt-[30px] max-w-7xl mx-auto px-4 relative">
      {/* Logo Section */}
      <div>
        <Logo className="h-20 w-40 dark:hidden" />
        <DarkLogo className="h-20 w-40 hidden dark:block" />
      </div>

      {/* Hamburger Icon for Small Screens */}
      <div className="lg:hidden flex items-center">
        <button
          className="text-black dark:text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Navbar Links */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } lg:flex lg:items-center absolute lg:relative top-full left-0 w-full bg-white dark:bg-[#1E1E1E] lg:bg-transparent shadow-md lg:shadow-none`}
      >
        <ul className="flex lg:flex-row flex-col lg:items-center items-center justify-center gap-3 lg:gap-8 py-4 lg:py-0 w-full">
          {navLinks.map((link, index) => (
            <li key={index} className="mx-3 text-black dark:text-white">
              {link.label}
            </li>
          ))}
          <li>
            <Button label="Download CV" />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
