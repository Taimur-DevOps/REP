import React from "react";
import Banner from "../components/Banner";
import Filters from "../components/Filters";
import ListingCards from "../components/ListingCards";
import Pagination from "../components/Pagination";
import Breadcrumb from "../components/Breadcrumb";

const properties = () => {
  return (
    <>
      <Banner />
      <Filters />
      <section className="bg-bgGray">
        <div className="container mx-auto py-12 lg:px-0 px-7">
          <Breadcrumb />
          <h3 className=" text-4xl font-bold font-nokara mb-[30px] mt-3">
            Properties​
          </h3>
          <ListingCards />
          <Pagination />
        </div>
      </section>
    </>
  );
};

export default properties;
