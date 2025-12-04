import React, { useState, useEffect } from "react";
import { getCartItems, removeFromCart } from "../api/cartApi";
import Navbar from "../components/Navbar";


const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([]);

  const subtotal = cartItems.reduce(
  (acc, item) => acc + item.productId.price * item.quantity,
  0
);

const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);


  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const items = await getCartItems();
        setCartItems(items.data.products);
        console.log("Cart items fetched:", items);
      } catch (error) {
        console.error("Error fetching cart items:", error);
      }
    };

    fetchCartItems();
  }, []);

  const handleRemoveFromCart = async (productId) => {
    try {
      console.log("Removing product with ID:", productId);
      const response = await removeFromCart(productId);
      console.log("Product removed from cart:", response);
      setCartItems((prev) =>
        prev.filter((item) => item.productId._id !== productId)
      );
    } catch (error) {
      console.error("Error removing product from cart:", error);
    }
  };

 return (
  <div>
   

    <section className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-10 text-text">Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <div className="bg-white rounded-xl shadow-md p-8 text-center">
          <p className="text-gray-600 text-lg mb-2">Your cart is empty.</p>
          <p className="text-sm text-gray-500">Add products to continue.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* LEFT — CART ITEMS */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.productId._id}
                className="flex items-center gap-4 bg-white rounded-xl shadow-md border border-gray-100 p-4"
              >
                <div className="w-20 h-20 flex-shrink-0">
                  <img
                    src={item.productId.imageUrl}
                    alt={item.productId.productName}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>

                <div className="flex-1 space-y-1">
                  <h2 className="text-lg font-semibold text-text">
                    {item.productId.productName}
                  </h2>
                  <p className="text-sm text-gray-600">
                    Qty: {item.quantity}
                  </p>
                  <p className="text-sm font-semibold text-primary">
                    ₹{item.productId.price}
                  </p>
                </div>

                <button
                  onClick={() => handleRemoveFromCart(item.productId._id)}
                  className="p-2 rounded-full hover:bg-gray-100 transition flex items-center justify-center"
                  aria-label="Remove from cart"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 text-gray-500 hover:text-cta transition"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                    />
                  </svg>
                </button>
              </div>
            ))}
          </div>

          {/* RIGHT — ORDER SUMMARY */}
          <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6 h-fit">
            <h2 className="text-2xl font-bold mb-6 text-text">Order Summary</h2>

            <div className="space-y-2 text-gray-700">
              <p className="flex justify-between">
                <span>Total Items:</span>
                <span className="font-medium">{totalItems}</span>
              </p>
              <p className="flex justify-between text-lg font-semibold">
                <span>Subtotal:</span>
                <span>₹{subtotal}</span>
              </p>
            </div>

            <button className="w-full bg-cta hover:bg-[#e00062] text-white text-lg font-medium py-3 rounded-md transition mt-8">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </section>
  </div>
 
);

};

export default ShoppingCart;