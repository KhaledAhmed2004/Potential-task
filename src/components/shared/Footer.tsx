import FacebookIcon from "../../assets/icons/FacebookIcon";
import InstagramIcon from "../../assets/icons/InstagramIcon";
import LinkedInIcon from "../../assets/icons/LinkedInIcon";
import TwitterIcon from "../../assets/icons/TwitterIcon";
import Logo from "../../assets/logo";

const Footer = () => {
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
    <footer className=" bg-gray-100 space-y-10">
      {/* Logo */}
      <div className="flex justify-center pt-[50px]">
        <Logo />
      </div>

      {/* Navigation Links */}
      <ul className="flex gap-3 justify-center">
        {navLinks.map((link, index) => (
          <li key={index} className="mx-3 my-2">
            {link.label}
          </li>
        ))}
      </ul>

      {/* Social Media Icons */}
      <div className="flex gap-6 justify-center">
        <FacebookIcon className="h-8 w-8" />
        <TwitterIcon className="h-8 w-8" />
        <InstagramIcon className="h-8 w-8" />
        <LinkedInIcon className="h-8 w-8" />
      </div>

      {/* Footer Text */}
      <div className="bg-[#545454] text-white py-6">
        <h4 className="font-normal text-[20px] text-center">
          © 2023 <span className="text-[#FD6F00] font-bold">Mumair</span> All
          Rights Reserved , Inc.
        </h4>
      </div>
    </footer>
  );
};

export default Footer;
