import { useState, useEffect, useRef } from "react";
import SectionHeader from "../SectionHeader";
import testimonialImage1 from "../../assets/images/testimonials-image1.png";
import testimonialImage2 from "../../assets/images/testimonials-image2.png";
import TestimonialCard from "../card/TestimonialCard";

const testimonialsData = [
  {
    image: testimonialImage1,
    text: "Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.",
    authorName: "John Doe",
    authorTitle: "CEO",
  },
  {
    image: testimonialImage2,
    text: "Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.",
    authorName: "Jane Smith",
    authorTitle: "Founder",
  },
  {
    image: testimonialImage1,
    text: "Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.",
    authorName: "Alice Johnson",
    authorTitle: "Director",
  },
  {
    image: testimonialImage2,
    text: "Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.",
    authorName: "Alice Johnson",
    authorTitle: "Director",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonialsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (testimonialsRef.current) {
        const containerWidth = testimonialsRef.current.offsetWidth;
        const scrollLeft = testimonialsRef.current.scrollLeft;

        // Calculate the middle of the container
        const containerMiddle = scrollLeft + containerWidth / 2;

        // Check which card is closest to the center of the container
        let closestIndex = 0;
        let closestDistance = Number.MAX_VALUE;

        testimonialsRef.current.childNodes.forEach(
          (node: any, index: number) => {
            const cardMiddle = node.offsetLeft + node.offsetWidth / 2;
            const distance = Math.abs(containerMiddle - cardMiddle);

            if (distance < closestDistance) {
              closestDistance = distance;
              closestIndex = index;
            }
          }
        );

        setCurrentIndex(closestIndex); // Set the current index based on the closest card
      }
    };

    // Add the scroll event listener
    testimonialsRef.current?.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      testimonialsRef.current?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
    if (testimonialsRef.current) {
      const width = testimonialsRef.current.offsetWidth;
      testimonialsRef.current.scrollLeft = index * width; // Scroll to the clicked dot's corresponding testimonial
    }
  };

  return (
    <div className="px-4 py-16">
      <SectionHeader
        title="Testimonials"
        subHeader="Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium"
      />
      <div className="relative mt-8 max-w-7xl mx-auto">
        {/* Scrollable Horizontal Container */}
        <div
          ref={testimonialsRef}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hide"
        >
          {testimonialsData.map((testimonial, index) => (
            <div
              key={index}
              className={`transition-opacity duration-500 ease-in-out snap-center ${
                index === currentIndex
                  ? "opacity-100 scale-100"
                  : "opacity-40 scale-95 pointer-events-none"
              }`}
            >
              <TestimonialCard
                image={testimonial.image}
                text={testimonial.text}
                authorName={testimonial.authorName}
                authorTitle={testimonial.authorTitle}
              />
            </div>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonialsData.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-[56px] h-4 rounded-full ${
                index === currentIndex ? "bg-[#FD6F00]" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
