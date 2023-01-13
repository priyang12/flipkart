import { RemoveButton } from "./RemoveButton";
import React from "react";
import { clsx } from "clsx";
import { useSearchParams } from "react-router-dom";
import { productsInterface } from "../../../data";
import { useFilterSelect } from "../../Hooks/useFilterSelect";

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
type ReactInput = React.ComponentPropsWithoutRef<"input">;
type Gender = productsInterface["gender"];

function FilterMenu({ children }: React.ComponentPropsWithoutRef<"div">) {
  const [Search, setSearch] = useSearchParams();
  const params = new URLSearchParams(Search);
  const Brand = params.get("brand");
  const Sizes = params.get("size");
  const Gender = params.get("gender");

  const {
    Selected: SelectedSize,
    setSelected: setSelectedSize,
    onKeyDown: onKeyDownSize,
    onChangeSize,
  } = useFilterSelect(Sizes as string);

  const {
    Selected: SelectedBrands,
    setSelected: setSelectedBrands,
    onKeyDown: onKeyDownBrands,
    onChangeSize: onChangeSizeBrands,
  } = useFilterSelect(Brand as string);

  const [SelectedGender, setSelectedGender] = React.useState<Gender | "">(
    Gender ? (Gender as "") : ""
  );

  const onChangeGender: ReactInput["onChange"] = (event) => {
    setSelectedGender(event.target.value as productsInterface["gender"]);
  };

  const SetFilter = () => {
    const query = new URLSearchParams();
    if (SelectedSize.size > 0)
      query.append("size", [...SelectedSize].join(","));
    if (SelectedBrands.size > 0)
      query.append("brand", [...SelectedBrands].join(","));
    if (SelectedGender) query.append("gender", SelectedGender);
    if (query.toString()) setSearch(query.toString());
  };

  const RemoveFromSizes = (size: string) => {
    const NewSizes = Sizes?.split(",").filter((x) => x !== size) as string[];
    if (NewSizes.length === 0) {
      Search.delete("size");
    } else {
      Search.set("size", NewSizes.join(","));
    }
    setSelectedSize(new Set(NewSizes));
    setSearch(Search);
  };

  const RemoveFromBrands = (brand: string) => {
    const NewBrands = Brand?.split(",").filter((x) => x !== brand) as string[];
    if (NewBrands.length === 0) {
      setSelectedBrands(new Set(NewBrands));
      Search.delete("brand");
    } else {
      Search.set("brand", NewBrands.join(","));
    }
    setSelectedBrands(new Set(NewBrands));
    setSearch(Search);
  };

  const RemoveFromGender = () => {
    setSelectedGender("");
    Search.delete("gender");
    setSearch(Search);
  };

  const ClearAll = () => {
    setSelectedSize(new Set());
    setSelectedBrands(new Set());
    setSelectedGender("");
    if (Search.has("Page")) {
      setSearch(`Page=${Search.get("Page")?.toString()}`);
    } else setSearch("");
  };

  return (
    <div className="sm:w-1/3 bg-base-200 pb-sm rounded-md pt-5">
      <h1 className="text-3xl text-center pb-5">Filters</h1>
      <div className="flex gap-1 mb-sm mx-sm flex-wrap">
        {Sizes?.split(",").map((item) => (
          <RemoveButton RemoveFn={RemoveFromSizes} item={item} key={item} />
        ))}
        {Brand?.split(",").map((item) => (
          <RemoveButton RemoveFn={RemoveFromBrands} item={item} key={item} />
        ))}
        {Gender ? (
          <RemoveButton RemoveFn={RemoveFromGender} item={Gender} />
        ) : null}
      </div>
      <div className="flex flex-col lg:flex-row w-1/2 gap-5 mx-auto justify-evenly">
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
      <div className="divider"></div>
      <div>
        <div>
          <form
            className="p-sm"
            onReset={(e) => {
              setSelectedSize(new Set());
              Search.delete("size");
              setSearch(Search.toString());
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
                    onKeyDown={onKeyDownSize}
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
              Search.delete("gender");
              setSearch(Search.toString());
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
              Search.delete("brand");
              setSearch(Search);
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
                    onChange={onChangeSizeBrands}
                    onKeyDown={onKeyDownBrands}
                  />
                  <span className="label-text">{item.toUpperCase()}</span>
                </label>
              </div>
            ))}
          </form>
        </div>
        <div className="flex justify-center">
          <input
            type="submit"
            value="Apply Filter"
            className="btn"
            onClick={() => {
              SetFilter();
              const Id = document.getElementById("Products");
              window.scrollTo({
                top: Id?.offsetTop || 0,
                behavior: "smooth",
              });
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default FilterMenu;
