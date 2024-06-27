import React from "react";
import { CiStar } from "react-icons/ci";
import { LiaEditSolid } from "react-icons/lia";
import { RiDeleteBin7Line } from "react-icons/ri";
import { FaRegStar } from "react-icons/fa";

const TableListing = () => {
  return (
    <div class="relative overflow-x-auto shadow-md rounded-[4px] border border-gray-100">
      <table class="w-full text-sm text-left rtl:text-right text-gray-500  dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" class="px-6 py-3">
              Property ID
            </th>
            <th scope="col" class="px-6 py-3">
              House No
            </th>
            <th scope="col" class="px-6 py-3">
              Block
            </th>
            <th scope="col" class="px-6 py-3">
              Phase
            </th>
            <th scope="col" class="px-6 py-3">
              Area
            </th>
            <th scope="col" class="px-6 py-3">
              Beds
            </th>
            <th scope="col" class="px-6 py-3">
              Baths
            </th>
            <th scope="col" class="px-6 py-3">
              Price
            </th>
            <th scope="col" class="px-6 py-3">
              Featured
            </th>

            <th scope="col" class="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="odd:bg-white  even:bg-gray-50 text-gray-900  ">
            <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap">
              P8-207
            </th>
            <td class="px-6 py-4">207</td>
            <td class="px-6 py-4">C</td>
            <td class="px-6 py-4">8</td>
            <td class="px-6 py-4">10 Marla</td>
            <td class="px-6 py-4">4</td>
            <td class="px-6 py-4">5</td>
            <td class="px-6 py-4">40000000</td>
            <td class="px-6 py-4 text-center">
              <FaRegStar className="h-5 w-5 ml-4 text-yellow-500" />
            </td>
            <td class="px-6 py-4 flex justify-start items-center gap-2 ">
              <span>
                <LiaEditSolid className="h-5 w-5 text-blue-500  hover:cursor-pointer" />
              </span>
              <span>
                <RiDeleteBin7Line className="h-5 w-5 text-red-500  hover:cursor-pointer" />
              </span>
            </td>
          </tr>
          <tr class="odd:bg-white  even:bg-gray-50 text-gray-900  ">
            <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap">
              P8-207
            </th>
            <td class="px-6 py-4">207</td>
            <td class="px-6 py-4">C</td>
            <td class="px-6 py-4">8</td>
            <td class="px-6 py-4">10 Marla</td>
            <td class="px-6 py-4">4</td>
            <td class="px-6 py-4">5</td>
            <td class="px-6 py-4">40000000</td>
            <td class="px-6 py-4 text-center">
              <FaRegStar className="h-5 w-5 ml-4 text-yellow-500" />
            </td>
            <td class="px-6 py-4 flex justify-start items-center gap-2 ">
              <span>
                <LiaEditSolid className="h-5 w-5 text-blue-500  hover:cursor-pointer" />
              </span>
              <span>
                <RiDeleteBin7Line className="h-5 w-5 text-red-500  hover:cursor-pointer" />
              </span>
            </td>
          </tr>
          <tr class="odd:bg-white  even:bg-gray-50 text-gray-900  ">
            <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap">
              P8-207
            </th>
            <td class="px-6 py-4">207</td>
            <td class="px-6 py-4">C</td>
            <td class="px-6 py-4">8</td>
            <td class="px-6 py-4">10 Marla</td>
            <td class="px-6 py-4">4</td>
            <td class="px-6 py-4">5</td>
            <td class="px-6 py-4">40000000</td>
            <td class="px-6 py-4 text-center">
              <FaRegStar className="h-5 w-5 ml-4 text-yellow-500" />
            </td>
            <td class="px-6 py-4 flex justify-start items-center gap-2 ">
              <span>
                <LiaEditSolid className="h-5 w-5 text-blue-500  hover:cursor-pointer" />
              </span>
              <span>
                <RiDeleteBin7Line className="h-5 w-5 text-red-500  hover:cursor-pointer" />
              </span>
            </td>
          </tr>
          <tr class="odd:bg-white  even:bg-gray-50 text-gray-900  ">
            <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap">
              P8-207
            </th>
            <td class="px-6 py-4">207</td>
            <td class="px-6 py-4">C</td>
            <td class="px-6 py-4">8</td>
            <td class="px-6 py-4">10 Marla</td>
            <td class="px-6 py-4">4</td>
            <td class="px-6 py-4">5</td>
            <td class="px-6 py-4">40000000</td>
            <td class="px-6 py-4 text-center">
              <FaRegStar className="h-5 w-5 ml-4 text-yellow-500" />
            </td>
            <td class="px-6 py-4 flex justify-start items-center gap-2 ">
              <span>
                <LiaEditSolid className="h-5 w-5 text-blue-500  hover:cursor-pointer" />
              </span>
              <span>
                <RiDeleteBin7Line className="h-5 w-5 text-red-500  hover:cursor-pointer" />
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableListing;
