
import { useState } from "react";
import ListProducts from "../components/ListProducts";
import ProductForm from "../components/FormCreate";
import CreateProductButton from "../components/CreateButton";

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
    <div className="products-page min-h-screen mb-10 relative"> 
      <ListProducts onEdit={handleEdit} />
      {showForm && (
        <ProductForm
          productToEdit={editingProduct}
          onSave={handleSave}
          onCancel={() => setShowForm(false)}
        />
      )}
      <CreateProductButton onClick={() => setShowForm(true)} /> 
    </div>
  );
};

export default ProductsPage;