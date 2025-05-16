import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import MainLayout from "../layout/MainLayout";
import Products from "../pages/Products"


const AppRouter = () => {
  return (
    <Routes>
      {/* Rutas dentro del dashboard envueltas en MainLayout */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="products" element={<Products />} />
        <Route path="users" element={<div>Usuarios</div>} />
      </Route>
    </Routes>
  );
};

export default AppRouter;