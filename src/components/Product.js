import Link from "next/link";
// import AddToCartButton from "../components/cart/AddToCartButton";
import Price from "./single-product/price";
import Image from "../image";
import { DEFAULT_PRODUCT_HOME_IMG_URL } from "../constants/urls";

const Product = (props) => {
  const { product } = props;

  return (
    // @TODO Need to handle Group products differently.
    undefined !== product && "GroupProduct" !== product.__typename ? (
      <div className="product mb-5 text-center py-8">
        <Link href={`/product/${product?.slug}`}>
          <a>
            <Image
              className="object-cover product-dropshadow"
              width="308"
              height="308"
              loading="lazy"
              sourceUrl={product?.image?.sourceUrl ?? ""}
              defaultImgUrl={DEFAULT_PRODUCT_HOME_IMG_URL}
              altText={product?.image?.altText ?? product?.slug}
            />
          </a>
        </Link>
        <div className="product-info">
          <h3 className="product-title mt-12 font-bold  uppercase text-base">
            {product.name ? product.name : ""}
          </h3>
          {/* <div
            className="product-description text-sm text-white "
            dangerouslySetInnerHTML={{ __html: product?.description }}
          /> */}
          <Price
            salesPrice={product?.price}
            regularPrice={product?.regularPrice}
          />
          {/* <AddToCartButton product={product} /> */}
          {/* <Link href={`/product/${product?.slug}`}>
            <a>
              <button className="px-3 py-1 bg-white rounded-sm text-sm border-solid border border-current inline-block hover:bg-purple-600 hover:text-white hover:border-purple-600">
                Buy now
              </button>
            </a>
          </Link> */}
        </div>
      </div>
    ) : (
      ""
    )
  );
};

export default Product;
