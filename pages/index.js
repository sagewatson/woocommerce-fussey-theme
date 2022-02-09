import Layout from "../src/components/Layout";
import Image from "next/image";
import Link from "next/link";
import Product from "../src/components/Product";
import client from "../src/components/ApolloClient";
import Contact from "../src/components/Contact";
import { Instagram } from "../src/components/icons";

import PRODUCTS_AND_CATEGORIES_QUERY from "../src/queries/product-and-categories";
import HeroCarousel from "../src/components/home/hero-carousel";

export default function Home(props) {
  const { products, heroCarousel } = props || {};

  return (
    <Layout>
      <div className="top-bar bg-white text-black py-3 w-full text-center uppercase ">
        <p>Free shipping on all orders</p>
      </div>
      <div className="bg-black">
        {/*Hero Carousel*/}
        <HeroCarousel heroCarousel={heroCarousel} />
        {/*Main Slider*/}
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            width: "100%",
          }}
        >
          <source
            src="https://my-wordpress.fussey.co/wp-content/uploads/2022/01/Short-Vid.mp4"
            type="video/mp4"
          />
        </video>
        {/*Products*/}
        <div
          id="products-anchor"
          className="products container mx-auto my-5 px-4 xl:px-0"
        >
          <h2 className="products-main-title main-title mb-5 text-xl uppercase">
            <span className="main-title-inner">NEW ARRIVALS</span>
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
            {products.length
              ? products.map((product) => (
                  <Product key={product.id} product={product} />
                ))
              : ""}
          </div>
          <div className="text-center mt-8 mb-20">
            <Image
              src="https://my-wordpress.fussey.co/wp-content/uploads/2022/01/Afterpay_Logo_White-1-e1641703148120.png"
              alt="Afterpay logo"
              width="493.5"
              height="121.8"
            />
            <p className="text-white text-3xl">COMING SOON</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-10 text-white text-center">
            <Image
              src="https://my-wordpress.fussey.co/wp-content/uploads/2022/01/100-voucher.jpg"
              alt="win a $100 voucher"
              width="838"
              height="1000"
            />
            <div>
              <h2 className="text-5xl mb-5 win-voucher-text">
                WIN A $100 VOUCHER!
              </h2>
              <p className="text-2xl win-voucher-text">
                Follow the rules on our Instagram and be in the draw to win a
                $100 voucher for our site.
              </p>
              <br />
              <span className="text-xl win-voucher-instructions leading-9">
                <p>To enter simply:</p>
                <p>1. Follow us on Instagram @fussey_ </p>
                <p> 2. Tag 2 friends in the comments </p>
                <p> 3. Share on your story for 5 extra entries </p>
              </span>
              <br />
              <Link href={`https://www.instagram.com/fussey_/`}>
                <a target="_blank">
                  <button className="enter-here">Enter here</button>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div id="contact-form">
          <Contact />
        </div>
        <Link href="https://www.instagram.com/fussey_/?hl=en">
          <a target="_blank">
            <p className="text-white uppercase text-center mt-5 mb-3 text-3xl follow-us-instagram ">
              Follow us on
              <span className="follow-insta-svg">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 18 18"
                  {...props}
                >
                  <g fill="#fff">
                    <path d="M2.637 18h12.726A2.64 2.64 0 0018 15.363V2.637A2.64 2.64 0 0015.363 0H2.637A2.64 2.64 0 000 2.637v12.726A2.64 2.64 0 002.637 18zM1.055 2.637c0-.871.71-1.582 1.582-1.582h12.726c.871 0 1.582.71 1.582 1.582v12.726c0 .871-.71 1.582-1.582 1.582H2.637c-.871 0-1.582-.71-1.582-1.582zm0 0" />
                    <path d="M9 13.746A4.751 4.751 0 0013.746 9 4.751 4.751 0 009 4.254 4.751 4.751 0 004.254 9 4.751 4.751 0 009 13.746zM9 5.31A3.696 3.696 0 0112.691 9 3.696 3.696 0 019 12.691 3.696 3.696 0 015.309 9 3.696 3.696 0 019 5.309zm0 0M14.273 5.309c.872 0 1.582-.711 1.582-1.582 0-.872-.71-1.582-1.582-1.582-.87 0-1.582.71-1.582 1.582 0 .87.711 1.582 1.582 1.582zm0-2.11a.53.53 0 01.528.528.53.53 0 01-.528.527.53.53 0 01-.527-.527.53.53 0 01.527-.528zm0 0" />
                  </g>
                </svg>
              </span>
            </p>
          </a>
        </Link>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
          <Link href="https://www.instagram.com/fussey_/?hl=en">
            <a target="_blank">
              <Image
                src="https://my-wordpress.fussey.co/wp-content/uploads/2022/01/crewneck.jpg"
                alt="yellow hoodie instagram"
                width="1000"
                height="1000"
              />
            </a>
          </Link>
          <Link href="https://www.instagram.com/fussey_/?hl=en">
            <a target="_blank">
              <Image
                src="https://my-wordpress.fussey.co/wp-content/uploads/2022/01/tie-dye-shorts.jpg"
                alt="tie dye instagram"
                width="1000"
                height="1000"
              />
            </a>
          </Link>
          <Link href="https://www.instagram.com/fussey_/?hl=en">
            <a target="_blank">
              <Image
                src="https://my-wordpress.fussey.co/wp-content/uploads/2022/01/grafitti-long-sleeve.jpg"
                alt="grafitti long sleeve instagram"
                width="1000"
                height="1000"
              />
            </a>
          </Link>
          <Link href="https://www.instagram.com/fussey_/?hl=en">
            <a target="_blank">
              <Image
                src="https://my-wordpress.fussey.co/wp-content/uploads/2022/01/yellow-hoodie.jpg"
                alt="yellow hoodie instagram"
                width="1000"
                height="1000"
              />
            </a>
          </Link>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: PRODUCTS_AND_CATEGORIES_QUERY,
  });

  return {
    props: {
      productCategories: data?.productCategories?.nodes
        ? data.productCategories.nodes
        : [],
      products: data?.products?.nodes ? data.products.nodes : [],
      heroCarousel: data?.heroCarousel?.nodes[0]?.children?.nodes
        ? data.heroCarousel.nodes[0].children.nodes
        : [],
    },
    revalidate: 1,
  };
}
