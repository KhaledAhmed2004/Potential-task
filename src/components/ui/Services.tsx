import AppDesignIncon from "../../assets/icons/AppDesignIcon";
import GraphicDesignIncon from "../../assets/icons/GraphicDesignIncon";
import UIUXIcon from "../../assets/icons/UIUXIcon";
import WebDEsignIncon from "../../assets/icons/WebDEsignIncon";
import ServiceCard from "../card/ServiceCard";
import SectionHeader from "../SectionHeader";

const Services = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <SectionHeader
        title="Services"
        subHeader="Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium"
      />
      <div className="max-w-7xl mx-auto flex gap-[30px]">
        <ServiceCard
          icon={UIUXIcon}
          title="UI/UX"
          description="Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum"
        />
        <ServiceCard
          icon={WebDEsignIncon}
          title="Web Design"
          description="Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum"
        />
        <ServiceCard
          icon={AppDesignIncon}
          title="App Design"
          description="Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum"
        />
        <ServiceCard
          icon={GraphicDesignIncon}
          title="Graphic Design"
          description="Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum"
        />
      </div>
    </div>
  );
};

export default Services;
