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
    <nav className="flex justify-between items-center mt-[30px] max-w-[1420px] mx-auto">
      {/* Logo Section */}
      <div>
        <span>M</span>umair
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
