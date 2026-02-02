import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import ProductCard from './ProductCard';
import { fetchAllProducts } from '../api/products';
import type { Product } from '../api/products';
import coralImg from '../images/coral.jpg';

interface Props {
  category: string;
  title: string;
  description: string;
}

const CategoryPage: React.FC<Props> = ({
  category,
  title,
  description,
}) => {
  const { data: products, isLoading, isError } = useQuery<Product[]>({
    queryKey: ['products'],
    queryFn: fetchAllProducts,
  });

  const filtered = products?.filter(
    (p) => p.category.toLowerCase() === category.toLowerCase()
  );

  return (
    <div className="category-page">
      <NavBar />

      <header
        className="hero-section"
        style={{ backgroundImage: `url(${coralImg})` }}
      >
        <h1>{title}</h1>
        <p className="lead">{description}</p>
        <Link to="/shop">
          <Button className="mt-3">Back to Shop</Button>
        </Link>
      </header>

      <Container>
        {isLoading && <p>Loading products...</p>}
        {isError && <p>Error fetching products.</p>}

        <Row>
          {filtered?.map((product) => (
            <Col key={product.id} md={6} className="mb-4">
              <ProductCard product={product} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default CategoryPage;
