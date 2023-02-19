import React from 'react';

const cartModule = {
  element: () => import('./CartPage').then((module) => <module.default />),
};

export default cartModule;
