import Layout from "../src/components/Layout";
import Product from "../src/components/Product";
import client from "../src/components/ApolloClient";

import PRODUCTS_AND_CATEGORIES_QUERY from "../src/queries/product-and-categories";

export default function Home(props) {
  const { products } = props || {};

  return (
    <Layout>
      <div id="products-anchor" className="products">
        <h2 className="products-main-title main-title mb-4 mt-8 text-xl uppercase bg-black">
          <span className="main-title-inner">SHOP ALL</span>
        </h2>
        <p className="text-white text-center mb-8 uppercase products-main-title">
          Shop all our latest products
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 bg-white">
          {products.length
            ? products.map((product) => (
                <Product key={product.id} product={product} />
              ))
            : ""}
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
    },
    revalidate: 1,
  };
}
