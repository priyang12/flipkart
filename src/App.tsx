import Navbar from "./Components/Navbar";
import Products from "./Components/Products";
import ProductData from "../data.json";
import { productsInterface } from "../data";
import "./App.css";

function App() {
  return (
    <div className="Ap">
      <Navbar />
      <div className="flex my-md">
        <Products ProductsData={ProductData.products as productsInterface[]} />
      </div>
    </div>
  );
}

export default App;
