import { useState, useEffect } from "react";
import { productApi } from "../api/productApi";

const ProductList = ({ onEdit }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      const response = await productApi.getAll();
      setProducts(response.data);
      console.log("Respuesta de getAll:", response.data);
    } catch (error) {
      console.error("Error cargando productos:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("¿Eliminar este producto?")) {
      try {
        await productApi.delete(id);
        loadProducts(); // Recarga la lista
      } catch (error) {
        console.error("Error eliminando:", error);
      }
    }
  };
  
  if (loading) return <div>Cargando...</div>;

 return (
    <div className="product-list">
      <h2 className="text-2xl font-bold mb-4 bg-light2 text-light rounded-2xl p-0.5 pl-2">Lista de Productos</h2>
      <table className="w-full bg-light2 rounded-2xl shadow-lg">
        <thead>
          <tr>
            <th className="text-left px-4 py-2">Nombre</th>
            <th className="text-left px-4 py-2">Precio</th>
            <th className="text-left px-4 py-2">Stock</th>
            <th className="text-left px-4 py-2">Gestión</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td className="p-0.5 ">{product.name}</td>
              <td>${product.price}</td>
              <td>{product.stock}</td>
              <td>
                <button onClick={() => onEdit(product)}>Editar</button>
                <button onClick={() => handleDelete(product.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default ProductList;