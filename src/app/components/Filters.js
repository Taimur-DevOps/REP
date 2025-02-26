"use client";

import React from "react";
import Button from "./Button";
import { HiChevronUpDown } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";
import FilterDropdown from "./FilterDropdown";

const Filters = () => {
  return (
    <>
      <form className="lg:container mx-auto py-7 lg:px-0 px-5">
        <div className="flex flex-col gap-3">
          <div className="flex lg:flex-row md:flex-row flex-col lg:items-center gap-2">
            <label className="lg:w-[73%] md:w-[90%] flex items-center gap-2 border border-[#d1d1d1] rounded-[4px] py-[6px] px-3">
              <CiSearch className="text-[#a1a7a8]" />
              <input
                placeholder="Enter Keyword..."
                className="placeholder:!text-[#a1a7a8] !h-auto"
              />
            </label>
            <div className="lg:w-[15%]">
              <FilterDropdown />
            </div>
            <div className="lg:w-[11%] lg:block md:block hidden">
              {" "}
              <Button text="Search" variant="primary" />
            </div>
          </div>
          <div className="grid lg:grid-cols-4 md:grid-cols-4 grid-cols-2 gap-2">
            <FilterDropdown />
            <FilterDropdown />
            <FilterDropdown />
            <FilterDropdown />
          </div>
          <div className="grid lg:grid-cols-4 md:grid-cols-4 grid-cols-2 gap-2">
            <FilterDropdown />
            <FilterDropdown />
            <FilterDropdown />
            <FilterDropdown />
          </div>
          <div className="lg:hidden  md:hidden grid">
            <Button text="Search" variant="primary" />
          </div>
        </div>
      </form>
    </>
  );
};

export default Filters;
