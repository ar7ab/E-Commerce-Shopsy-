import Logo from "../../assets/logo.png";
import FooterBanner from "../../assets/footer-pattern.jpg";
import {
  FaInstagramSquare,
  FaFacebookSquare,
  FaLinkedin,
  FaLocationArrow,
  FaPhoneAlt,
} from "react-icons/fa";

const BannerImg = {
  backgroundImage: `url(${FooterBanner})`,
  backgroundPosition: `bottom`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const FooterLinks = [
  { title: "Home", link: "/#" },
  { title: "About", link: "/#" },
  { title: "Contact", link: "/#" },
  { title: "Blog", link: "/#" },
];

const Footer = () => {
  return (
    <div className="text-white" style={BannerImg}>
      <div className="container mx-auto px-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Details */}
          <div className="space-y-3">
            <h1 className="text-3xl font-bold flex items-center gap-3">
              <img src={Logo} className="max-w-[50px]" alt="Shopsy Logo" />
              Shopsy
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum in
              beatae ea recusandae blanditiis veritatis.
            </p>
          </div>

          {/* Footer Links */}
          <div className="space-y-3">
            <h1 className="text-xl font-bold">Important Links</h1>
            <ul className="space-y-2">
              {FooterLinks.map((item, index) => (
                <li
                  key={index}
                  className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
                >
                  <a href={item.link}>{item.title}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links and Contact */}
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <a href="#">
                <FaInstagramSquare className="text-3xl" />
              </a>
              <a href="#">
                <FaFacebookSquare className="text-3xl" />
              </a>
              <a href="#">
                <FaLinkedin className="text-3xl" />
              </a>
            </div>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <FaLocationArrow />
                <p>Gharbia, Egypt</p>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhoneAlt />
                <p>+201025980850</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
