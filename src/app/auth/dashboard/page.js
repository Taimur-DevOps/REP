"use client";
import AdminListingForm from "@/app/components/AdminListingForm";
import Settings from "@/app/components/Settings";
import TableListing from "@/app/components/TableListing";
import React, { useState } from "react";

const dashboard = () => {
  const [activeTab, setActiveTab] = useState("create");

  const openPage = (pageName) => {
    setActiveTab(pageName);
  };
  return (
    <div className="bg-bgGray">
      {/* Tabs */}
      <div className="flex justify-center ">
        <button
          className={`tablink py-2  ${
            activeTab === "create"
              ? "bg-slate-200 text-[#5a686a]"
              : "bg-gray-700 text-white"
          }  w-1/4 p-4`}
          onClick={() => openPage("create")}
        >
          Create
        </button>
        <button
          className={`tablink py-2 ${
            activeTab === "update"
              ? "bg-slate-200 text-[#5a686a]"
              : "bg-gray-700 text-white"
          }  w-1/4 p-4`}
          onClick={() => openPage("update")}
          id="defaultOpen"
        >
          Update
        </button>
        <button
          className={`tablink  py-2 ${
            activeTab === "listing"
              ? "bg-slate-200 text-[#5a686a]"
              : "bg-gray-700 text-white"
          }  w-1/4 p-4`}
          onClick={() => openPage("listing")}
        >
          View
        </button>
        <button
          className={`tablink py-2 ${
            activeTab === "settings"
              ? "bg-red-600 text-white"
              : "bg-gray-700 text-white"
          }  w-1/4 p-4`}
          onClick={() => openPage("settings")}
        >
          Settings
        </button>
      </div>

      {/* Tabs inner window */}

      <div
        id="create"
        className={`tabcontent ${
          activeTab === "create" ? "block" : "hidden"
        } lg:container mx-auto py-10`}
      >
        <h1 className="text-2xl font-semibold font-nokara mb-4">
          Create New Property
        </h1>
        <AdminListingForm />
      </div>

      <div
        id="update"
        className={`tabcontent ${
          activeTab === "update" ? "block" : "hidden"
        }  lg:container mx-auto py-10`}
      >
        <h1 className="text-2xl font-semibold font-nokara mb-4">
          Update Property
        </h1>
        <AdminListingForm />
      </div>

      <div
        id="listing"
        className={`tabcontent ${
          activeTab === "listing" ? "block" : "hidden"
        }  lg:container mx-auto py-10`}
      >
        <h1 className="text-2xl font-semibold font-nokara mb-4">
          Listing of Properties
        </h1>
        <TableListing />
      </div>

      <div
        id="settings"
        className={`tabcontent ${
          activeTab === "settings" ? "block" : "hidden"
        }  lg:container mx-auto py-10`}
      >
        <Settings />
      </div>
    </div>
  );
};

export default dashboard;
