const Footer = () => (
    <footer className="bg-amber-400 text-white py-6 mt-12">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} MiMarca. Todos los derechos reservados.</p>
        <nav className="flex space-x-4 mt-4 md:mt-0">
          <a href="/privacidad" className="hover:underline">Política de Privacidad</a>
          <a href="/terminos" className="hover:underline">Términos y Condiciones</a>
        </nav>
      </div>
    </footer>
  );
  
  export default Footer;
  