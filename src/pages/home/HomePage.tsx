import React from 'react';
import { Link, useMatch } from 'react-location';

import type { LocationGenerics } from '../../router';

export default function HomePage() {
  const { products } = useMatch<LocationGenerics>().data;

  return (
    <div>
      {products?.map((product) => (
        <Link to={`/product/${product.id}`}>{product.id}</Link>
      ))}
    </div>
  );
}
