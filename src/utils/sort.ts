import { productsInterface } from "../../data";

export const SortProductPrize = (
  sortby: "LowToHigh" | "HighToLow",
  Products: productsInterface[]
) => {
  // Sort the products by price in ascending or descending order
  Products.sort((a, b) => {
    if (sortby === "LowToHigh") {
      return a.originalPrice - b.originalPrice;
    } else {
      return b.originalPrice - a.originalPrice;
    }
  });
  return Products;
};
