import { clsx } from "clsx";
import React from "react";

function Sort({
  SortBy,
  setSortBy,
}: {
  SortBy: "LowToHigh" | "HighToLow";
  setSortBy: React.Dispatch<React.SetStateAction<"LowToHigh" | "HighToLow">>;
}) {
  return (
    <div>
      <div className="flex w-full py-5">
        <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">
          <button
            className={clsx(
              "btn",
              SortBy === "LowToHigh" ? "btn-ghost" : "btn-outline"
            )}
            onClick={(e) => setSortBy("LowToHigh")}
          >
            Low To High
          </button>
        </div>
        <div className="divider divider-horizontal">OR</div>
        <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">
          <button
            className={clsx(
              "btn",
              SortBy === "HighToLow" ? "btn-ghost" : "btn-outline"
            )}
            onClick={(e) => setSortBy("HighToLow")}
          >
            High To Low
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sort;
