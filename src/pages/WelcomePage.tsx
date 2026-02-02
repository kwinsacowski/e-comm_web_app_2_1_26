import React from 'react';
import NavBar from '../components/NavBar';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { FaStar } from 'react-icons/fa';
import coralImg from '../images/coral.jpg';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const fetchProducts = async (): Promise<Product[]> => {
  const res = await axios.get('https://fakestoreapi.com/products');
  return res.data;
};

const WelcomePage: React.FC = () => {
  const { data: products, isLoading, isError } = useQuery<Product[]>({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });

  const handleAddToCart = (product: Product) => {
    console.log(`Added to cart: ${product.title}`);
  };

  const placeholderImg = 'https://via.placeholder.com/150x150.png?text=No+Image';

  return (
    <div className="welcome-page" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* NavBar */}
      <NavBar />

      {/* Hero Section */}
      <header
        style={{
          backgroundImage: `url(${coralImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '100px 20px',
          color: 'white',
          textAlign: 'center',
          borderRadius: '8px',
        }}
      >
        <h1>Welcome to Brivana!</h1>
        <p className="lead">Your one-stop destination for soft luxurious fashion.</p>
        <a href="/shop">
          <button className="btn btn-coral mt-3">Shop Now</button>
        </a>
      </header>

      {/* Products Section */}
      <main>
        <section className="container">
          <h3 className="text-center mb-4" style={{ color: 'black' }}>
            All Products
          </h3>

          {isLoading && <p className="text-center text-white">Loading products...</p>}
          {isError && <p className="text-center text-danger">Error fetching products.</p>}

          <div className="d-flex flex-wrap justify-content-around" style={{ gap: '2rem' }}>
            {products?.map((product) => (
              <div
                key={product.id}
                className="card h-100"
                style={{
                  maxHeight: '400px',
                  width: '40%',
                  display: 'flex',
                  flexDirection: 'row',
                  backgroundColor: '#dad6d69f',
                  marginBottom: '2rem',
                  flexGrow: 1,
                }}
              >
                {/* Product Image */}
                <img
                  src={product.image}
                  alt={product.title}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = placeholderImg;
                  }}
                  style={{
                    width: '40%',
                    maxHeight: '100%',
                    objectFit: 'contain',
                    borderRadius: '8px',
                    margin: 'auto',
                  }}
                />

                {/* Product Info */}
                <div className="card-body d-flex flex-column" style={{ padding: '1rem', flex: 1 }}>
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text mb-1">
                    <strong>Category:</strong> {product.category}
                  </p>
                  <p className="card-text mb-1">
                    <strong>Price:</strong> ${product.price.toFixed(2)}
                  </p>
                  <p
                    className="card-text mb-2"
                    style={{ fontSize: '0.9rem', overflow: 'hidden', flexGrow: 1 }}
                  >
                    {product.description}
                  </p>

                  {/* Rating */}
                  <div className="mb-2">
                    {Array.from({ length: 5 }, (_, i) => (
                      <FaStar
                        key={i}
                        color={i < Math.round(product.rating.rate) ? '#ffbf00' : '#ccc'}
                      />
                    ))}
                  </div>

                  {/* Add to Cart Button */}
                  <button
                    className="btn btn-coral mt-auto"
                    onClick={() => handleAddToCart(product)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer
        className="text-center py-4"
        style={{ backgroundColor: '#49a1b1', color: 'white' }}
      >
        <p>&copy; {new Date().getFullYear()} Brivana. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default WelcomePage;
