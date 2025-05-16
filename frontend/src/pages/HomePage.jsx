import { Tab } from "@headlessui/react";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const images = [
  { id: 1, src: "/images/descuentos.png", alt: "descuentos" },
  { id: 2, src: "/images/ofertas.png", alt: "ofertas" },
  { id: 3, src: "/images/destacados.png", alt: "destacados" },
];

const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/api/products")
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(console.error);
  }, []);

  // Auto-switch tab slider
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Header />

      <main className="px-4 md:px-8 lg:px-16">
        <div className="my-4 text-center">
          <p className="text-lg md:text-xl font-semibold text-amber-400">Un pedacito de nosotros en...</p>
        </div>

        <section className="max-w-5xl mx-auto">
          <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
            <Tab.Panels className="aspect-[16/9] overflow-hidden rounded-lg shadow-lg">
              {images.map((img) => (
                <Tab.Panel key={img.id}>
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover"
                  />
                </Tab.Panel>
              ))}
            </Tab.Panels>
            <Tab.List className="flex justify-center gap-3 mt-4">
              {images.map((_, idx) => (
                <Tab
                  key={idx}
                  className={({ selected }) =>
                    selected
                      ? "w-4 h-4 rounded-full bg-amber-300 focus:outline-none ring-2 ring-amber-500"
                      : "w-4 h-4 rounded-full bg-amber-200 hover:bg-amber-300 focus:outline-none"
                  }
                />
              ))}
            </Tab.List>
          </Tab.Group>
        </section>

        <p className="text-center font-bold py-3 text-2xl md:text-3xl lg:text-4xl tracking-widest text-amber-400 drop-shadow-md mt-8">
          DESTACADOS
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          {products.map(product => (
            <div
              key={product.id}
              className="relative rounded-2xl shadow-lg bg-gradient-to-br from-[#F6D8D4] to-[#f9b695] w-[45%] md:w-[20%] flex flex-col"
            >
              <img
                src={product.imageUrl || "/images/delantal-ejemplo.png"}
                alt={product.name}
                className="w-[90%] mx-auto pb-4 object-contain"
              />
              {product.discount && (
                <p className="absolute bottom-1/3 left-1/2 transform -translate-x-1/2 bg-[#BB614D] text-[#F6D8D4] font-bold px-2 rounded-t-md text-sm md:text-lg">
                  {product.discount}% OFF
                </p>
              )}
              <div className="bg-[#BB614D] rounded-b-lg relative py-4">
                <p className="text-[#F6D8D4] font-bold text-center text-lg md:text-xl">{product.name}</p>
                <p className="absolute top-[90%] left-[54%] md:top-[92%] md:left-[68%] bg-[#f9b695] text-[#BB614D] font-bold text-xl md:text-2xl px-3 rounded-lg shadow-lg drop-shadow-lg">
                  ${product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
};

export default HomePage;
