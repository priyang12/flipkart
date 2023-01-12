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
    const brands = filters.brand.split(",");
    filteredProducts = filteredProducts.filter((product) =>
      brands.some((brand) => product.brand === brand)
    );
  }

  if ("size" in filters) {
    const sizes = filters.size.split(",");
    filteredProducts = filteredProducts.filter((product) =>
      sizes.some((size) => product.sizes.includes(size as any))
    );
  }

  if ("gender" in filters) {
    const gender = filters.gender;
    filteredProducts = filteredProducts.filter(
      (product) => product.gender === gender
    );
  }

  return filteredProducts;
};
