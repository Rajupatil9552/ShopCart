import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div
      className="bg-white rounded-xl shadow-md hover:shadow-lg border border-gray-100 p-5 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
    >
      {/* Image */}
      <div className="w-full h-52 flex items-center justify-center overflow-hidden">
        <img
          src={product.imageUrl}
          alt={product.productName}
          className="object-contain h-full"
        />
      </div>

      {/* Text */}
      <div className="space-y-1">
        <h2 className="text-xl font-semibold text-text truncate">{product.productName}</h2>
        <p className="text-sm text-gray-600 line-clamp-2">{product.description}</p>
        <p className="text-lg font-bold text-primary">₹{product.price}</p>
      </div>

      {/* Buttons */}
      <div className="flex gap-3 mt-auto z-20">
  <button
    onClick={(e) => {
      e.stopPropagation();
      navigate(`/product/${product._id}`);
    }}
    className="flex-1 bg-primary hover:bg-blue-700 text-white py-2 rounded-md text-sm font-medium transition"
  >
    View Details
  </button>

  <button
    onClick={(e) => {
      e.stopPropagation();
      navigate("/cart", { state: { product } });
    }}
    className="flex-1 bg-cta hover:bg-[#e00062] text-white py-2 rounded-md text-sm font-medium transition"
  >
    Add to Cart
  </button>
</div>

    </div> 
  );
};

export default ProductCard;
