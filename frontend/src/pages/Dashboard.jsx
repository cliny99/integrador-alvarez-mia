

const Dashboard = () => {
  return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 bg-white shadow rounded">📊 Estadísticas</div>
        <div className="p-4 bg-white shadow rounded">👥 Usuarios activos</div>
      </div>
  );
};

export default Dashboard;