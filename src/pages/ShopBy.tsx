import React from 'react';
import NavBar from '../components/NavBar';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

// Local images for categories
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

  if (isLoading) return <p className="text-center mt-5">Loading categories...</p>;
  if (isError) return <p className="text-center mt-5 text-danger">Error fetching categories.</p>;

  return (
    <div className="shopby-page">
      <NavBar />

      <header className="text-center my-5">
        <h1>Shop By Category</h1>
        <p className="lead">Browse our curated collections and find your perfect style.</p>
      </header>

      <section className="container my-5">
        <div className="row justify-content-center g-4">
          {categories?.map((category, index) => {
            // Map category names to local images
            let imgSrc = `https://via.placeholder.com/250x150.png?text=${encodeURIComponent(category)}`;
            switch (category.toLowerCase()) {
              case 'electronics':
                imgSrc = electronicsImg;
                break;
              case 'jewelery':
                imgSrc = jewelryImg;
                break;
              case "men's clothing":
                imgSrc = mensImg;
                break;
              case "women's clothing":
                imgSrc = womensImg;
                break;
            }

            return (
              <div key={index} className="col-md-3 text-center">
                <div className="card h-100">
                  <img
                    src={imgSrc}
                    alt={category}
                    className="card-img-top"
                    style={{
                      width: '70%',
                      maxHeight: '250px',
                      margin: '0 auto',
                      display: 'block',
                      borderRadius: '8px',
                    }}
                  />
                  <div className="card-body">
                    <h5 className="card-title text-capitalize">{category}</h5>
                  </div>
                </div>
              </div>
            );
          })}
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
