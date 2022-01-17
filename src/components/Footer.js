import { Facebook, Instagram, Twitter, Youtube } from "./icons";
import Image from "next/image";

const Footer = () => (
  <div className="footer bg-black p-6 text-white">
    <div className="container mx-auto">
      <div className="footer-text flex-none md:flex items-center justify-between text-xl">
        <p className="social-text">Follow us on social media</p>
        <span className="text-center">
          © Fussey 2022. Website by Sage Watson
        </span>
        <span className="text-center stripe-logo">
          <Image
            src="https://my-wordpress.fussey.co/wp-content/uploads/2022/01/Stripe_company-Powered-by-Stripe-Logo.wine_-e1641454508312.png"
            alt="Stripe Logo"
            width="237"
            height="72.7"
          />
        </span>
      </div>
      <ul className="social-links mt-2 flex">
        <li className="">
          <a
            href="https://www.facebook.com/whysofussey"
            className="fa fa-facebook"
            target="_blank"
          >
            <Facebook />
          </a>
        </li>

        <li className="ml-2">
          <a
            href="https://www.instagram.com/fussey_/?hl=en"
            className="fa fa-instagram"
            target="_blank"
          >
            <Instagram />
          </a>
        </li>
      </ul>
    </div>
  </div>
);

export default Footer;
