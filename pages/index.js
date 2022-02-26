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
        {/* <div
          id="products-anchor"
          className="products container mx-auto my-5 px-4 xl:px-0"
        > */}
        <div id="products-anchor" className="products">
          <h2 className="products-main-title main-title mb-4 mt-8 text-xl uppercase">
            <span className="main-title-inner">New Arrivals</span>
          </h2>
          <div className="text-center mb-8">
            <Link href="/shop">
              <a>
                <button className="text-white uppercase bg-transparent px-4 py-2 border-solid border-2">
                  Shop All
                </button>
              </a>
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 product-background">
            {products.length
              ? products
                  .slice(5, 9)
                  .map((product) => (
                    <Product key={product.id} product={product} />
                  ))
              : ""}
          </div>
          <h2 className="products-main-title main-title mb-4 mt-8 text-xl uppercase">
            <span className="main-title-inner">Women's</span>
          </h2>
          <div className="text-center mb-8">
            <Link href="/shop">
              <a>
                <button className="text-white uppercase bg-transparent px-4 py-2 border-solid border-2">
                  Shop All
                </button>
              </a>
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 product-background">
            {products.length
              ? products
                  .slice(0, 4)
                  .map((product) => (
                    <Product key={product.id} product={product} />
                  ))
              : ""}
          </div>
        </div>
        <div className="about-us bg-black">
          <div className="w-8/12 m-auto mb-8 mt-8 bg-black sm:w-6/12 m:w-8/12 lg:w-4/12">
            <Image
              src="https://my-wordpress.fussey.co/wp-content/uploads/2022/02/Why-So-Fussey-white-horizontal.png"
              alt="Why So Fussey?"
              width="1954"
              height="353"
            />
          </div>
          <div>
            <h2 className="uppercase text-center text-3xl mb-8 text-white">
              Our vision
            </h2>
          </div>
          <div>
            <p className="text-center text-sm m-auto mb-8 text-white w-6/12">
              Fussey is a play on words - it's spelt wrong on purpose. But in a world 
              so judgemental, we forget that it's okay to be wrong sometimes. It's 
              okay not to be perfect and it's okay not to fit in. In fact, this is exactly 
              what we stand for. To stand out, to refute normality. Don't be fussy - be Fussey. 
              <span>
                <br/>
                <br/>
              Only then will you find true freedom.
              </span>
            </p>
          </div>
          <div className="m-auto w-10/12 sm:w-6/12 m:w-6/12">
            <Image
              src="https://my-wordpress.fussey.co/wp-content/uploads/2022/02/About-us.jpg"
              alt="About us"
              width="1646"
              height="1097"
            />
          </div>
        </div>
        <div id="contact-form" className="bg-black">
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
