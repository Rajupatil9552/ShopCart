import React, { useState, useEffect } from "react";
import { fetchProducts } from "../api/fetchProduct";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";

const ProductListing = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");

  const selectCategory = (category) => {
    setActiveCategory(category);
    if (category === "All") {
      setProducts(allProducts);
    } else {
      const filteredProducts = allProducts.filter(
        (product) => product.category === category
      );
      setProducts(filteredProducts);
    }
  };

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetchProducts();
        setAllProducts(response.data);
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    getProducts();
  }, []);

  const categories = ["All", "Electronics", "Clothing", "Books", "Home"];

  return (
    <>
    

      <section className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-center mb-12 text-text">Products</h1>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => selectCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat
                  ? "bg-primary text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        {products.length > 0 ? (
          <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600 text-lg pt-16">No products found.</p>
        )}
      </section>
    
    </>
  );
};

export default ProductListing;
