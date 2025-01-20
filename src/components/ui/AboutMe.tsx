import aboutMeImage from "../../assets/images/aboutMe-image.png";
import PrograssRange from "../prograss-range/ProgressRange";

const AboutMe = () => {
  return (
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-center items-center px-4 py-8 h-auto bg-white dark:bg-[#1E1E1E]">
      {/* Right Side: Profile Image */}
      <div className="w-full lg:w-[50%] flex justify-center mb-8 lg:mb-0 order-2 lg:order-1">
        {/* Profile Image */}
        <div className="relative w-full max-w-[500px] h-full">
          <img
            src={aboutMeImage}
            alt="Profile"
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute bg-[#FD6F0099] p-3 top-[68px] left-[10%] sm:left-[15%] md:left-[20%] lg:left-[25%] w-[80%] sm:w-[70%] md:w-[60%] lg:w-[50%] h-[70px] md:h-[80px]"></div>
        </div>
      </div>

      {/* Left Side: Profile Info */}
      <div className="w-full lg:w-[50%] text-center lg:text-left order-1 lg:order-2">
        <h1 className="text-black dark:text-white text-4xl lg:text-6xl font-semibold">
          About Me
        </h1>
        <p className="mt-4 text-black dark:text-white text-lg lg:text-xl font-normal">
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
          lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus
          pharetra
        </p>

        {/* Skills Section */}
        <div className="mt-8 space-y-6">
          {/* UX Design */}
          <div>
            <h2 className="text-black dark:text-white text-xl lg:text-2xl font-semibold">
              UX Design
            </h2>
            <PrograssRange value={80} />
          </div>

          {/* Web Design */}
          <div>
            <h2 className="text-black dark:text-white text-xl lg:text-2xl font-semibold">
              Web Design
            </h2>
            <PrograssRange value={75} />
          </div>

          {/* Graphic Design */}
          <div>
            <h2 className="text-black dark:text-white text-xl lg:text-2xl font-semibold">
              Graphic Design
            </h2>
            <PrograssRange value={90} />
          </div>

          {/* App Design */}
          <div>
            <h2 className="text-black dark:text-white text-xl lg:text-2xl font-semibold">
              App Design
            </h2>
            <PrograssRange value={85} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
