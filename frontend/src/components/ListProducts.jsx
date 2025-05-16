  import { useState, useEffect } from "react";
  import { productApi } from "../api/productApi";
  import { toast } from "react-toastify";


  const ListProducts = ({ onEdit }) => {
    console.log("onEdit prop:", onEdit);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      loadProducts();
    }, []);

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
    if (loading) return <div>Cargando...</div>;

      return (
        <div className="product-list mb-10">
          <h2 className="text-2xl font-bold mb-4 bg-light2 text-light rounded-2xl p-0.5 pl-2">Lista de Productos</h2>
          <table className="w-full bg-light2 rounded-2xl shadow-lg table-fixed">
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
                  <td className="text-left px-4 py-2 hover:bg-light hover:text-light2 hover:font-bold">{product.name}</td>
                  <td className="text-left px-4 py-2">${product.price}</td>
                  <td className="text-left px-4 py-2">{product.stock}</td>
                  <td>
                    <button className="text-left px-4 py-2" onClick={() => onEdit(product)}>Editar</button>
                    <button className="text-left px-4 py-2 text-red-600" onClick={() => handleDelete(product.id)}>Eliminar</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
  };
  export default ListProducts;