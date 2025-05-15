import axios from "axios";

// La URL del backend viene de .env (ej: http://localhost:3000)
const API_URL = import.meta.env.VITE_BACKEND_URL;

// Configuración de axios
const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Funciones para productos
export const productApi = {
  getAll: async () => {
    return await api.get("/api/products"); // Ajusta la ruta según tu backend
  },
  getById: async (id) => {
    return await api.get(`/api/products/${id}`);
  },
  create: async (productData) => {
    return await api.post("/api/products", productData);
  },
  update: async (id, productData) => {
    return await api.put(`/api/products/${id}`, productData);
  },
  delete: async (id) => {
    return await api.delete(`/api/products/${id}`);
  },
};