// src/components/ProductForm.jsx
import React, { useState, useEffect } from "react";
import { productApi } from "../api/productApi";

const ProductForm = ({ productToEdit, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    name: "",
    price: 0,
    stock: 0,
    image: "",
  });

  useEffect(() => {
    if (productToEdit) {
      setFormData({
        name: productToEdit.name,
        price: productToEdit.price,
        stock: productToEdit.stock,
        image: productToEdit.image || "",
      });
    }
  }, [productToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === "price" || name === "stock" ? Number(value) : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (productToEdit) {
        await productApi.update(productToEdit.id, formData);
      } else {
        await productApi.create(formData);
      }
      onSave(); // Notifica que se guardó
    } catch (error) {
      console.error("Error guardando producto:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{productToEdit ? "Editar" : "Crear"} Producto</h2>
      
      <label>
        Nombre:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Precio:
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          min="0"
          step="0.01"
          required
        />
      </label>

      <label>
        Stock:
        <input
          type="number"
          name="stock"
          value={formData.stock}
          onChange={handleChange}
          min="0"
          required
        />
      </label>

      <label>
        Imagen (URL):
        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
        />
      </label>

      <button type="submit">Guardar</button>
      <button type="button" onClick={onCancel}>
        Cancelar
      </button>
    </form>
  );
};

export default ProductForm;