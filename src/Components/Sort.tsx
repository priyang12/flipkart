import React from "react";
import { clsx } from "clsx";
import { useSearchParams } from "react-router-dom";

function Sort({
  SortBy,
  setSortBy,
}: {
  SortBy: "LowToHigh" | "HighToLow";
  setSortBy: React.Dispatch<React.SetStateAction<"LowToHigh" | "HighToLow">>;
}) {
  const [search, setSearch] = useSearchParams();

  const LowToHigh: React.ComponentPropsWithoutRef<"button">["onClick"] = (
    e
  ) => {
    if (search.has("Page")) search.delete("Page");
    setSortBy("LowToHigh");
    setSearch(search);
  };
  const HighToLow: React.ComponentPropsWithoutRef<"button">["onClick"] = (
    e
  ) => {
    if (search.has("Page")) search.delete("Page");
    setSortBy("HighToLow");
    setSearch(search);
  };
  return (
    <div>
      <div className="flex w-full py-5">
        <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">
          <button
            className={clsx(
              "btn",
              SortBy === "LowToHigh" ? "btn-ghost" : "btn-outline"
            )}
            onClick={LowToHigh}
          >
            Low To High
          </button>
        </div>
        <div className="divider divider-horizontal"></div>
        <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">
          <button
            className={clsx(
              "btn",
              SortBy === "HighToLow" ? "btn-ghost" : "btn-outline"
            )}
            onClick={HighToLow}
          >
            High To Low
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sort;
