import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Header = () => {
  return (
    <Disclosure as="nav" className="bg-amber-400">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              <div className="flex-shrink-0 font-bold text-white text-xl">
                MiMarca
              </div>
              <div className="hidden md:flex space-x-8">
                <a href="/" className="text-white hover:text-amber-200">Inicio</a>
                <a href="/productos" className="text-white hover:text-amber-200">Productos</a>
                <a href="/contacto" className="text-white hover:text-amber-200">Contacto</a>
              </div>
              <div className="md:hidden">
                <Disclosure.Button className="text-white hover:text-amber-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  {open ? (
                    <XMarkIcon className="h-6 w-6" />
                  ) : (
                    <Bars3Icon className="h-6 w-6" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden bg-amber-400 px-2 pt-2 pb-3 space-y-1">
            <Disclosure.Button as="a" href="/" className="block px-3 py-2 rounded-md text-white hover:bg-amber-300">
              Inicio
            </Disclosure.Button>
            <Disclosure.Button as="a" href="/productos" className="block px-3 py-2 rounded-md text-white hover:bg-amber-300">
              Productos
            </Disclosure.Button>
            <Disclosure.Button as="a" href="/contacto" className="block px-3 py-2 rounded-md text-white hover:bg-amber-300">
              Contacto
            </Disclosure.Button>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Header;
