import FacebookIcon from "../../assets/icons/FacebookIcon";
import InstagramIcon from "../../assets/icons/InstagramIcon";
import LinkedInIcon from "../../assets/icons/LinkedInIcon";
import TwitterIcon from "../../assets/icons/TwitterIcon";
import heroImage from "../../assets/images/hero-image.png";
import Button from "../button/Button";

const Hero = () => {
  return (
    <div className="max-w-7xl mx-auto flex justify-center items-center gap-36 h-screen bg-white">
      {/* Left Side: Profile Info */}
      <div className="w-[60%]">
        <h1 className="text-2xl font-semibold">Hi I am</h1>
        <h2 className="text-4xl font-semibold text-[#FD6F00] mt-4">
          Muhammad Umair
        </h2>
        <div>
          <p className="text-8xl font-bold text-gray-500 mt-2">UI & UX</p>
          <p className="text-8xl font-bold text-gray-500 mt-2 pl-[10%]">
            Designer
          </p>
        </div>
        <p className="mt-4 text-gray-600 text-xl">
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
          lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus
          pharetra
        </p>
        <Button label="Hire Me" />
      </div>
      {/* Right Side: Profile Image */}
      <div className="w-[40%] flex flex-col justify-center gap-9">
        {/* Profile Image */}
        <div className="relative">
          <img
            src={heroImage}
            alt="Profile"
            className="w-full h-full object-cover"
          />

          <div className="absolute bg-[#FD6F0099] p-3 rounded top-[78px] w-[370px] h-[80px] left-[50px]"></div>
        </div>
        {/* Social Media Icons */}
        <div className="flex gap-6 justify-center">
          <FacebookIcon className="h-8 w-8" />
          <TwitterIcon className="h-8 w-8" />
          <InstagramIcon className="h-8 w-8" />
          <LinkedInIcon className="h-8 w-8" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
