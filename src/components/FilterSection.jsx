import React from "react";
import { useFilterContext } from "../context/FilterContext";

const FilterSection = () => {
  const {
    all_products,
    filter: { text, category },
    handleSrcFilter,
  } = useFilterContext();

  // unique data of each field

  const getUniqueData = (data, poperty) => {
    let newVal = data.map((curElem) => {
      return curElem[poperty];
    });
    return (newVal = ["All", ...new Set(newVal)]);
  };

  // We need unique data

  const categoryOnlyData = getUniqueData(all_products, "category");

  return (
    <div className=" container mx-auto mt-5 sm:flex justify-between items-center">
      <div className="category">
        {categoryOnlyData.map((curElem, index) => {
          return (
            <button
              className=" text-gray-400 gap-4 m-2 bg-slate-200 p-3 rounded-lg"
              key={index}
              type="button"
              name="category"
              onClick={handleSrcFilter}
              value={curElem}>
              {curElem}
            </button>
          );
        })}
      </div>

      <div className="inputsrc">
        <form onSubmit={(e) => e.preventDefault()} className=" my-3">
          <input
            className=" bg-slate-200 p-2 pr-12 rounded-lg"
            type="text"
            name="text"
            value={text}
            placeholder=" Search something..."
            onChange={handleSrcFilter}
          />
        </form>
      </div>
    </div>
  );
};

export default FilterSection;
