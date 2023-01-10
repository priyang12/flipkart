type s = "s" | "sm" | "m" | "l" | "xl";

export interface productsInterface {
  name: string;
  brand: string;
  productImageUrl: string;
  originalPrice: number;
  sizes: Partial<s[]>;
  gender: "male" | "female" | "unisex";
  category: string;
  discountPercentage: number;
  rating: number;
  assured: boolean;
}

export const products: productsInterface[] = [
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
    brand: "Prada",
    name: "Printed Men Hooded Neck Black T-Shirt",
    discountPercentage: 20,
    originalPrice: 4500,
    productImageUrl:
      "https://rukminim1.flixcart.com/image/762/914/kl2mljk0/t-shirt/a/3/k/4xl-tblhdfulmask-lion-tripr-original-imagy9tcx7q25wym.jpeg?q=50",
    sizes: ["s", "l", "xl"],
    gender: "unisex",
    assured: true,
    category: "ele",
    rating: 5,
  },
  {
    brand: "LouisVuitton",
    name: "Full Sleeve Solid Women Quilted Jacket",
    discountPercentage: 20,
    originalPrice: 3500,
    productImageUrl:
      "https://rukminim1.flixcart.com/image/762/914/kt39jm80/jacket/9/c/n/l-no-y-womens-winter-jacket-elanhood-original-imag6ggjtzec5zsw.jpeg?q=50",
    sizes: ["xl"],
    gender: "female",
    assured: true,
    category: "ele",
    rating: 5,
  },
  {
    brand: "Prada",
    name: "Full Sleeve Solid Women Sports Jacket",
    discountPercentage: 20,
    originalPrice: 7500,
    productImageUrl:
      "https://rukminim1.flixcart.com/image/762/914/kflftzk0/jacket/k/d/7/xl-girlswet-pink-christy-world-original-imafwyyczmpraphj.jpeg?q=50",
    sizes: ["s", "m"],
    gender: "female",
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
  {
    name: "Striped Men Hooded Neck Red, Black T-Shirt",
    productImageUrl:
      "https://rukminim1.flixcart.com/image/880/1056/kf1fo280hlty2aw-0/t-shirt/w/s/e/-original-imafdfvvr8hqdu65.jpeg?q=50",
    originalPrice: 269,
    sizes: ["s", "m", "l", "xl"],
    brand: "Helmont",
    gender: "male",
    assured: false,
    category: "sd",
    discountPercentage: 10,
    rating: 4,
  },
  {
    name: "Typography Men Round Neck Maroon, Black T-Shirt",
    productImageUrl:
      "https://rukminim1.flixcart.com/image/880/1056/kfoapow0-0/t-shirt/u/m/b/xl-nyc-maroon-smartees-original-imafw2gxu8brpkjx.jpeg?q=50",
    originalPrice: 216,
    sizes: ["l", "xl"],
    brand: "Smartees",
    gender: "male",
    assured: false,
    category: "sd",
    discountPercentage: 10,
    rating: 4,
  },
  {
    name: "Striped Men Polo Neck White, Dark Blue, Dark Green T-Shirt",
    productImageUrl:
      "https://rukminim1.flixcart.com/image/880/1056/kjkbv680-0/t-shirt/9/v/o/m-t285hs-as7whdngr-seven-rocks-original-imafz3wkfs8pevqc.jpeg?q=50",
    originalPrice: 248,
    sizes: ["s", "m", "l", "xl"],
    brand: "Seven Rocks",
    gender: "male",
    assured: false,
    category: "cloths",
    discountPercentage: 10,
    rating: 4,
  },
  {
    name: "Full Sleeve Printed Men Sweatshirt",
    productImageUrl:
      "https://rukminim1.flixcart.com/image/880/1056/kit6hzk0/sweatshirt/k/w/y/s-tmrwmhdfulsweat-orgl-tripr-original-imafyggumwwuxhg7.jpeg?q=50",
    originalPrice: 451,
    sizes: ["m", "xl", "l"],
    brand: "Tripr",
    gender: "male",
    assured: false,
    category: "cloths",
    discountPercentage: 10,
    rating: 4,
  },
  {
    name: "Women Printed Cotton Rayon Blend Ethnic Dress",
    productImageUrl:
      "https://rukminim1.flixcart.com/image/880/1056/k51cpe80/kurta/d/u/y/s-ku493ylo-mokshi-original-imafnta9sj4fjhwa.jpeg?q=50",
    originalPrice: 599,
    sizes: ["s", "m", "l", "xl"],
    brand: "Mokshi",
    gender: "female",
    assured: true,
    category: "cloths",
    discountPercentage: 10,
    rating: 4,
  },
  {
    name: "Women Printed Pure Cotton Straight Kurta",
    productImageUrl:
      "https://rukminim1.flixcart.com/image/880/1056/k5wse4w0/kurta/f/h/u/m-kr196d-metro-fashion-original-imafzhqx7tpgbgca.jpeg?q=50",
    originalPrice: 291,
    sizes: ["s", "m", "l"],
    brand: "Metro Fashion",
    gender: "female",
    assured: false,
    category: "cloths",
    discountPercentage: 10,
    rating: 4,
  },
  {
    name: "Shirt 1",
    originalPrice: 549,
    discountPercentage: 12.96,
    rating: 4.69,
    brand: "POLO",
    category: "clothware",
    productImageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/711SbGLL80L._UL1500_.jpg",
    assured: true,
    gender: "unisex",
    sizes: ["sm", "xl"],
  },
  {
    name: "Shirt 2",
    originalPrice: 699,
    discountPercentage: 20,
    rating: 4.69,
    brand: "Zara",
    category: "clothware",
    productImageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/711SbGLL80L._UL1500_.jpg",
    assured: true,
    gender: "unisex",
    sizes: ["sm"],
  },
  {
    name: "Shirt 3",
    originalPrice: 549,
    discountPercentage: 30,
    rating: 4.69,
    brand: "POLO",
    category: "clothware",
    productImageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/711SbGLL80L._UL1500_.jpg",
    assured: true,
    gender: "unisex",
    sizes: ["l", "xl"],
  },
  {
    name: "Casual",
    originalPrice: 999,
    discountPercentage: 40,
    rating: 4.69,
    brand: "Nency",
    category: "clothware",
    productImageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/711SbGLL80L._UL1500_.jpg",
    assured: false,
    gender: "unisex",
    sizes: ["sm", "xl"],
  },
  {
    name: "Formal",
    originalPrice: 1199,
    discountPercentage: 15,
    rating: 4.69,
    brand: "Apple",
    category: "clothware",
    productImageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/711SbGLL80L._UL1500_.jpg",
    assured: true,
    gender: "unisex",
    sizes: ["m", "l"],
  },
  {
    name: "Blue Denim",
    originalPrice: 1999,
    discountPercentage: 50,
    rating: 4.69,
    brand: "Apple",
    category: "clothware",
    productImageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/711SbGLL80L._UL1500_.jpg",
    assured: false,
    gender: "female",
    sizes: ["m", "xl"],
  },
];
