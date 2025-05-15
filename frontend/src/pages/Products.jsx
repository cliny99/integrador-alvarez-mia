// src/pages/ProductsPage.jsx
import { useState } from "react";
import ProductList from "../components/ListProducts";
import ProductForm from "../components/form-create";

const ProductsPage = () => {
  const [editingProduct, setEditingProduct] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const handleEdit = (product) => {
    setEditingProduct(product);
    setShowForm(true);
  };

  const handleSave = () => {
    setShowForm(false);
    setEditingProduct(null);
  };

  return (
    <div className="products-page">
      <h1>Gestión de Productos</h1>
      
      {showForm ? (
        <ProductForm
          productToEdit={editingProduct}
          onSave={handleSave}
          onCancel={() => setShowForm(false)}
        />
      ) : (
        <>
          <button onClick={() => setShowForm(true)}>Crear Nuevo Producto</button>
          <ProductList onEdit={handleEdit} />
        </>
      )}
    </div>
  );
};

export default ProductsPage;