import * as React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Products from "./Components/Products";
import ProductData from "../data.json";
import Sort from "./Components/Sort";
import FilterMenu from "./Components/FilterMenu";
import Pagination from "./Components/Pagination";
import { SortProductPrize } from "./utils/sort";
import { productsInterface } from "../data";
import { Filter } from "./utils/Filter";
import ScrollToTop from "./Components/ScrollToTop";
import "./App.css";
import MetaApp from "./Meta/MetaApp";

const ProductsName = "Clothing And Accessories";
const PerPage = 9;

function App() {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const FilteredProducts = Filter(
    search.substring(1),
    ProductData.products as productsInterface[]
  );
  const TotalPages = Math.ceil(FilteredProducts.length / PerPage);
  const Page = params.get("Page") ? Number(params.get("Page")) : 1;
  const PageProducts = FilteredProducts.slice(
    PerPage * (Page - 1),
    Page * PerPage
  );

  const [SortBy, setSortBy] = React.useState<"LowToHigh" | "HighToLow">(
    "LowToHigh"
  );

  const SortedProducts = SortProductPrize(SortBy, PageProducts);
  console.log(TotalPages);

  return (
    <>
      <MetaApp
        title={ProductsName + " - Total Products : " + SortedProducts.length}
      />
      <Navbar />
      <div className="flex my-sm mx-sm gap-5">
        <FilterMenu />
        <div className="bg-base-300 py-5 w-full rounded-md relative">
          <h1 className="md:mx-xl text-2xl pb-5">{ProductsName}</h1>
          <Sort SortBy={SortBy} setSortBy={setSortBy} />
          <ScrollToTop ButtonShow={800} />
          <Products ProductsData={SortedProducts} id="Products" />

          {TotalPages !== 1 ? <Pagination TotalPages={TotalPages} /> : null}
        </div>
      </div>
    </>
  );
}

export default App;
