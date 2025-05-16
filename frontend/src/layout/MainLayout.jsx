import { Outlet, Link } from "react-router-dom";
import { BsHouseHeartFill } from "react-icons/bs";

const MainLayout = () => {
  return (
    <div className="flex h-screen bg-light">
      <aside className="w-64 bg-light2 shadow-md p-4">
        <h2 className="text-2xl font-bold mb-6 text-light">Mi Inventario</h2>
        <nav className="space-y-4">
          <Link to="/products" className="block text-gray-700 hover:text-light">Productos</Link>
          <Link to="/" className="block text-gray-700 hover:text-light">Ajustes</Link>
          <Link to="/" className="block text-gray-700 hover:text-light">Volver al inicio</Link>
          <Link to="/" className="block text-gray-700 hover:text-light">Salir</Link>
        </nav>
      </aside>

      <div className="flex-1 flex flex-col">
        <header className="bg-white shadow p-4">
          <div className="flex items-center gap-2 text-light2">
            <BsHouseHeartFill/>
            <h1 className="text-xl font-semibold text-light2">Bienvenido!</h1>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto p-6">
          <Outlet /> {/* Aquí se renderiza la página actual */}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
