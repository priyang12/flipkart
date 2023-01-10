import React from "react";
import type { productsInterface } from "../../data";

function ProductCard({ Item }: { Item: productsInterface }) {
  return (
    <div
      className="card hover:shadow-xl border-2 border-white border-solid transition-all ease-out duration-300"
      key={Item.name}
    >
      <figure className="px-10 cursor-pointer">
        <img
          src={Item.productImageUrl}
          alt="Shoes"
          className="rounded-xl h-80 w-full"
        />
      </figure>
      <div className="card-body py-5">
        <div className="text-gray-500 font-medium text-xl">{Item.brand}</div>
        <h2 className="truncate">{Item.name}</h2>
        <div className="flex flex-col md:flex-row items-center justify-start gap-5">
          <div className="font-medium text-black text-xl">
            ₹
            {Math.floor(
              Item.originalPrice -
                (Item.originalPrice * Item.discountPercentage) / 100
            )}
          </div>
          <div className="line-through text-gray-500">
            ₹{Item.originalPrice}
          </div>
          <div className="text-green-700 font-medium">
            {Item.discountPercentage}% Off
          </div>
        </div>
        <div className="flex">
          <span className="text-gray-500">Size: </span>
          <div className="">
            {Item.sizes.map((sizeItem, index) => (
              <>
                <span className="border-primary mx-1">
                  {sizeItem?.toUpperCase()}
                  {Item.sizes.length - 1 !== index ? <span>,</span> : null}
                </span>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Products({
  ProductsData,
}: {
  ProductsData: productsInterface[];
} & React.ComponentPropsWithoutRef<"div">) {
  if (!ProductsData) return null;
  return (
    <div className="md:mx-xl">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {ProductsData?.map((item) => (
          <ProductCard Item={item} />
        ))}
      </div>
    </div>
  );
}

export default Products;
