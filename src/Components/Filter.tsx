import React from "react";
import { clsx } from "clsx";
import { productsInterface } from "../../data";

function Filter({
  Sizes,
  GenderList,
  BrandsList,
}: {
  Sizes: productsInterface["sizes"];
  GenderList: productsInterface["gender"][];
  BrandsList: string[];
} & React.ComponentPropsWithoutRef<"div">) {
  return (
    <div className="w-1/3 bg-base-200 pb-sm rounded-md pt-5">
      <div className="">
        <h1 className="text-xl text-center pb-5">Filters</h1>
        <div className="flex justify-center">
          <input type="submit" value="Apply Filter" className="btn" />
        </div>
      </div>
      <div className="divider"></div>
      <div>
        <div>
          <form
            className="p-sm"
            onReset={(e) => {
              // e.preventDefault();
            }}
          >
            <div className="flex justify-between items-center">
              <h2>Sizes:</h2>

              <input type="reset" value="Reset" className="link" />
            </div>
            {Sizes.map((item) => (
              <div className="form-control">
                <label className="label cursor-pointer" key={item}>
                  <input type="checkbox" className="checkbox" />
                  <span className="label-text">{item?.toUpperCase()}</span>
                </label>
              </div>
            ))}
          </form>
          <div className="divider"></div>
          <form className="p-sm">
            <div className="flex justify-between items-center">
              <h2>Genders:</h2>
              <input type="reset" value="Reset" className="btn p-2" />
            </div>
            {GenderList.map((item) => (
              <div className="form-control" key={item}>
                <label className="label cursor-pointer">
                  <input
                    type="radio"
                    name="radio-10"
                    className={clsx(
                      "radio",
                      item === "male" ? "checked:bg-blue-500" : null,
                      item === "female" ? "checked:bg-red-500" : null,
                      item === "unisex" ? "checked:bg-purple-500" : null
                    )}
                  />
                  <span className="label-text">{item.toUpperCase()}</span>
                </label>
              </div>
            ))}
          </form>
          <div className="divider"></div>
          <form className="p-sm">
            <div className="flex justify-between items-center">
              <h2>Brands:</h2>
              <input type="reset" value="Reset" className="btn p-2" />
            </div>
            {BrandsList.map((item) => (
              <div className="form-control" key={item}>
                <label className="label cursor-pointer">
                  <input type="checkbox" className="checkbox" />
                  <span className="label-text">{item.toUpperCase()}</span>
                </label>
              </div>
            ))}
          </form>
        </div>
        <div className="flex justify-center">
          <input type="submit" value="Apply Filter" className="btn" />
        </div>
      </div>
    </div>
  );
}

export default Filter;
