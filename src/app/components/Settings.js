import React from "react";
import HeroFormAdmin from "./HeroFormAdmin";
import HeroTableListing from "./HeroTableListing";
import TeamForm from "./TeamForm";

const Settings = () => {
  return (
    <>
      <h1 className="text-2xl font-semibold font-nokara mb-2">
        Hero section details
      </h1>
      <main className=" flex flex-row gap-7 mb-7">
        <div className="w-2/6 shadow-md h-full">
          <HeroFormAdmin />
        </div>
        <div className="w-2/3 shadow-md h-full">
          <HeroTableListing />
        </div>
      </main>
      <h1 className="text-2xl font-semibold font-nokara mb-2">Team details</h1>
      <main className="flex flex-row gap-7 mb-7">
        <div className="w-2/6 shadow-md h-full">
          <TeamForm />
        </div>
        <div className="w-2/3 shadow-md h-full">
          <HeroTableListing />
        </div>
      </main>
    </>
  );
};

export default Settings;
