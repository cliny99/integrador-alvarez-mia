import { BiLineChart } from "react-icons/bi";
import { CgPlayListSearch } from "react-icons/cg";

const Home = () => {
  return (
    <>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4" >
          <div className="p-4 bg-light2 shadow-xl rounded flex items-center gap-2">
            <BiLineChart />
            <p>Número de productos:</p>
          </div>
          <div className="p-4 bg-light2 shadow-xl rounded flex items-center gap-2">
            <CgPlayListSearch />
            <p>Buscar un producto: </p><input type="search" placeholder=" Ej: Vincha" className="focus:outline-none"/>
            </div>
        </div>
      </>
  );
};


export default Home;