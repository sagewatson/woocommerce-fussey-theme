import Layout from "../../src/components/Layout";
import { useRouter } from "next/router";
import client from "../../src/components/ApolloClient";
import AddToCartButton from "../../src/components/cart/AddToCartButton";
import {
  PRODUCT_BY_SLUG_QUERY,
  PRODUCT_SLUGS,
} from "../../src/queries/product-by-slug";
import { isEmpty } from "lodash";
import GalleryCarousel from "../../src/components/single-product/gallery-carousel";
import Price from "../../src/components/single-product/price";
import { useState, useEffect } from "react";

export default function Product(props) {
  const { product } = props;

  // this is the code I have added which is fetching the product variations from the API

  const [size, setSize] = useState("S");

  const handleSizeChange = (e) => {
    const selectedSize = e.target.value;
    setSize(selectedSize);
  };

  const productSizes = product.attributes.nodes[0].options;

  //

  const router = useRouter();

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <Layout>
      {product ? (
        <div className="single-product container mx-auto my-32 px-4 xl:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="product-images">
              {!isEmpty(product?.galleryImages?.nodes) ? (
                <GalleryCarousel gallery={product?.galleryImages?.nodes} />
              ) : !isEmpty(product.image) ? (
                <img
                  src={product?.image?.sourceUrl}
                  alt="Product Image"
                  width="100%"
                  height="auto"
                  srcSet={product?.image?.srcSet}
                />
              ) : null}
            </div>
            <div className="product-info">
              <h4 className="products-main-title text-2xl uppercase text-white">
                {product.name}
              </h4>
              <div
                dangerouslySetInnerHTML={{
                  __html: product.description,
                }}
                className="product-description mb-5 text-white"
              />
              <Price
                salesPrice={product?.price}
                regularPrice={product?.regularPrice}
              />
              <div className="text-white">
                <p>Size:</p>
                <select
                  onChange={(e) => handleSizeChange(e)}
                  name="sizes"
                  id="sizes"
                  className="text-black"
                >
                  {productSizes.map((productSize) => (
                    <option key={productSize} value={productSize}>
                      {productSize}
                    </option>
                  ))}
                </select>
              </div>
              <AddToCartButton size={size} product={product} />
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </Layout>
  );
}

export async function getStaticProps(context) {
  const {
    params: { slug },
  } = context;

  const { data } = await client.query({
    query: PRODUCT_BY_SLUG_QUERY,
    variables: { slug },
  });

  return {
    props: {
      product: data?.product || {},
    },
    revalidate: 1,
  };
}

export async function getStaticPaths() {
  const { data } = await client.query({
    query: PRODUCT_SLUGS,
  });

  const pathsData = [];

  data?.products?.nodes &&
    data?.products?.nodes.map((product) => {
      if (!isEmpty(product?.slug)) {
        pathsData.push({ params: { slug: product?.slug } });
      }
    });

  return {
    paths: pathsData,
    fallback: true,
  };
}
