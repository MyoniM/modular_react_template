const getProductById = async (productId: any) => {
  return { id: productId };
};

const productModule = {
  loader: async ({ params }: any) => {
    return {
      product: await getProductById(params.id),
    };
  },
  element: () => import('./ProductPage').then((module) => <module.default />),
};

export default productModule;
