import React from "react";
import Slider from "react-slick";

const TestimonialsData = [
  {
    id: 1,
    name: "Victor",
    img: "https://picsum.photos/101/101",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
  },
  {
    id: 2,
    name: "Satya Nadella",
    img: "https://picsum.photos/102/102",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
  },
  {
    id: 3,
    name: "Sachin Tendulkar",
    img: "https://picsum.photos/103/103",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
  },
  {
    id: 4,
    name: "Virat Kohli",
    img: "https://picsum.photos/104/104",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
  },
];

const settings = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  cssEase: "linear",
  pauseOnHover: true,
  pauseOnFocus: true,
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Testimonials = () => {
  return (
    <div className="py-10 mb-10">
      <div className="container">
        {/* Header Section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            What our customers are saying
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Testimonials
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
            asperiores modi Sit asperiores modi
          </p>
        </div>
        {/* Testimonials Cards with Slider */}
        <Slider {...settings}>
          {TestimonialsData.map((item) => (
            <div key={item.id} className="px-4" data-aos="fade-up">
              <div
                className="flex flex-col gap-4
                      shadow-lg py-8 px-6 rounded-xl
                      dark:bg-gray-800
                      bg-primary/10 relative"
              >
                <div className="mb-4 flex justify-center">
                  <img
                    src={item.img}
                    className="rounded-full w-20 h-20"
                    alt=""
                  />
                </div>
                <div className="flex flex-col items-center gap-4">
                  <div className="space-y-3">
                    <p className="text-sm text-gray-500">{item.text}</p>
                    <h1 className="text-xl font-bold text-black/80 dark:text-white">
                      {item.name}
                    </h1>
                  </div>
                </div>
                <p
                  className="text-black/20 text-9xl 
                font-serif absolute top-0 right-0"
                >
                  ,,
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
