// src/pages/Electronics.tsx
import React from 'react';
import NavBar from '../components/NavBar';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';
import coralImg from '../images/coral.jpg';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import type { AppDispatch } from '../redux/store';

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

const Electronics: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleAddToCart = (product: Product) => {
    dispatch(addToCart(product));
  };

  const { data: products, isLoading, isError } = useQuery<Product[]>({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });

  const placeholderImg =
    'https://via.placeholder.com/250x150.png?text=No+Image';

  const electronics = products?.filter(
    (p) => p.category === 'electronics'
  );

  return (
    <div className="category-page">
      <NavBar />

      <header
        className="hero-section"
        style={{ backgroundImage: `url(${coralImg})` }}
      >
        <h1>Electronics</h1>
        <p className="lead">Discover the latest tech and gadgets.</p>
        <Link to="/shop">
          <Button
            style={{
              backgroundColor: '#f3a488',
              borderColor: 'rgb(207, 207, 206)',
            }}
            className="mt-3"
          >
            Back to Shop
          </Button>
        </Link>
      </header>

      <section className="products-section">
        <Container>
          <h2 className="text-center mb-4">Electronics Products</h2>

          {isLoading && (
            <p className="text-center text-white">Loading products...</p>
          )}
          {isError && (
            <p className="text-center text-danger">
              Error fetching products.
            </p>
          )}

          <Row>
            {electronics?.map((product) => (
              <Col key={product.id} md={6} className="mb-4">
                <Card
                  className="product-card h-100 shadow-sm"
                  style={{
                    backgroundColor: 'rgba(220,220,220,0.7)',
                  }}
                >
                  <Card.Img
                    variant="top"
                    src={product.image}
                    alt={product.title}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        placeholderImg;
                    }}
                    className="product-image"
                  />

                  <Card.Body className="d-flex flex-column">
                    <Card.Title className="text-center">
                      {product.title}
                    </Card.Title>

                    <Card.Text className="text-center mb-2 price-text">
                      ${product.price.toFixed(2)}
                    </Card.Text>

                    <Card.Text className="category-text">
                      <strong>Category:</strong> {product.category}
                    </Card.Text>

                    <Card.Text className="description-text">
                      {product.description}
                    </Card.Text>

                    <div className="text-center mb-2">
                      {Array.from({ length: 5 }, (_, i) => (
                        <FaStar
                          key={i}
                          color={
                            i <
                            Math.round(product.rating.rate)
                              ? '#e9bb87'
                              : '#ccc'
                          }
                        />
                      ))}
                    </div>

                    <Button
                      style={{
                        backgroundColor: '#f3a488',
                        borderColor: 'rgb(207, 207, 206)',
                      }}
                      onClick={() => handleAddToCart(product)}
                    >
                      Add to Cart
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <footer className="footer">
        <p>
          &copy; {new Date().getFullYear()} Brivana. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
};

export default Electronics;
