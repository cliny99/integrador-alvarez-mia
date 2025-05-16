
import { FaPlus } from "react-icons/fa";


const CreateProductButton = ({ onClick }) => (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-6 bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-5 rounded-full shadow-lg transition-all duration-300"
    ><FaPlus className="mr-2 flex gap-0"  /> Crear Producto
    </button>
  );

export default CreateProductButton;