import React from "react";
import { LiaEditSolid } from "react-icons/lia";
import { RiDeleteBin7Line } from "react-icons/ri";
import { FaRegStar } from "react-icons/fa";
import Image from "next/image";
import crsl1 from "@/assets/crsl1.jpg";

const HeroTableListing = () => {
  return (
    <>
      <div class="relative overflow-x-auto shadow-md rounded-[4px] border border-gray-100 h-full">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500  dark:text-gray-400 h-full">
          <thead class="text-sm text-gray-700  bg-gray-50">
            <tr>
              <th scope="col" class="px-6 py-3">
                Title
              </th>
              <th scope="col" class="px-6 py-3">
              Location
              </th>
              <th scope="col" class="px-6 py-3">
              Size
              </th>
              <th scope="col" class="px-6 py-3">
              Price
              </th>
       
              <th scope="col" class="px-6 py-3">
              Bedrooms
              </th>
              <th scope="col" class="px-6 py-3">
                Bathroom
              </th>
              <th scope="col" class="px-6 py-3">
                Images
              </th>
              <th scope="col" class="px-6 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="odd:bg-white  even:bg-gray-50 text-gray-900  w-full">
              <th scope="row" class="px-6 font-medium whitespace-nowrap">
                Spanish Style
              </th>
              <td class="px-6 whitespace-nowrap">Dha phase 8</td>
              <td class="px-6 whitespace-nowrap">1 kanal</td>
              <td class="px-6 whitespace-nowrap">18 Cr</td>
              <td class="px-6 whitespace-nowrap">5</td>
              <td class="px-6 whitespace-nowrap">4</td>
              <td class="px-6 whitespace-nowrap">
                <div className="w-14 h-12 grid place-content-center">
                  <Image
                    alt="banner"
                    src={crsl1}
                    className="w-full h-full object-cover"
                  />
                </div>
              </td>
              <td class="px-6">
                {" "}
                <RiDeleteBin7Line className="h-5 w-5 text-red-500  hover:cursor-pointer" />
              </td>
            </tr>
 
            <tr class="odd:bg-white  even:bg-gray-50 text-gray-900  w-full">
              <th scope="row" class="px-6 font-medium whitespace-nowrap">
                Spanish Style
              </th>
              <td class="px-6">Dha phase 8</td>
              <td class="px-6">1 kanal</td>
              <td class="px-6">18 Cr</td>
              <td class="px-6">5</td>
              <td class="px-6">4</td>
              <td class="px-6">
                <div className="w-14 h-12 grid place-content-center">
                  <Image
                    alt="banner"
                    src={crsl1}
                    className="w-full h-full object-cover"
                  />
                </div>
              </td>
              <td class="px-6">
                {" "}
                <RiDeleteBin7Line className="h-5 w-5 text-red-500  hover:cursor-pointer" />
              </td>
            </tr>

            <tr class="odd:bg-white  even:bg-gray-50 text-gray-900  w-full">
              <th scope="row" class="px-6 font-medium whitespace-nowrap">
                Spanish Style
              </th>
              <td class="px-6">Dha phase 8</td>
              <td class="px-6">1 kanal</td>
              <td class="px-6">18 Cr</td>
              <td class="px-6">5</td>
              <td class="px-6">4</td>
              <td class="px-6">
                <div className="w-14 h-12 grid place-content-center">
                  <Image
                    alt="banner"
                    src={crsl1}
                    className="w-full h-full object-cover"
                  />
                </div>
              </td>
              <td class="px-6">
                {" "}
                <RiDeleteBin7Line className="h-5 w-5 text-red-500  hover:cursor-pointer" />
              </td>
            </tr>

            <tr class="odd:bg-white  even:bg-gray-50 text-gray-900  w-full">
              <th scope="row" class="px-6 font-medium whitespace-nowrap">
                Spanish Style
              </th>
              <td class="px-6">Dha phase 8</td>
              <td class="px-6">1 kanal</td>
              <td class="px-6">18 Cr</td>
              <td class="px-6">5</td>
              <td class="px-6">4</td>
              <td class="px-6">
                <div className="w-14 h-12 grid place-content-center">
                  <Image
                    alt="banner"
                    src={crsl1}
                    className="w-full h-full object-cover"
                  />
                </div>
              </td>
              <td class="px-6">
                {" "}
                <RiDeleteBin7Line className="h-5 w-5 text-red-500  hover:cursor-pointer" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default HeroTableListing;