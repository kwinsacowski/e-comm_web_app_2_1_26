import React from 'react';
import NavBar from '../components/NavBar';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Link } from 'react-router-dom';
import electronicsImg from '../images/electronics.jpg';
import jewelryImg from '../images/jewelry.jpg';
import mensImg from '../images/mens.jpg';
import womensImg from '../images/womens.jpg';

const fetchCategories = async (): Promise<string[]> => {
  const res = await axios.get('https://fakestoreapi.com/products/categories');
  return res.data;
};

const ShopBy: React.FC = () => {
  const { data: categories, isLoading, isError } = useQuery<string[]>({
    queryKey: ['categories'],
    queryFn: fetchCategories,
  });

  const getCategoryImage = (category: string) => {
    switch (category.toLowerCase()) {
      case 'electronics':
        return electronicsImg;
      case 'jewelery':
        return jewelryImg;
      case "men's clothing":
        return mensImg;
      case "women's clothing":
        return womensImg;
      default:
        return `https://via.placeholder.com/250x150.png?text=${encodeURIComponent(category)}`;
    }
  };

  const getCategoryLink = (category: string) => {
    switch (category.toLowerCase()) {
      case 'electronics':
        return '/electronics';
      case 'jewelery':
        return '/jewelry';
      case "men's clothing":
        return '/mens';
      case "women's clothing":
        return '/womens';
      default:
        return '/shop';
    }
  };

  if (isLoading) return <p className="text-center mt-5">Loading categories...</p>;
  if (isError) return <p className="text-center mt-5 text-danger">Error fetching categories.</p>;

  return (
    <div className="shopby-page">
      <NavBar />

      {/* Hero Section */}
      <header className="hero-section text-center my-5">
        <h1 style={{ color: '#f87947' }}>Shop By Category</h1>
        <p className="lead">Browse our curated collections and find your perfect style.</p>
      </header>

      {/* Categories Section */}
      <section className="container my-5">
        <div className="row g-4 justify-content-center">
          {categories?.map((category, index) => (
            <div key={index} className="col-md-6">
              <Link to={getCategoryLink(category)} style={{ textDecoration: 'none' }}>
                <div
                  className="card h-100 shadow-sm d-flex flex-row align-items-center"
                  style={{ backgroundColor: '#fcb194c7', borderRadius: '12px', padding: '1rem' }}
                >
                  <img
                    src={getCategoryImage(category)}
                    alt={category}
                    style={{
                      width: '150px',
                      height: '150px',
                      objectFit: 'cover',
                      borderRadius: '8px',
                      marginRight: '1rem',
                    }}
                  />
                  <div className="card-body d-flex flex-column justify-content-center">
                    <h3 className="card-title text-capitalize" style={{ color: '#03396c' }}>
                      {category}
                    </h3>
                    <p className="lead" style={{ color: '#011f4b' }}>Explore {category}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-4" style={{ backgroundColor: '#49a1b1', color: 'white' }}>
        <p>&copy; {new Date().getFullYear()} Brivana. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ShopBy;
