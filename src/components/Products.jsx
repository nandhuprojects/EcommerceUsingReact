import React, { useState, useEffect, useContext } from 'react';
import { CartContext } from '../App'; // Update path as needed

function Products() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filters, setFilters] = useState({
    category: 'all',
    price: 'all'
  });
  
  // Access cart context
  const { addToCart } = useContext(CartContext);

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
      {
        id: 4,
        name: 'Casual T-Shirt',
        price: 24.99,
        category: 'clothing',
        image: 'https://tiimg.tistatic.com/fp/1/007/727/cream-colour-round-neck-printed-casual-wear-t-shirt-for-ladies-265.jpg'
      },
      {
        id: 5,
        name: 'Designer Jeans',
        price: 59.99,
        category: 'clothing',
        image: 'https://img.kwcdn.com/product/fancy/5d04d27e-2f82-48b7-8bb4-db7f0b45dce0.jpg?imageView2/2/w/500/q/60/format/webp'
      },
      {
        id: 6,
        name: 'Coffee Maker',
        price: 89.99,
        category: 'home',
        image: 'https://www.realsimple.com/thmb/Yl5u2pFYnYzNjHZWjJBUGmRqMt8=/fit-in/1500x3335/filters:no_upscale():max_bytes(150000):strip_icc()/Testing-Cuisinart_ConicalBurr_DGB2_4-ddmfs-176-Russell-Kilgore.jpg-4e4ba0a9d77648f282f8abf5b36d9112.jpg'
      },
      {
        id: 7,
        name: 'Sunglasses',
        price: 49.99,
        category: 'accessories',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvcQN7Towlm4KmQlvff89lx3JI5YHdaRnnWCFqNwSAhw&s&ec=72940543'
      },
      {
        id: 8,
        name: 'Smartwatch Band',
        price: 19.99,
        category: 'accessories',
        image: 'https://media.istockphoto.com/id/1136499046/photo/smart-wrist-watches-on-black.jpg?s=612x612&w=0&k=20&c=KgZVC7BsRVweVVGgvBxfXQhyjbB1viA_OFF7wtM51zY='
      }
    ];
    
    setProducts(mockProducts);
    setFilteredProducts(mockProducts);
  }, []);

  // Fixing the typo in handleFilterChange
  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.id]: e.target.value // Fixed the typo ta0rget -> target
    });
  };

  const applyFilters = () => {
    let result = [...products];
    
    // Filter by category
    if (filters.category !== 'all') {
      result = result.filter(product => product.category === filters.category);
    }
    
    // Filter by price
    if (filters.price !== 'all') {
      switch(filters.price) {
        case 'under50':
          result = result.filter(product => product.price < 50);
          break;
        case '50to100':
          result = result.filter(product => product.price >= 50 && product.price <= 100);
          break;
        case 'over100':
          result = result.filter(product => product.price > 100);
          break;
        default:
          break;
      }
    }
    
    setFilteredProducts(result);
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    // Provide feedback to user
    alert(`${product.name} added to cart!`);
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
          {filteredProducts.length > 0 ? (
            filteredProducts.map(product => (
              <div className="product-card" key={product.id}>
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p className="price">${product.price.toFixed(2)}</p>
                <button className="btn" onClick={() => handleAddToCart(product)}>
                  Add to Cart
                </button>
              </div>
            ))
          ) : (
            <div className="no-products">
              <p>No products match your filter criteria.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default Products;