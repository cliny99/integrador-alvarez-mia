import { useState, useEffect } from "react";
import { Dialog } from "@headlessui/react";
import { productApi } from "../api/productApi";
import { toast } from "react-toastify";

const ProductForm = ({ productToEdit, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    name: "",
    price: 0,
    stock: 0,
    image: null,
    category_id: "",
    product_detail_id: "",
  });

  const [categories, setCategories] = useState([]);
  const [details, setDetails] = useState([]);

  useEffect(() => {
    productApi
      .getCategoriesAndDetails()
      .then((res) => {
        setCategories(res.data.categories);
        setDetails(res.data.details);
      })
      .catch((err) =>
        console.error("Error fetching categories and details:", err)
      );
  }, []);

  useEffect(() => {
    if (productToEdit) {
      setFormData({
        name: productToEdit.name,
        price: productToEdit.price,
        stock: productToEdit.stock,
        image: null, // no cargamos imagen existente
        category_id: productToEdit.category_id || "",
        product_detail_id: productToEdit.product_detail_id || "",
      });
    }
  }, [productToEdit]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setFormData({ ...formData, image: files[0] });
    } else {
      setFormData({
        ...formData,
        [name]: name === "price" || name === "stock" ? Number(value) : value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("name", formData.name);
    data.append("price", formData.price);
    data.append("stock", formData.stock);
    if (formData.image) data.append("image", formData.image);
    data.append("category_id", formData.category_id);
    data.append("product_detail_id", formData.product_detail_id);

    try {
      if (productToEdit) {
        await productApi.update(productToEdit.id, data);
        toast.success("Producto actualizado correctamente");
      } else {
        await productApi.create(data);
        toast.success("Producto creado correctamente");
      }
      onSave();
    } catch (error) {
      toast.error("Error guardando producto");
      console.error("Error guardando producto:", error);
    }
  };

  return (
    <Dialog open={true} onClose={onCancel} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
          <Dialog.Title className="text-lg font-bold mb-4">
            {productToEdit ? "Editar Producto" : "Crear Producto"}
          </Dialog.Title>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Nombre
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500"
              />
            </div>


            <div>
              <label className="block text-sm font-medium text-gray-700">
                Precio
              </label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                min="0"
                step="0.01"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500"
              />
            </div>


            <div>
              <label className="block text-sm font-medium text-gray-700">
                Stock
              </label>
              <input
                type="number"
                name="stock"
                value={formData.stock}
                onChange={handleChange}
                min="0"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500"
              />
            </div>


            <div>
              <label className="block text-sm font-medium text-gray-700">
                Imagen
              </label>
              <input
                type="file"
                name="image"
                accept="image/*"
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500"
              />
            </div>


            <div>
              <label className="block text-sm font-medium text-gray-700">
                Categoría
              </label>
              <select
                name="category_id"
                value={formData.category_id}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500"
              >
                <option value="">Seleccione una categoría</option>
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Detalle
              </label>
              <select
                name="product_detail_id"
                value={formData.product_detail_id}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500"
              >
                <option value="">Seleccione un detalle</option>
                {details.map((detail) => (
                  <option key={detail.id} value={detail.id}>
                    {detail.detail}{" "}
                    {detail.pattern ? `(${detail.pattern})` : ""}
                  </option>
                ))}
              </select>
            </div>

            <div className="mt-6 flex justify-end gap-3">
              <button
                type="button"
                onClick={onCancel}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-sky-600 text-white rounded-md hover:bg-sky-700"
              >
                Guardar
              </button>
            </div>
          </form>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default ProductForm;
