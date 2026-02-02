import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../redux/store';
import { removeFromCart, clearCart } from '../redux/cartSlice';
import NavBar from '../components/NavBar';
import { Button, Container } from 'react-bootstrap';

const Cart: React.FC = () => {
  const dispatch = useDispatch();
  const items = useSelector((state: RootState) => state.cart.items);

  const totalItems = items.reduce((t, i) => t + i.quantity, 0);
  const totalPrice = items.reduce((t, i) => t + i.price * i.quantity, 0);

  return (
    <>
      <NavBar />
      <Container className="mt-4">
        <h2>Your Shopping Cart</h2>

        {items.map(item => (
          <div key={item.id} className="d-flex align-items-center mb-3 product-card p-3">
            <img src={item.image} alt={item.title} style={{ width: 80 }} />
            <div className="ms-3 flex-grow-1">
              <h5>{item.title}</h5>
              <p>${item.price.toFixed(2)} × {item.quantity}</p>
            </div>
            <Button
              variant="danger"
              onClick={() => dispatch(removeFromCart(item.id))}
            >
              Remove
            </Button>
          </div>
        ))}

        <h4>Total Items: {totalItems}</h4>
        <h4>Total Price: ${totalPrice.toFixed(2)}</h4>

        <Button
          className="mt-3"
          style={{ backgroundColor: '#f3a488', border: 'none' }}
          onClick={() => {
            dispatch(clearCart());
            alert('Checkout successful! Cart cleared.');
          }}
        >
          Checkout
        </Button>
      </Container>
    </>
  );
};

export default Cart;
