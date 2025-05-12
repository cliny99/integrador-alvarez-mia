
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <aside className="w-64 bg-white shadow-md p-4">
        <h2 className="text-2xl font-bold mb-6">Mi Dashboard</h2>
        <nav className="space-y-4">
          <a href="/" className="block text-gray-700 hover:text-blue-500">Inicio</a>
          <a href="/users" className="block text-gray-700 hover:text-blue-500">Usuarios</a>
          <a href="/settings" className="block text-gray-700 hover:text-blue-500">Ajustes</a>
        </nav>
      </aside>

      <div className="flex-1 flex flex-col">
        <header className="bg-white shadow p-4">
          <h1 className="text-xl font-semibold">Bienvenido</h1>
        </header>
        <main className="flex-1 overflow-y-auto p-6">
          <Outlet /> {/* Aquí se renderiza la página actual */}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;