import { Filter } from "../Filter";
import { products } from "../../../data";
import { it, expect } from "vitest";

it("should filter products by brand and size", () => {
  const query = "brand=Versace&size=s";
  const filteredProducts = Filter(query, products);
  expect(filteredProducts).toEqual([
    {
      brand: "Versace",
      name: "WOOLEN CAP Cap",
      discountPercentage: 20,
      originalPrice: 1500,
      productImageUrl:
        "https://rukminim1.flixcart.com/image/800/960/kgsb1jk0/cap/h/y/g/free-stylish-black-balkalova-cap-fashlook-original-imafwy64umkfsefu.jpeg?q=50",
      sizes: ["s"],
      gender: "male",
      assured: false,
      category: "ele",
      rating: 5,
    },
    {
      brand: "Versace",
      name: "3/4th Sleeve Solid Women Jacket",
      discountPercentage: 20,
      originalPrice: 6500,
      productImageUrl:
        "https://rukminim1.flixcart.com/image/762/914/jusp3m80/jacket/z/3/t/s-mnt-4061-montrez-original-imafftft6djq2dmd.jpeg?q=50",
      sizes: ["s", "sm", "xl"],
      gender: "unisex",
      assured: false,
      category: "ele",
      rating: 5,
    },
  ]);
});

it("More Brands and Sizes", () => {
  const query = "brand=Versace,Louis Vuitton&size=s,l";
  const filteredProducts = Filter(query, products);
  expect(filteredProducts).toEqual([
    {
      brand: "Versace",
      name: "WOOLEN CAP Cap",
      discountPercentage: 20,
      originalPrice: 1500,
      productImageUrl:
        "https://rukminim1.flixcart.com/image/800/960/kgsb1jk0/cap/h/y/g/free-stylish-black-balkalova-cap-fashlook-original-imafwy64umkfsefu.jpeg?q=50",
      sizes: ["s"],
      gender: "male",
      assured: false,
      category: "ele",
      rating: 5,
    },
    {
      brand: "Louis Vuitton",
      name: "Solid Cap With Neck Warmer Cap  (Pack of 2)",
      discountPercentage: 20,
      originalPrice: 2500,
      productImageUrl:
        "https://rukminim1.flixcart.com/image/762/914/ki6bgcw0-0/cap/4/t/d/free-black-men-cap-with-neck-scarf-amormente-original-imafyf2ugjtcaf7g.jpeg?q=50",
      sizes: ["l"],
      gender: "male",
      assured: false,
      category: "ele",
      rating: 5,
    },
    {
      brand: "Versace",
      name: "3/4th Sleeve Solid Women Jacket",
      discountPercentage: 20,
      originalPrice: 6500,
      productImageUrl:
        "https://rukminim1.flixcart.com/image/762/914/jusp3m80/jacket/z/3/t/s-mnt-4061-montrez-original-imafftft6djq2dmd.jpeg?q=50",
      sizes: ["s", "sm", "xl"],
      gender: "unisex",
      assured: false,
      category: "ele",
      rating: 5,
    },
  ]);
});
