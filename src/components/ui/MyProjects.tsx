import ProjectShowCard from "../card/ProjectShowCard";
import SectionHeader from "../SectionHeader";
import projectImage1 from "../../assets/images/project-1.png";
import projectImage2 from "../../assets/images/project-2.png";
import projectImage3 from "../../assets/images/project-3.png";
const categories = [
  "All",
  "UI/UX",
  "Web Design",
  "App Design",
  "Graphic Design",
];

const MyProjects = () => {
  return (
    <div>
      <SectionHeader
        title="My Projects"
        subHeader="Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam mauris est risus lectus. Phasellus consequat urna tellus"
      />
      <div className="mt-8 flex space-x-6">
        {categories.map((category) => (
          <div
            key={category}
            className="px-[20px] py-[10px] border border-[#545454] bg-[#F8F8F8] rounded-lg hover:bg-gray-100 cursor-pointer"
          >
            <p className="font-normal text-[24px]">{category}</p>
          </div>
        ))}
      </div>
      <div className="flex gap-[44px] justify-center">
        <ProjectShowCard
          imageSrc={projectImage1}
          category="Web Design"
          title="Business Landing Page Design"
        />
        <ProjectShowCard
          imageSrc={projectImage2}
          category="App Development"
          title="Mobile App Interface Design"
        />
        <ProjectShowCard
          imageSrc={projectImage3}
          category="App Development"
          title="Mobile App Interface Design"
        />
      </div>
    </div>
  );
};

export default MyProjects;
