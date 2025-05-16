
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const authApi = axios.create({
  baseURL: API_URL,
});

export const registerUser = async (formData) => {
  return await authApi.post("/api/user/register", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
export const loginUser = async (credentials) => {
  return await authApi.post("/api/user/login", credentials, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
