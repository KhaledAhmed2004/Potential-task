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
      <div className="bg-[#FFEBDB] w-[445px h-[490px] rounded-[12px] overflow-hidden">
        <img className="w-full object-cover" src={imageSrc} alt={title} />
      </div>
      <div className="mt-[35px]">
        <p className="text-[#FD6F00] text-xl font-normal mb-[10px]">
          {category}
        </p>
        <h3 className="text-black dark:text-white text-2xl font-bold">
          {title}
        </h3>
      </div>
    </div>
  );
};
export default ProjectShowCard;
