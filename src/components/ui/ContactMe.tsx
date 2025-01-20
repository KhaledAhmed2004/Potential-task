// import SectionHeader from "../SectionHeader";

// const ContactMe = () => {
//   return (
//     <div>
//       <SectionHeader
//         title="Lets Design Together"
//         subHeader="Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium"
//       />
//       <div className="flex gap-[25px] w-[870px]">
//         <input
//           type="email"
//           className="py-[16px] pl-[26px] border border-[#AFAFAF] rounded-[14px] text-xl font-normal "
//           placeholder="Enter Your Email "
//         />
//         <button className="bg-[#FD6F00] text-white rounded-[14px] py-[20px] px-[36px] font-semibold">
//           Contact Me
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ContactMe;
import SectionHeader from "../SectionHeader";

const ContactMe = () => {
  return (
    <div className="flex flex-col items-center px-4 py-8">
      <SectionHeader
        title="Let's Design Together"
        subHeader="Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium"
      />
      <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-[700px] mt-6">
        <input
          type="email"
          className="py-[14px] pl-6 border border-[#AFAFAF] rounded-lg text-xl font-normal w-full sm:w-[75%] bg-[#F8F8F8]"
          placeholder="Enter Your Email"
        />
        <button className="bg-[#FD6F00] text-white rounded-lg py-4 px-8 font-semibold w-full sm:w-[25%] mt-4 sm:mt-0">
          Contact Me
        </button>
      </div>
    </div>
  );
};

export default ContactMe;
