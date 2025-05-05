import React, { useState, useEffect } from 'react';

function Products() {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({
    category: 'all',
    price: 'all'
  });

  // This would typically fetch data from an API
  useEffect(() => {
    // Mock product data
    const mockProducts = [
      {
        id: 1,
        name: 'Premium Headphones',
        price: 99.99,
        category: 'electronics',
        image: 'https://cdn.thewirecutter.com/wp-content/media/2023/07/bluetoothheadphones-2048px-0876.jpg'
      },
      {
        id: 2,
        name: 'Wireless Speaker',
        price: 79.99,
        category: 'electronics',
        image: 'https://www.livemint.com/lm-img/img/2024/01/23/1600x900/best_marshall_portable_speaker_1706012974583_1706012974873.jpg'
      },
      {
        id: 3,
        name: 'Smart Watch',
        price: 129.99,
        category: 'electronics',
        image: 'https://gourban.in/cdn/shop/files/WAve.png?v=1705564263&width=2048'
      },
      // Add more mock products as needed
    ];
    
    setProducts(mockProducts);
  }, []);

  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.id]: e.target.value
    });
  };

  const applyFilters = () => {
    console.log('Filters applied:', filters);
    // Would typically filter products based on criteria
  };

  return (
    <>
      <section className="products-header">
        <h2>Our Products</h2>
        <div className="filters">
          <select 
            id="category" 
            value={filters.category}
            onChange={handleFilterChange}
          >
            <option value="all">All Categories</option>
            <option value="electronics">Electronics</option>
            <option value="clothing">Clothing</option>
            <option value="home">Home Goods</option>
            <option value="accessories">Accessories</option>
          </select>
          <select 
            id="price"
            value={filters.price}
            onChange={handleFilterChange}
          >
            <option value="all">All Prices</option>
            <option value="under50">Under $50</option>
            <option value="50to100">$50 - $100</option>
            <option value="over100">Over $100</option>
          </select>
          <button className="btn" onClick={applyFilters}>Apply Filters</button>
        </div>
      </section>

      <section className="product-listing">
        <div className="product-grid">
          {products.map(product => (
            <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p className="price">${product.price.toFixed(2)}</p>
              <button className="btn">Add to Cart</button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Products;