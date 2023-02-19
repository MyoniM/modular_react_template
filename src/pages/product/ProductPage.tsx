import React from 'react';
import { useMatch } from 'react-location';

import type { LocationGenerics } from '../../router';

export default function ProductPage() {
  const { product } = useMatch<LocationGenerics>().data;

  return <p>PP{product?.id}</p>;
}
