type TestimonialCardProps = {
  image: string;
  text: string;
  authorName: string;
  authorTitle: string;
};

const TestimonialCard = ({
  image,
  text,
  authorName,
  authorTitle,
}: TestimonialCardProps) => {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-8 bg-[#F8F8F8] w-[800px] mx-auto py-8 px-6 rounded-lg shadow-md">
      <div className="w-[235px] h-[235px]">
        <img
          src={image}
          alt={`${authorName}'s profile`}
          className="w-full h-auto rounded-full shadow-lg"
        />
      </div>
      <div className="flex flex-col text-center sm:text-left">
        <p className="text-[#FD6F00] text-2xl mb-4">“</p>
        <p className="text-gray-600 text-base mb-4">{text}</p>
        <p className="text-[#FD6F00] text-2xl mb-4">“</p>
        <h3 className="text-lg font-bold">{authorName}</h3>
        <p className="text-sm text-gray-500">{authorTitle}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
