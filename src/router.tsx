import { Route, ReactLocation, MakeGenerics } from 'react-location';

import { Product } from './types';

export const routes: Route[] = [
  {
    path: '/',
    import: () => import('./pages/home/homeModule').then((module) => module.default),
  },
  {
    path: 'product',
    children: [
      {
        path: ':id',
        import: () => import('./pages/product/productModule').then((module) => module.default),
      },
    ],
  },
  {
    path: 'cart',
    import: () => import('./pages/cart/cartModule').then((module) => module.default),
  },
];

export type LocationGenerics = MakeGenerics<{
  LoaderData: {
    products: Product[];
    product: Product;
  };
}>;

export const location = new ReactLocation();
