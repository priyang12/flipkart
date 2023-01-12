import React from "react";
import { clsx } from "clsx";
import { productsInterface } from "../../data";
import { useSearchParams } from "react-router-dom";

const SizesList: productsInterface["sizes"] = ["s", "sm", "m", "l", "xl"];
const GenderList: productsInterface["gender"][] = ["female", "male", "unisex"];
const BrandsList: productsInterface["brand"][] = [
  "Helmont",
  "Louis Vuitton",
  "Metro Fashion",
  "Mokshi",
  "POLO",
  "Prada",
  "Seven Rocks",
  "Smartees",
  "Tripr",
  "Versace",
  "Zara",
];

type Gender = productsInterface["gender"];

function FilterMenu({ children }: React.ComponentPropsWithoutRef<"div">) {
  const [Search, setSearch] = useSearchParams();
  const params = new URLSearchParams(Search);
  const Brand = params.get("brand");
  const Sizes = params.get("size");

  const [SelectedSize, setSelectedSize] = React.useState<Set<string>>(
    Sizes ? new Set(Sizes.split(",")) : new Set()
  );
  const [SelectedBrands, setSelectedBrands] = React.useState<Set<string>>(
    Brand ? new Set(Brand.split(",")) : new Set()
  );

  const [SelectedGender, setSelectedGender] = React.useState<Gender | "">(
    params.get("gender") ? (params.get("gender") as "") : ""
  );

  const onChangeSize: React.ComponentPropsWithoutRef<"input">["onChange"] = (
    event
  ) => {
    if (event.target.checked) {
      setSelectedSize(
        (currentVal) => new Set([...currentVal, event.target.value])
      );
    } else {
      setSelectedSize((currentVal) => {
        currentVal.delete(event.target.value);
        return new Set(currentVal);
      });
    }
  };

  const onChangeBrand: React.ComponentPropsWithoutRef<"input">["onChange"] = (
    event
  ) => {
    if (event.target.checked) {
      setSelectedBrands(
        (currentVal) => new Set([...currentVal, event.target.value])
      );
    } else {
      setSelectedBrands((currentVal) => {
        currentVal.delete(event.target.value);
        return new Set(currentVal);
      });
    }
  };

  const onChangeGender: React.ComponentPropsWithoutRef<"input">["onChange"] = (
    event
  ) => {
    setSelectedGender(event.target.value as productsInterface["gender"]);
  };
  console.log(SelectedGender);

  const SetFilter = () => {
    const query = new URLSearchParams();
    if (SelectedSize.size > 0)
      query.append("size", [...SelectedSize].join(","));
    if (SelectedBrands.size > 0)
      query.append("brand", [...SelectedBrands].join(","));
    if (SelectedGender) query.append("gender", SelectedGender);
    setSearch(query.toString());
  };

  const ClearAll = () => {
    setSelectedSize(new Set());
    setSelectedBrands(new Set());
    setSelectedGender("");
    setSearch("");
  };

  return (
    <div className="w-1/3 bg-base-200 pb-sm rounded-md pt-5">
      <div className="">
        <h1 className="text-3xl text-center pb-5">Filters</h1>
        <div className="flex justify-evenly">
          <input
            type="submit"
            value="Apply Filter"
            className="btn"
            onClick={SetFilter}
          />
          <button className="btn btn-active" onClick={ClearAll}>
            Clear All
          </button>
        </div>
      </div>
      <div className="divider"></div>
      <div>
        <div>
          <form
            className="p-sm"
            onReset={(e) => {
              setSelectedSize(new Set());
            }}
          >
            <div className="flex justify-between items-center">
              <h2>Sizes:</h2>
              <input type="reset" value="Clear All" className="link" />
            </div>
            {SizesList.map((item) => (
              <div className="form-control" key={item}>
                <label className="label cursor-pointer" key={item}>
                  <input
                    value={item}
                    checked={SelectedSize.has(item as string)}
                    type="checkbox"
                    className="checkbox"
                    onChange={onChangeSize}
                  />
                  <span className="label-text">{item?.toUpperCase()}</span>
                </label>
              </div>
            ))}
          </form>
          <div className="divider"></div>
          <form
            className="p-sm"
            onReset={(e) => {
              setSelectedGender("");
            }}
          >
            <div className="flex justify-between items-center">
              <h2>Genders:</h2>
              <input type="reset" value="Clear All" className="link" />
            </div>
            {GenderList.map((item) => (
              <div className="form-control" key={item}>
                <label className="label cursor-pointer" htmlFor={item}>
                  <input
                    id={item}
                    value={item}
                    type="radio"
                    name="radio-10"
                    checked={SelectedGender.includes(item)}
                    onChange={onChangeGender}
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
          <form
            className="p-sm"
            onReset={(e) => {
              setSelectedBrands(new Set());
            }}
          >
            <div className="flex justify-between items-center">
              <h2>Brands:</h2>
              <input type="reset" value="Clear All" className="link" />
            </div>
            {BrandsList.map((item) => (
              <div className="form-control" key={item}>
                <label className="label cursor-pointer">
                  <input
                    value={item}
                    type="checkbox"
                    checked={SelectedBrands.has(item)}
                    className="checkbox"
                    onChange={onChangeBrand}
                  />
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

export default FilterMenu;
