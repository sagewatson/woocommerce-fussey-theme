import { useState, useContext } from "react";
import { useQuery, useMutation } from "@apollo/client";
import Link from "next/link";
import { v4 } from "uuid";
import cx from "classnames";

import { AppContext } from "../context/AppContext";
import { getFormattedCart } from "../../functions";
import GET_CART from "../../queries/get-cart";
import ADD_TO_CART from "../../mutations/add-to-cart";

const AddToCart = (props) => {
  const { product } = props;
  const { size } = props;

  let sizeThatIsSelected = 0;

  // hoodie

  if (size === "S" && product.productId === 53) {
    sizeThatIsSelected = 56;
  }

  if (size === "M" && product.productId === 53) {
    sizeThatIsSelected = 57;
  }

  if (size === "L" && product.productId === 53) {
    sizeThatIsSelected = 58;
  }

  if (size === "XL" && product.productId === 53) {
    sizeThatIsSelected = 59;
  }

  // blue crewneck

  if (size === "S" && product.productId === 100) {
    sizeThatIsSelected = 101;
  }

  if (size === "M" && product.productId === 100) {
    sizeThatIsSelected = 102;
  }

  if (size === "L" && product.productId === 100) {
    sizeThatIsSelected = 103;
  }

  if (size === "XL" && product.productId === 100) {
    sizeThatIsSelected = 104;
  }

  // tie dye tee

  if (size === "S" && product.productId === 93) {
    sizeThatIsSelected = 94;
  }

  if (size === "M" && product.productId === 93) {
    sizeThatIsSelected = 95;
  }

  if (size === "L" && product.productId === 93) {
    sizeThatIsSelected = 96;
  }

  if (size === "XL" && product.productId === 93) {
    sizeThatIsSelected = 99;
  }

  // blue set

  if (size === "S" && product.productId === 86) {
    sizeThatIsSelected = 87;
  }

  if (size === "M" && product.productId === 86) {
    sizeThatIsSelected = 88;
  }

  if (size === "L" && product.productId === 86) {
    sizeThatIsSelected = 89;
  }

  // long sleeve

  if (size === "S" && product.productId === 81) {
    sizeThatIsSelected = 82;
  }

  if (size === "M" && product.productId === 81) {
    sizeThatIsSelected = 83;
  }

  if (size === "L" && product.productId === 81) {
    sizeThatIsSelected = 84;
  }

  if (size === "XL" && product.productId === 81) {
    sizeThatIsSelected = 85;
  }

  // tie dye shorts

  if (size === "S" && product.productId === 72) {
    sizeThatIsSelected = 73;
  }

  if (size === "M" && product.productId === 72) {
    sizeThatIsSelected = 74;
  }

  if (size === "L" && product.productId === 72) {
    sizeThatIsSelected = 75;
  }

  if (size === "XL" && product.productId === 72) {
    sizeThatIsSelected = 76;
  }

  // logo crewneck

  if (size === "S" && product.productId === 65) {
    sizeThatIsSelected = 66;
  }

  if (size === "M" && product.productId === 65) {
    sizeThatIsSelected = 67;
  }

  if (size === "L" && product.productId === 65) {
    sizeThatIsSelected = 68;
  }

  if (size === "XL" && product.productId === 65) {
    sizeThatIsSelected = 69;
  }

  // blue tee

  if (size === "S" && product.productId === 45) {
    sizeThatIsSelected = 61;
  }

  if (size === "M" && product.productId === 45) {
    sizeThatIsSelected = 62;
  }

  if (size === "L" && product.productId === 45) {
    sizeThatIsSelected = 63;
  }

  if (size === "XL" && product.productId === 45) {
    sizeThatIsSelected = 64;
  }

  // blue tee set

  if (size === "S" && product.productId === 233) {
    sizeThatIsSelected = 234;
  }

  if (size === "M" && product.productId === 233) {
    sizeThatIsSelected = 235;
  }

  if (size === "L" && product.productId === 233) {
    sizeThatIsSelected = 236;
  }

  // blue crew set

  if (size === "S" && product.productId === 228) {
    sizeThatIsSelected = 230;
  }

  if (size === "M" && product.productId === 228) {
    sizeThatIsSelected = 231;
  }

  if (size === "L" && product.productId === 228) {
    sizeThatIsSelected = 232;
  }

  const productQryInput = {
    clientMutationId: v4(), // Generate a unique id.
    productId: product.productId,
    variationId: sizeThatIsSelected,
  };

  const [cart, setCart] = useContext(AppContext);
  const [showViewCart, setShowViewCart] = useState(false);
  const [requestError, setRequestError] = useState(null);

  // Get Cart Data.
  const { data, refetch } = useQuery(GET_CART, {
    notifyOnNetworkStatusChange: true,
    onCompleted: () => {
      // Update cart in the localStorage.
      const updatedCart = getFormattedCart(data);
      localStorage.setItem("woo-next-cart", JSON.stringify(updatedCart));

      // Update cart data in React Context.
      setCart(updatedCart);
    },
  });

  // Add to Cart Mutation.
  const [
    addToCart,
    { data: addToCartRes, loading: addToCartLoading, error: addToCartError },
  ] = useMutation(ADD_TO_CART, {
    variables: {
      input: productQryInput,
    },
    onCompleted: () => {
      // On Success:
      // 1. Make the GET_CART query to update the cart with new values in React context.
      refetch();

      // 2. Show View Cart Button
      setShowViewCart(true);
    },
    onError: (error) => {
      if (error) {
        setRequestError(error?.graphQLErrors?.[0]?.message ?? "");
      }
    },
  });

  const handleAddToCartClick = async () => {
    setRequestError(null);
    await addToCart();
  };

  return (
    <div className="mt-2">
      {/*	Check if its an external product then put its external buy link */}
      {"ExternalProduct" === product.__typename ? (
        <a
          href={product?.externalUrl ?? "/"}
          target="_blank"
          className="px-3 py-1 bg-white rounded-sm mr-3 text-sm border-solid border border-current inline-block hover:bg-purple-600 hover:text-white hover:border-purple-600"
        >
          Buy now
        </a>
      ) : (
        <button
          disabled={addToCartLoading}
          onClick={handleAddToCartClick}
          className={cx(
            "px-3 py-1 bg-purple-600 text-white rounded-sm mr-3 text-sm hover:bg-white hover:text-black ",
            {
              "hover:bg-white hover:text-black": !addToCartLoading,
            },
            { "opacity-50 cursor-not-allowed": addToCartLoading }
          )}
        >
          {addToCartLoading ? "Adding to cart..." : "Add to cart"}
        </button>
      )}
      {showViewCart ? (
        <Link href="/cart">
          <button className="px-3 py-1 bg-white rounded-sm text-sm border-solid border border-current inline-block hover:bg-purple-600 hover:text-white hover:border-purple-600">
            View Cart
          </button>
        </Link>
      ) : (
        ""
      )}
    </div>
  );
};

export default AddToCart;
