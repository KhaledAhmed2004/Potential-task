type ServiceCardProps = {
  title: string;
  description: string;
  icon: React.ElementType;
};

const ServiceCard = ({ title, description, icon: Icon }: ServiceCardProps) => {
  return (
    <div className="bg-[#F8F8F8] h-[346px] rounded-[14px] p-[18px]">
      {/* Dynamic Icon */}
      <div className="pt-[26px]">
        <Icon />
      </div>
      {/* Content */}
      <div className="flex flex-col gap-4 mt-[26px]">
        <h2 className="text-[32px] font-semibold">{title}</h2>
        <p className="text-[20px] font-normal">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
