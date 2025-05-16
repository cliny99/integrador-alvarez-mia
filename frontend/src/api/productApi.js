import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

// Configuración de axios sin Content-Type por defecto
const api = axios.create({
  baseURL: API_URL,
});


export const productApi = {
  getAll: async () => {
    return await api.get("/api/products");
  },
  getById: async (id) => {
    return await api.get(`/api/products/${id}`);
  },
  create: async (productData) => {
 
    return await api.post("/api/products", productData);
  },
  update: async (id, productData) => {
    return await api.put(`/api/products/${id}`, productData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
  delete: async (id) => {
    return await api.delete(`/api/products/${id}`);
  },
  getCategoriesAndDetails: async () => {
    return await api.get("/api/products/categories-and-details");
  },
};
