import React, { useState } from 'react';
import Navbar from './Navbar';
const Marketplace = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("");
  const [wishlist, setWishlist] = useState([]);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const handleAddToWishlist = (product) => {
    if (!wishlist.some((item) => item.id === product.id)) {
      setWishlist([...wishlist, product]);
    }
  };

  const handleClearWishlist = () => {
    setWishlist([]);
  };

  const products = [
    {
      id: 1,
      name: "Recycled Concrete",
      description: "High-quality recycled concrete, ideal for construction foundations and pathways.",
      price: "$50 per ton",
      category: "Concrete",
      image: "https://via.placeholder.com/300",
    },
    {
      id: 2,
      name: "Recycled Timber",
      description: "Sustainably sourced timber perfect for construction or furniture.",
      price: "$75 per cubic meter",
      category: "Timber",
      image: "https://via.placeholder.com/300",
    },
    {
      id: 3,
      name: "Recycled Steel",
      description: "Durable and affordable recycled steel for construction projects.",
      price: "$150 per ton",
      category: "Steel",
      image: "https://via.placeholder.com/300",
    },
  ];

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchQuery) &&
      (filter === "" || product.category === filter)
  );

  return (
    <>
      {/* Navbar */}
      <Navbar/>
      {/* Marketplace Content */}
      <section className="bg-gray-200 text-gray-900 pt-24 pb-10 min-h-screen">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-10">Marketplace</h1>
          <p className="text-lg text-center mb-10">Buy and sell recycled construction materials to promote sustainability and reduce waste.</p>

          {/* Search, Filter, and Clear Wishlist */}
          <div className="mb-8 flex flex-col md:flex-row items-center justify-between">
            <input
              type="text"
              placeholder="Search materials..."
              className="w-full md:w-1/2 px-4 py-2 border rounded-lg mb-4 md:mb-0"
              onChange={handleSearch}
            />
            <select
              className="w-full md:w-1/4 px-4 py-2 border rounded-lg"
              onChange={handleFilterChange}
            >
              <option value="">All Categories</option>
              <option value="Concrete">Concrete</option>
              <option value="Timber">Timber</option>
              <option value="Steel">Steel</option>
            </select>
          </div>
          <button
            className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700 mb-8"
            onClick={handleClearWishlist}
          >
            Clear Wishlist
          </button>

          {/* Product List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-white shadow-md rounded-lg overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-bold mb-2">{product.name}</h2>
                  <p className="text-gray-700 mb-4">{product.description}</p>
                  <p className="text-gray-900 font-bold mb-4">{product.price}</p>
                  <div className="flex space-x-4">
                    <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">Buy Now</button>
                    <button
                      className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-700"
                      onClick={() => handleAddToWishlist(product)}
                    >
                      Add to Wishlist
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Wishlist Section */}
          {wishlist.length > 0 && (
            <div className="mt-10">
              <h2 className="text-3xl font-bold mb-6">Wishlist</h2>
              <ul className="list-disc pl-5">
                {wishlist.map((item) => (
                  <li key={item.id} className="mb-2">
                    {item.name} - {item.price}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-10">
        <div className="container mx-auto text-center">
          <ul className="flex justify-center space-x-6 mb-4">
            <li><a href="/classifier" className="hover:underline">Classifier</a></li>
            <li><a href="/marketplace" className="hover:underline">Marketplace</a></li>
            <li><a href="/recycling-facilities" className="hover:underline">Recycling Facilities</a></li>
            <li><a href="/about-us" className="hover:underline">About Us</a></li>
          </ul>
          <div className="mb-4">
            <p>Contact us: info@cdwastemanagement.com</p>
          </div>
          <div className="flex justify-center space-x-4">
            <a href="#" className="hover:underline">Facebook</a>
            <a href="#" className="hover:underline">Twitter</a>
            <a href="#" className="hover:underline">LinkedIn</a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Marketplace;
