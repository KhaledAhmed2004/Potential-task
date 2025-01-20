import aboutMeImage from "../../assets/images/aboutMe-image.png";
import PrograssRange from "../prograss-range/ProgressRange";

const AboutMe = () => {
  return (
    <div className="max-w-7xl mx-auto flex justify-center items-center gap-36 h-screen bg-white">
      {/* Right Side: Profile Image */}
      <div className="w-[40%] flex flex-col justify-center gap-9">
        {/* Profile Image */}
        <div className="relative">
          <img
            src={aboutMeImage}
            alt="Profile"
            className="w-full h-full object-cover"
          />

          <div className="absolute bg-[#FD6F0099] p-3 rounded top-[78px] w-[370px] h-[80px] left-[50px]"></div>
        </div>
      </div>
      {/* Left Side: Profile Info */}
      <div className="w-[60%]">
        <h1 className="text-6xl font-semibold">About Me</h1>
        <p className="text-xl font-normal">
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
          lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus
          pharetra
        </p>

        {/* Skills Section */}
        <div className="mt-8 space-y-6">
          {/* UX Design */}
          <div>
            <h2 className="text-2xl font-semibold">UX Design</h2>
            <PrograssRange value={80} />
          </div>

          {/* Web Design */}
          <div>
            <h2 className="text-2xl font-semibold">Web Design</h2>
            <PrograssRange value={80} />
          </div>

          {/* Graphic Design */}
          <div>
            <h2 className="text-2xl font-semibold">Graphic Design</h2>
            <PrograssRange value={80} />
          </div>

          {/* App Design */}
          <div>
            <h2 className="text-2xl font-semibold">App Design</h2>
            <PrograssRange value={80} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
