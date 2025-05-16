import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { registerUser } from "../api/authApi";
import { toast } from "react-toastify";

const RegisterModal = ({ isOpen, closeModal, openLoginModal }) => {
  const [formData, setFormData] = useState({
    name: "",
    last_name: "",
    email: "",
    password: "",
    phone: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = new FormData();
      Object.keys(formData).forEach((key) => {
        data.append(key, formData[key]);
      });

      await registerUser(data);
      toast.success("Registro exitoso. Por favor, inicia sesión.");
      closeModal();
    } catch (error) {
      console.error("Error en el registro:", error);
      toast.error("Error en el registro. Por favor, intenta nuevamente.");
    }
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={() => {}}>
        <div className="fixed inset-0 flex items-center justify-center p-4 bg-black bg-opacity-30">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-pink-100 border border-pink-200 p-8 text-left align-middle shadow-xl transition-all relative">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-400 hover:text-black text-2xl font-bold"
              >
                &times;
              </button>

              <Dialog.Title
                as="h2"
                className="text-2xl font-bold text-center mb-6"
              >
                Registro
              </Dialog.Title>

              <form
                onSubmit={handleSubmit}
                encType="multipart/form-data"
                className="space-y-4"
              >
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Nombre"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                />
                <input
                  type="text"
                  name="last_name"
                  value={formData.last_name}
                  onChange={handleChange}
                  placeholder="Apellido"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Correo electrónico"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                />
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Contraseña"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                />
                <input
                  type="number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Número telefónico"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                />
                <input
                  type="file"
                  name="image"
                  onChange={handleChange}
                  accept="image/*"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                />
                <button
                  type="submit"
                  className="w-full bg-reddish text-white hover:text-black py-2 rounded-md hover:bg-light2 transition"
                >
                  Confirmar
                </button>
              </form>

              <p className="mt-4 text-center text-sm text-reddish">
                ¿Ya tenés una cuenta?{" "}
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    closeModal();
                    openLoginModal?.();
                  }}
                  className="text-reddish font-medium hover:underline cursor-pointer"
                >
                  Iniciá sesión acá
                </a>
              </p>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default RegisterModal;
