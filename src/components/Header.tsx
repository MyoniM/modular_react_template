import React from 'react';
import { Link } from 'react-location';


export default function Header() {
  return (
    <>
      <Link to="/">Home</Link>
      <Link id="cart" to="/cart">
        Cart
      </Link>
    </>
  );
}
