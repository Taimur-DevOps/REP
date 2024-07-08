import React from "react";
import HeroFormAdmin from "./HeroFormAdmin";
import HeroTableListing from "./HeroTableListing";
import TeamForm from "./TeamForm";
import TeamFormLisitng from "./TeamFormLisitng";

const Settings = () => {
  return (
    <>
    {/* Hero Section */}
      <h1 className="text-2xl font-semibold font-nokara mb-2">
        Hero section details
      </h1>
      <main className=" flex flex-col lg:flex-row gap-4 mb-7">
        <div className="w-full lg:w-2/6 shadow-md h-full">
          <HeroFormAdmin />
        </div>
        <div className="w-full  lg:w-2/3 shadow-md h-full">
          <HeroTableListing />
        </div>``
      </main>

      {/* Team Details */}
      <h1 className="text-2xl font-semibold font-nokara mb-2">Team details</h1>
      <main className="flex flex-col lg:flex-row gap-4 mb-7">
        <div className="w-full lg:w-2/6 shadow-md h-full">
          <TeamForm />
        </div>
        <div className="w-full lg:w-2/3 shadow-md h-full">
          <TeamFormLisitng />
        </div>
      </main>
    </>
  );
};

export default Settings;
