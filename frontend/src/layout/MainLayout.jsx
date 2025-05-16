import { Outlet, Link } from "react-router-dom";
import { BsHouseHeartFill } from "react-icons/bs";

const MainLayout = () => {
  return (
    <div className="flex h-screen bg-gradient-to-r from-[#fef9f7] to-[#f8f2f0] text-gray-700">
      {/* Sidebar */}
      <aside className="w-64 bg-white/70 backdrop-blur-md shadow-md border-r border-gray-200 p-6">
        <h2 className="text-2xl font-semibold mb-8 text-black tracking-tight">Mi Inventario</h2>
        <nav className="space-y-3">
          <div className="block shadow rounded-l hover:bg-light2 transition-colors">
          <Link to="/products" className="block hover:text-white transition-colors">Productos</Link>
          </div>
          <div className="block shadow rounded-l hover:bg-light2 transition-colors">
          <Link to="/" className="block hover:text-white transition-colors">Ajustes</Link>
          </div>
          <div className="block shadow rounded-l hover:bg-light2 transition-colors">
          <Link to="/" className="block hover:text-white transition-colors">Volver al inicio</Link>
          </div>
          <div className="block shadow rounded-l hover:bg-light2 transition-colors">
          <Link to="/" className="block hover:text-white transition-colors">Salir</Link>
          </div>
        </nav>
      </aside>

      {/* Content area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 p-4 shadow-sm">
          <div className="flex items-center gap-2 text-[#b67352]">
            <BsHouseHeartFill className="text-xl" />
            <h1 className="text-lg font-medium">¡Bienvenido!</h1>
          </div>
        </header>

        {/* Main content */}
        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
