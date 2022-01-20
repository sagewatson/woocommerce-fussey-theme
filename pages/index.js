import Layout from "../src/components/Layout";
import Image from "next/image";
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
          </div>
        </div>
        <div id="contact-form">
          <Contact />
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
