import { SortProductPrize } from "../sort";
import { products } from "../../../data";
import { it, expect } from "vitest";

it("should sort products by originalPrice in ascending order", () => {
  const sortedProducts = SortProductPrize("LowToHigh", products.slice(0, 4));
  expect(sortedProducts.map((p) => p.originalPrice)).toEqual([
    1500, 2500, 3500, 4500,
  ]);
});

it("should sort products by originalPrice in descending order", () => {
  const sortedProducts = SortProductPrize("HighToLow", products.slice(0, 4));
  expect(sortedProducts.map((p) => p.originalPrice)).toEqual([
    4500, 3500, 2500, 1500,
  ]);
});
