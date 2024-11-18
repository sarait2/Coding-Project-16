// task 2 -Create the App Component
import React, { useState } from 'react';
import ProductList from './ProductList';
import AddProductForm from './AddProductForm';

const App = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Hair Brush', price: 6, description: 'Detangling Brush' },
    { id: 2, name: 'Curling Iron', price: 45, description: 'Create effortless curls with this styling tool' },
  ]);

  const addProduct = (newProduct) => {
    setProducts([...products, { ...newProduct, id: products.length + 1 }]);
  };

  return (
    <div>
      <h1>Product Dashboard</h1>
      <ProductList products={products} />
      <AddProductForm addProduct={addProduct} />
    </div>
  );
};

export default App;
