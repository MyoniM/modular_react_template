import React from 'react';

export const getProducts = async () => {
  return [{ id: 1 }];
};

const homeModule = {
  loader: async () => {
    return {
      products: await getProducts(),
    };
  },
  element: () => import('./HomePage').then((module) => <module.default />),
};

export default homeModule;
