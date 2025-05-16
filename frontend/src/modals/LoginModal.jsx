import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { loginUser } from "../api/authApi"; // ajusta la ruta si hace falta
import { toast } from "react-toastify";

const LoginModal = ({ isOpen, closeModal, openRegisterModal }) => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
       await loginUser(formData);
      window.location.href = "/";
        toast.success("Inicio de sesión exitoso.");
      closeModal();
    } catch (err) {
      console.error("Error en login:", err);
      toast.error("Error en el inicio de sesión. Por favor, intenta nuevamente.");
    }
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={() => {}}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-pink-100 border border-pink-200 p-8 text-left align-middle shadow-xl transition-all relative">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-xl"
              >
                &times;
              </button>

              <Dialog.Title
                as="h2"
                className="text-2xl font-bold text-gray-800 text-center"
              >
                Inicio de sesión
              </Dialog.Title>

              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm text-gray-600 mb-1">
                    Correo o número telefónico
                  </label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-light2"
                  />
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm text-gray-600 mb-1">
                    Contraseña
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    required
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-light2"
                  />
                </div>

                {error && (
                  <p className="text-red-600 text-sm text-center">{error}</p>
                )}

                <button
                  type="submit"
                  className="w-full bg-reddish text-white hover:text-black py-2 rounded-md hover:bg-light2 transition"
                >
                  Entrar
                </button>
              </form>

              <div className="mt-4 text-center text-sm text-gray-500">
                ¿No tenés cuenta?{" "}
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    closeModal();
                    openRegisterModal();
                  }}
                  className="text-reddish font-medium hover:underline cursor-pointer"
                >
                  Registrate acá
                </a>
              </div>
            </Dialog.Panel>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
};

export default LoginModal;
