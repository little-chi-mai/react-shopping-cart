import React from "react";
import { useShoppingCart } from "use-shopping-cart";
import toast from "react-hot-toast";

export default function AddToCart({product}) {
  const {addItem} = useShoppingCart();

  function _handleAddItem() {
    addItem(product);
    toast.success(`${product.name} is added to your card`);
  }

  return (
    <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded" onClick={_handleAddItem} >
      Add To Cart
    </button>
  );
}
