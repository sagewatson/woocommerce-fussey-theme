import Layout from "../src/components/Layout";
import Image from "next/image";
import Link from "next/link";
import Product from "../src/components/Product";
import client from "../src/components/ApolloClient";
import Contact from "../src/components/Contact";

import PRODUCTS_AND_CATEGORIES_QUERY from "../src/queries/product-and-categories";
import HeroCarousel from "../src/components/home/hero-carousel";

export default function Home(props) {
  const { products, heroCarousel } = props || {};

  return (
    <Layout>
      <div className="bg-black">
        {/*Hero Carousel*/}
        <HeroCarousel heroCarousel={heroCarousel} />
        {/*Main Slider*/}
        {/* <Image
          src="https://my-wordpress.fussey.co/wp-content/uploads/2021/12/main-slider.jpg"
          alt="Main Slider"
          width="2112"
          height="1250"
        /> */}
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
          {/* <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-10 text-white text-center">
            <Image
              src="https://my-wordpress.fussey.co/wp-content/uploads/2022/01/rsz_img_3098_1.jpg"
              alt="yellow hoodie"
              width="685"
              height="838"
            />
            <span>
              <h2 className="text-5xl mb-5">VISIONARY STREETWEAR</h2>
              <p className="text-2xl">
                At Fussey, we are building a brand which goes further than just
                wearing a logo. We hold the ideology of having your own
                identity. Whether you want to fit in or stand out, our mission
                is to represent the youth.
              </p>
              <br />
              <p className="text-2xl">
                When choosing our brand name and logo, we wanted to show a mix
                of ....
              </p>
            </span>
          </div> */}
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-10 text-white text-center">
            <Image
              src="https://my-wordpress.fussey.co/wp-content/uploads/2022/01/100-voucher.jpg"
              alt="win a $100 voucher"
              width="838"
              height="1000"
            />
            <span>
              <h2 className="text-5xl mb-5">WIN A $100 VOUCHER!</h2>
              <p className="text-2xl">
                Follow the rules on our Instagram and be in the draw to win a
                $100 voucher for our site.
              </p>
              <br />
              <span className="text-2xl">
                <p>To enter simply:</p>
                <p>1. Follow us on Instagram @fussey_ </p>
                <p> 2. Tag 2 friends in the comments </p>
                <p> 3. Share on your story for 5 extra entries </p>
              </span>
              <br />
              <Link href={`https://www.instagram.com/fussey_/`}>
                <a target="_blank">
                  <button className="text-black px-3 py-1 bg-white rounded-sm text-sm border-solid border border-current inline-block hover:bg-purple-600 hover:text-white hover:border-purple-600">
                    Enter here
                  </button>
                </a>
              </Link>
            </span>
          </div>
        </div>
        <div id="contact-form">
          <Contact />
        </div>
        <p className="text-white text-center mt-5">LET'S GET SOCIAL</p>
        <div className="flex flex-wrap overflow-hidden hover:opacity-90">
          <div className="w-1/4 overflow-hidden ">
            <Image
              src="https://my-wordpress.fussey.co/wp-content/uploads/2022/01/crewneck.jpg"
              alt="win a $100 voucher"
              width="1000"
              height="1000"
            />
          </div>
          <div className="w-1/4 overflow-hidden">
            <Image
              src="https://my-wordpress.fussey.co/wp-content/uploads/2022/01/tie-dye-shorts.jpg"
              alt="win a $100 voucher"
              width="1000"
              height="1000"
            />
          </div>
          <div className="w-1/4 overflow-hidden">
            <Image
              src="https://my-wordpress.fussey.co/wp-content/uploads/2022/01/grafitti-long-sleeve.jpg"
              alt="win a $100 voucher"
              width="1000"
              height="1000"
            />
          </div>
          <div className="w-1/4 overflow-hidden">
            <Image
              src="https://my-wordpress.fussey.co/wp-content/uploads/2022/01/yellow-hoodie.jpg"
              alt="win a $100 voucher"
              width="1000"
              height="1000"
            />
          </div>
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
