import Img1 from "../../assets/shirt.png";
import Img2 from "../../assets/shirt2.png";
import Img3 from "../../assets/shirt3.png";
import { FaStar } from "react-icons/fa";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Casual Wear",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe eaque minus dolore autem deserunt quos adipisci quisquam culpa, tempore ipsum reiciendis iusto totam necessitatibus facere earum iure eum nobis excepturi!",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Printed shirt",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe eaque minus dolore autem deserunt quos adipisci quisquam culpa, tempore ipsum reiciendis iusto totam necessitatibus facere earum iure eum nobis excepturi!",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Women shirt",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe eaque minus dolore autem deserunt quos adipisci quisquam culpa, tempore ipsum reiciendis iusto totam necessitatibus facere earum iure eum nobis excepturi!",
    aosDelay: "400",
  },
];

const TopProducts = () => {
  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/* Header Section */}
        <div className="text-center mb-24">
          <p data-aos="fade-up" className="text-sm text-primary">
            Top Rated Products for you
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Best Products
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
            asperiores modi Sit asperiores modi
          </p>
        </div>
        {/* Body Section */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2
        md:grid-cols-3 gap-x-5 gap-y-24 md:gap-5 place-items-center"
        >
          {ProductsData.map((item) => (
            <div
              className="rounded-2xl bg-white dark:bg-gray-800
            hover:bg-black/80 dark:hover:bg-primary
            hover:text-white relative shadow-xl
            duration-high group max-w-[300px] cursor-pointer"
              data-aos="fade-up"
              data-aos-delay={item.aosDelay}
              key={item.id}
            >
              {/* image section */}
              <div className="h-[100px]">
                <img
                  src={item.img}
                  alt=""
                  className="max-w-[140px] block mx-auto transform
                -translate-y-20 group-hover:scale-105 duration-300
                drop-shadow-md"
                />
              </div>
              {/* details section */}
              <div className="p-4 text-center">
                {/* Star Rating */}
                <div className="w-full flex items-center justify-center gap-1">
                  <FaStar className="text-yellow-400" />
                  <FaStar className="text-yellow-400" />
                  <FaStar className="text-yellow-400" />
                  <FaStar className="text-yellow-400" />
                </div>
                {/* title */}
                <h1 className="text-xl font-bold">{item.title}</h1>
                {/* description */}
                <p
                  className="text-gray-500 group-hover:text-white
                 duration-300 text-sm line-clamp-2"
                >
                  {item.description}
                </p>
                {/* Order Btn */}
                <button
                  className="bg-primary hover:scale-105 duration-300
                text-white py-1 px-4 rounded-full mt-4
                group-hover:bg-white group-hover:text-primary drop-shadow-md"
                >
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
