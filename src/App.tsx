import * as React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Products from "./Components/Products";
import ProductData from "../data.json";
import Sort from "./Components/Sort";
import FilterMenu from "./Components/FilterMenu";
import { SortProductPrize } from "./utils/sort";
import { productsInterface } from "../data";
import "./App.css";
import { Filter } from "./utils/Filter";

const ProductsName = "Clothing And Accessories";

function App() {
  const { search } = useLocation();

  const FilteredProducts = Filter(
    search.substring(1),
    ProductData.products as productsInterface[]
  );

  const [SortBy, setSortBy] = React.useState<"LowToHigh" | "HighToLow">(
    "LowToHigh"
  );

  const SortedProducts = SortProductPrize(
    SortBy,
    FilteredProducts as productsInterface[]
  );

  return (
    <>
      <Navbar />
      <div className="flex my-sm mx-sm gap-5">
        <FilterMenu />
        <div className="bg-base-300 py-5 w-full">
          <h1 className="md:mx-xl text-2xl pb-5">{ProductsName}</h1>
          <Sort SortBy={SortBy} setSortBy={setSortBy} />
          <Products ProductsData={SortedProducts.slice(0, 6)} />
        </div>
      </div>
    </>
  );
}

export default App;
