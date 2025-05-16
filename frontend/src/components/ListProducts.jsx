import { useState, useEffect } from "react";
import { productApi } from "../api/productApi";
import { toast } from "react-toastify";
import { Button } from "@headlessui/react";

const ListProducts = ({ onEdit, refreshTrigger }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProducts();
  }, [refreshTrigger]);

  const loadProducts = async () => {
    try {
      const response = await productApi.getAll();
      setProducts(response.data);
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
        toast.success("Producto eliminado correctamente");
        loadProducts();
      } catch (error) {
        toast.error("Error al eliminar el producto");
        console.error("Error eliminando:", error);
      }
    }
  };

  if (loading) return <div className="text-center text-gray-500 py-10">Cargando productos...</div>;

  return (
    <div className="product-list mb-10">
      <h2 className="text-xl font-semibold mb-6 text-[#d98c68]">Lista de Productos</h2>

      <div className="overflow-x-auto bg-white/80 backdrop-blur-sm shadow rounded-xl border border-light2">
        <table className="min-w-full text-sm text-left text-gray-700">
          <thead className="border border-light2">
            <tr>
              <th className="px-6 py-4 font-medium">Nombre</th>
              <th className="px-6 py-4 font-medium">Precio</th>
              <th className="px-6 py-4 font-medium">Stock</th>
              <th className="px-6 py-4 font-medium">Gestión</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {products.map((product) => (
              <tr key={product.id} className="hover:bg-[#fdf7f4] transition-colors">
                <td className="px-6 py-3">{product.name}</td>
                <td className="px-6 py-3">${product.price}</td>
                <td className="px-6 py-3">{product.stock}</td>
                <td className="px-6 py-3 flex gap-2">
                  <Button
                    as="button"
                    onClick={() => onEdit(product)}
                    className="inline-flex items-center rounded-lg bg-[#7db4b5] px-3 py-1.5 text-xs font-medium text-white shadow-sm hover:bg-[#68a4a5] focus:outline-none focus:ring-2 focus:ring-[#7db4b5] focus:ring-offset-1 transition"
                  >
                    Editar
                  </Button>

                  <Button
                    as="button"
                    onClick={() => handleDelete(product.id)}
                    className="inline-flex items-center rounded-lg bg-[#de7066] px-3 py-1.5 text-xs font-medium text-white shadow-sm hover:bg-[#c65f55] focus:outline-none focus:ring-2 focus:ring-[#de7066] focus:ring-offset-1 transition"
                  >
                    Eliminar
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListProducts;
