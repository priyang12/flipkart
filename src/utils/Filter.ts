import { productsInterface } from "../../data";

export const Filter = (query: string, Products: productsInterface[]) => {
  // Split the query string into an array
  const queryArray = query.split("&");

  // Create an empty object to store the filters
  const filters: { [key: string]: string } = {};

  // Loop through the query array
  queryArray.forEach((q) => {
    // Split the current item in the array by "="
    const [key, value] = q.split("=");
    // Add the key and value to the filters object
    filters[key] = value;
  });
  // filter the product based on brand and size
  let filteredProducts = Products;
  if ("brand" in filters) {
    filteredProducts = filteredProducts.filter(
      (product) => product.brand === filters.brand
    );
  }
  if ("size" in filters) {
    filteredProducts = filteredProducts.filter((product) =>
      product.sizes.includes(filters.size as any)
    );
  }
  return filteredProducts;
};
