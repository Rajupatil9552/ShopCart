import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchProductById } from "../api/fetchProduct";
import Navbar from "../components/Navbar";
import SimilarProducts from "../components/SimilarProduct.jsx";
import { addToCart } from "../api/cartApi.js";

const ProductDetails = () => {
  const { id } = useParams();
  const [productDetails, setProductDetails] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const getProductById = async () => {
      try {
        const response = await fetchProductById(id);
        setProductDetails(response.data);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };
    getProductById();
  }, [id]);

  const handleAddToCart = async () => {
    try {
      await addToCart(productDetails._id, quantity);
    } catch (error) {
      console.error("Error adding product to cart:", error);
    }
  };

  return (
    <>
     

      <section className="max-w-7xl mx-auto px-6 py-16">
        {productDetails && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-start">

            {/* Image */}
            <div className="bg-white p-6 rounded-xl shadow-md flex justify-center">
              <img
                src={productDetails.imageUrl}
                alt={productDetails.name}
                className="h-[420px] object-contain"
              />
            </div>

            {/* Right Info */}
            <div className="space-y-6">
              <h1 className="text-4xl font-extrabold text-text">
                {productDetails.name}
              </h1>

              <p className="text-lg text-gray-600 max-w-lg">
                {productDetails.description}
              </p>

              <p className="text-3xl font-bold text-primary">
                ₹{productDetails.price}
              </p>

              <p className="text-gray-600 text-base">
                Category: <span className="font-medium">{productDetails.category}</span>
              </p>

              {/* Quantity */}
              <div className="flex items-center gap-4">
                <label className="text-lg font-medium">Qty:</label>
                <input
                  type="number"
                  min="1"
                  defaultValue="1"
                  className="border p-2 rounded-md w-24 focus:outline-primary"
                  onChange={(e) => setQuantity(Number(e.target.value))}
                />
              </div>

              {/* CTA Buttons */}
              <div className="flex gap-4 pt-4">
                <button
                  onClick={handleAddToCart}
                  className="bg-cta hover:bg-[#e00062] text-white px-6 py-3 rounded-md font-medium text-lg transition"
                >
                  Add to Cart
                </button>
               
              </div>

              {/* Trust indicators */}
              <ul className="pt-6 text-gray-600 space-y-1 text-sm">
                <li>✔ Fast Delivery Available</li>
                <li>✔ Secure Payment</li>
                <li>✔ 7-Days Return Policy</li>
              </ul>
            </div>
          </div>
        )}
      </section>

      <SimilarProducts
        productDetails={productDetails || ""}
        currentProductId={id}
      />
     
    </>
  );
};

export default ProductDetails;
