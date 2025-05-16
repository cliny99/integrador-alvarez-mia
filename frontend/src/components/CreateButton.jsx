import { FaPlus } from "react-icons/fa";
import { Button } from '@headlessui/react'

const CreateProductButton = ({ onClick }) => (
    <Button
      onClick={onClick}
      className="rounded bg-sky-600 px-4 py-2 text-sm text-white data-active:bg-sky-700 data-hover:bg-sky-500"
    ><FaPlus className="mr-2 flex gap-0 lg:hidden"  /> Crear Producto
    </Button>
  );

export default CreateProductButton;