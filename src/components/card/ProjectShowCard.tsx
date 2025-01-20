type ProjectShowCardProps = {
  imageSrc: string;
  category: string;
  title: string;
};
const ProjectShowCard = ({
  imageSrc,
  category,
  title,
}: ProjectShowCardProps) => {
  return (
    <div>
      <div className="bg-[#FFEBDB] w-[445px] h-[490px] rounded-[12px]">
        <img src={imageSrc} alt={title} />
      </div>
      <div>
        <p className="text-[#FD6F00] text-xl font-normal">{category}</p>
        <h3 className="text-2xl font-bold">{title}</h3>
      </div>
    </div>
  );
};
export default ProjectShowCard;
