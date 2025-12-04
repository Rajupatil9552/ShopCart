import React, { useState, useEffect } from "react";
import { fetchProducts } from "../api/fetchProduct.js";
import { Link } from "react-router-dom";

const SimilarProducts = ({ productDetails, currentProductId }) => {
  const category = productDetails?.category || "";
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetchProducts();
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products inside SimilarProducts:", error);
      }
    };
    getProducts();
  }, []);

  const similarProducts = products.filter(
    (product) => product.category === category && product._id !== currentProductId
  );

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-text mb-10">Similar Products</h2>

      {similarProducts.length > 0 ? (
        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {similarProducts.map((product) => (
            <Link
              to={`/product/${product._id}`}
              key={product._id}
              className="group"
            >
              <div className="bg-white rounded-xl shadow-md border border-gray-100 p-5 flex flex-col gap-3 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-lg">
                {/* IMAGE */}
                <div className="w-full h-44 flex justify-center items-center overflow-hidden">
                  <img
                    src={product.imageUrl}
                    alt={product.productName}
                    className="object-contain h-full"
                  />
                </div>

                {/* TEXT */}
                <h3 className="text-lg font-semibold text-text truncate">
                  {product.productName}
                </h3>
                <p className="text-primary font-bold text-lg">
                  ₹{product.price}
                </p>

                <button className="bg-primary text-white py-2 rounded-md text-sm font-medium mt-auto group-hover:bg-blue-700 transition">
                  View Product
                </button>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <p className="text-gray-600 text-lg">No similar products found.</p>
      )}
    </section>
  );
};

export default SimilarProducts;
