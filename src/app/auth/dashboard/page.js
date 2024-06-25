'use client'
import AdminListingForm from '@/app/components/AdminListingForm';
import TableListing from '@/app/components/TableListing';
import React, { useState } from 'react';

const dashboard = () => {
    const [activeTab, setActiveTab] = useState('create');

    const openPage = (pageName) => {
        setActiveTab(pageName);
    };
    return (
        <div className="">
            {/* Tabs */}
            <div className="flex justify-center ">
                <button
                    className={`tablink py-2  ${activeTab === 'create' ? 'bg-slate-200 text-slate-700' : 'bg-gray-700'} text-white w-1/4 p-4`}
                    onClick={() => openPage('create')}
                >
                    Create
                </button>
                <button
                    className={`tablink py-2 ${activeTab === 'update' ? 'bg-slate-200 text-slate-700' : 'bg-gray-700'} text-white w-1/4 p-4`}
                    onClick={() => openPage('update')}
                    id="defaultOpen"
                >
                    Update
                </button>
                <button
                    className={`tablink  py-2 ${activeTab === 'listing' ? 'bg-slate-200 text-slate-700' : 'bg-gray-700'} text-white w-1/4 p-4`}
                    onClick={() => openPage('listing')}
                >
                    View
                </button>
                <button
                    className={`tablink py-2 ${activeTab === 'settings' ? 'bg-red-500' : 'bg-gray-700'} text-white w-1/4 p-4`}
                    onClick={() => openPage('settings')}
                >
                    Settings
                </button>
            </div>

            {/* Tabs inner window */}

            <div id="create" className={`tabcontent ${activeTab === 'create' ? 'block' : 'hidden'} bg-[#f1f1f1] p-4 lg:p-20 h-full`}>
            <h1 className="relative p-0 m-0 font-raleway font-light text-4xl text-gray-800 transition-all duration-400 ease-in-out ">
                   Create New Property
                </h1>
                <AdminListingForm />
            </div>

            <div id="update" className={`tabcontent ${activeTab === 'update' ? 'block' : 'hidden'} bg-[#f1f1f1] p-4 lg:p-20 h-full`}>
            <h1 className="relative p-0 m-0 font-raleway font-light text-4xl text-gray-800 transition-all duration-400 ease-in-out ">
                 Update Property
                </h1>
                <AdminListingForm />
            </div>

            <div id="listing" className={`tabcontent ${activeTab === 'listing' ? 'block' : 'hidden'} bg-[#f1f1f1] p-4 lg:p-20 h-full`}>
                <h1 className="relative p-0 m-0 font-raleway font-light text-4xl text-gray-800 transition-all duration-400 ease-in-out mb-4">
                    Listing of  Properties
                </h1>
                <TableListing />
            </div>

            <div id="settings" className={`tabcontent ${activeTab === 'settings' ? 'block' : 'hidden'} bg-[#f1f1f1] p-4 lg:p-20 h-full`}>
            <h1 className="relative p-0 m-0 font-raleway font-light text-4xl text-gray-800 transition-all duration-400 ease-in-out mb-4">
                   Settings
                </h1>
                <p>Who we are and what we do.</p>
            </div>
        </div>

    )
}

export default dashboard