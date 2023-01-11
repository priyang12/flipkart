import Navbar from "./Components/Navbar";
import Products from "./Components/Products";
import ProductData from "../data.json";
import { productsInterface } from "../data";
import Filter from "./Components/Filter";
import "./App.css";
import { SortProductPrize } from "./utils/sort";

const ProductsName = "Clothing And Accessories";
const SizesList: productsInterface["sizes"] = ["s", "sm", "m", "l", "xl"];
const GenderList: productsInterface["gender"][] = ["female", "male", "unisex"];
const BrandsList: productsInterface["brand"][] = [
  "Helmont",
  "Louis Vuitton",
  "Metro Fashion",
  "Mokshi",
  "POLO",
  "Prada",
  "Seven Rocks",
  "Smartees",
  "Tripr",
  "Versace",
  "Zara",
];

function App() {
  const SortedProducts = SortProductPrize(
    "LowToHigh",
    ProductData.products as productsInterface[]
  );

  return (
    <div className="">
      <Navbar />
      <div className="flex my-sm mx-sm gap-5">
        <Filter
          Sizes={SizesList}
          GenderList={GenderList}
          BrandsList={BrandsList}
        />
        <div className="bg-base-300 py-5">
          <h1 className="md:mx-xl text-2xl pb-5">{ProductsName}</h1>
          <Products ProductsData={SortedProducts.slice(0, 6)} />
        </div>
      </div>
    </div>
  );
}

export default App;
