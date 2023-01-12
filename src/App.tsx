import * as React from "react";
import Navbar from "./Components/Navbar";
import Products from "./Components/Products";
import ProductData from "../data.json";
import Sort from "./Components/Sort";
import Filter from "./Components/Filter";
import { SortProductPrize } from "./utils/sort";
import { productsInterface } from "../data";
import "./App.css";

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
  const [SortBy, setSortBy] = React.useState<"LowToHigh" | "HighToLow">(
    "LowToHigh"
  );

  const SortedProducts = SortProductPrize(
    SortBy,
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
        <div className="bg-base-300 py-5 w-full">
          <h1 className="md:mx-xl text-2xl pb-5">{ProductsName}</h1>
          <Sort SortBy={SortBy} setSortBy={setSortBy} />
          <Products ProductsData={SortedProducts.slice(0, 6)} />
        </div>
      </div>
    </div>
  );
}

export default App;
