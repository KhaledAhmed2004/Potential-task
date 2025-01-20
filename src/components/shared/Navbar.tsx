import Logo from "../../assets/Logo";
import Button from "../button/Button";

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
    <nav className="flex justify-between items-center mt-[30px] max-w-7xl mx-auto">
      {/* Logo Section */}
      <div>
        <Logo className="h-20 w-40" />
      </div>

      {/* Navbar Links */}
      <div className="">
        <ul className="flex items-center gap-3">
          {navLinks.map((link, index) => (
            <li key={index} className="mx-3">
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
