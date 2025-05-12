import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/dashboard";
import MainLayout from "../layout/MainLayout";

const AppRouter = () => {
  return (
    <Routes>
      {/* Rutas dentro del dashboard envueltas en MainLayout */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Dashboard />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;