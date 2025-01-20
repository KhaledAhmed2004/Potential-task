import Logo from "../../assets/logo/Logo";
import LogoDark from "../../assets/logo/logoDark";
import Button from "../button/button";

const Navbar = () => {
  const navLinks = [
    {
      label: "Home",
    },
    {
      label: "About Me",
    },
    {
      label: "Service",
    },
    {
      label: "Projects",
    },
    {
      label: "Testimonials",
    },
    {
      label: "Contact",
    },
  ];

  return (
    <nav className="bg-white dark:bg-[#1E1E1E] flex justify-between items-center pt-[30px] max-w-7xl mx-auto">
      {/* Logo Section */}
      <div>
        <Logo className="h-20 w-40 dark:hidden" />
        <LogoDark className="h-20 w-40 hidden dark:block" />
      </div>

      {/* Navbar Links */}
      <div className="">
        <ul className="flex items-center gap-3">
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
