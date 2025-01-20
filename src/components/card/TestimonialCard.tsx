// // type TestimonialCardProps = {
// //   image: string;
// //   text: string;
// //   authorName: string;
// //   authorTitle: string;
// // };

// // const TestimonialCard = ({
// //   image,
// //   text,
// //   authorName,
// //   authorTitle,
// // }: TestimonialCardProps) => {
// //   return (
// //     <div className="flex flex-col sm:flex-row items-center gap-8 bg-[#F8F8F8] w-[800px] h-[250px] mx-auto py-8 px-6 rounded-lg shadow-md">
// //       {/* Image Container: Takes 30% of the card width */}
// //       <div className="w-[30%] h-auto flex-shrink-0">
// //         <img
// //           src={image}
// //           alt={`${authorName}'s profile`}
// //           className="w-full h-auto rounded-full p-5"
// //         />
// //       </div>

// //       {/* Text Content */}
// //       <div className="flex flex-col text-center sm:text-left flex-grow">
// //         <p className="text-gray-600 text-base">
// //           <span className="text-[#FD6F00] text-2xl font-bold">“</span> {text}
// //           <span className="text-[#FD6F00] text-2xl font-bold">”</span>
// //         </p>
// //         <h3 className="text-lg font-bold mt-2">{authorName}</h3>
// //         <p className="text-sm text-gray-500">{authorTitle}</p>
// //       </div>
// //     </div>
// //   );
// // };

// // export default TestimonialCard;

// type TestimonialCardProps = {
//   image: string;
//   text: string;
//   authorName: string;
//   authorTitle: string;
// };

// const TestimonialCard = ({
//   image,
//   text,
//   authorName,
//   authorTitle,
// }: TestimonialCardProps) => {
//   return (
//     <div className="flex flex-col sm:flex-row items-center gap-8 bg-[#F8F8F8] w-full sm:w-[800px] h-auto mx-auto py-8 px-6 rounded-lg shadow-md">
//       {/* Image Container: Takes 30% of the card width on larger screens */}
//       <div className="w-full sm:w-[30%] h-auto flex-shrink-0 mb-4 sm:mb-0">
//         <img
//           src={image}
//           alt={`${authorName}'s profile`}
//           className="w-32 h-32 sm:w-full sm:h-auto rounded-full mx-auto sm:p-5"
//         />
//       </div>

//       {/* Text Content */}
//       <div className="flex flex-col text-center sm:text-left flex-grow">
//         <p className="text-gray-600 text-base">
//           <span className="text-[#FD6F00] text-2xl font-bold">“</span> {text}
//           <span className="text-[#FD6F00] text-2xl font-bold">”</span>
//         </p>
//         <h3 className="text-lg font-bold mt-2">{authorName}</h3>
//         <p className="text-sm text-gray-500">{authorTitle}</p>
//       </div>
//     </div>
//   );
// };

// export default TestimonialCard;
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
    <div className="flex flex-col sm:flex-row items-center gap-8 bg-[#F8F8F8] w-full sm:w-[700px] md:w-[800px] h-auto mx-auto py-8 px-6 rounded-lg shadow-md">
      {/* Image Container: Takes 30% of the card width on larger screens */}
      <div className="w-full sm:w-[30%] h-auto flex-shrink-0 mb-4 sm:mb-0">
        <img
          src={image}
          alt={`${authorName}'s profile`}
          className="w-32 h-32 sm:w-full sm:h-auto rounded-full mx-auto sm:p-5"
        />
      </div>

      {/* Text Content */}
      <div className="flex flex-col text-center sm:text-left flex-grow">
        <p className="text-gray-600 text-base">
          <span className="text-[#FD6F00] text-2xl font-bold">“</span> {text}
          <span className="text-[#FD6F00] text-2xl font-bold">”</span>
        </p>
        <h3 className="text-lg font-bold mt-2">{authorName}</h3>
        <p className="text-sm text-gray-500">{authorTitle}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
