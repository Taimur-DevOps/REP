"use client";

import React from "react";
import Button from "./Button";
import { HiChevronUpDown } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";
import FilterDropdown from "./FilterDropdown";

const Filters = () => {
  return (
    <>
      <form className="lg:container mx-auto py-7 lg:block hidden">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <label className="w-[72%] flex items-center gap-2 border border-[#d1d1d1] rounded-[4px] py-[6px] px-3">
              <CiSearch />
            <input placeholder="Enter Keyword..." className="placeholder:!text-[a1a7a8]" />
            </label>
            <div className="w-[15%]">
              <FilterDropdown />
            </div>
            <div className="w-[11%]">
              {" "}
              <Button text="Search" variant="primary" />
            </div>
          </div>
          <div className="grid grid-cols-4 gap-2">
            <FilterDropdown />
            <FilterDropdown />
            <FilterDropdown />
            <FilterDropdown />
          </div>
          <div className="grid grid-cols-4 gap-2">
            <FilterDropdown />
            <FilterDropdown />
            <FilterDropdown />
            <FilterDropdown />
          </div>
        </div>
      </form>
    </>
  );
};

export default Filters;
