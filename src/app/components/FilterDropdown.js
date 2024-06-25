"use client";

import React from "react";

import { HiChevronUpDown } from "react-icons/hi2";

import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
  Transition,
} from "@headlessui/react";

import { useState } from "react";

const people = [
  { id: 1, name: "All Cities" },
  { id: 2, name: "Fort Lauderdale" },
  { id: 3, name: "Fort Myers" },
  { id: 4, name: "Miami" },
  { id: 5, name: "Tampa" },
];

const FilterDropdown = () => {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(people[1]);

  const filteredPeople =
    query === ""
      ? people
      : people.filter((person) => {
          return person.name.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <>
      <Combobox value={selected} onChange={(value) => setSelected(value)}>
        <div className="relative">
          <ComboboxInput
            className="w-full rounded-[4px] border border-[#d1d1d1] py-[9px] pr-8 pl-3 text-sm  !text-[#a1a7a8]"
            // displayValue={(person) => person?.name}
            placeholder="Select"
            onChange={(event) => setQuery(event.target.value)}
          />
          <ComboboxButton className="group absolute inset-y-0 right-0 px-2.5">
            <HiChevronUpDown className="size-4 fill-lightGray" />
          </ComboboxButton>
        </div>
        <Transition
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          afterLeave={() => setQuery("")}
        >
          <ComboboxOptions
            anchor="bottom"
            className="border border-[#d1d1d1] rounded-[4px] bg-white filterDropdown"
          >
            {filteredPeople.map((person) => (
              <ComboboxOption
                key={person.id}
                value={person}
                className="group flex cursor-pointer hover:!bg-[#00aeff1a] items-center gap-2 rounded-lg py-1.5 px-3 select-none"
              >
                <div className="text-sm text-lightBlack">{person.name}</div>
              </ComboboxOption>
            ))}
          </ComboboxOptions>
        </Transition>
      </Combobox>
    </>
  );
};

export default FilterDropdown;
