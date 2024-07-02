"use client";
import { useState } from "react";
import { HiOutlineChevronDown } from "react-icons/hi";
import { MdOutlineFileUpload } from "react-icons/md";

const AdminListingForm = () => {
  const [formData, setFormData] = useState({
    propertyId: "",
    title: "",
    description: "",
    price: "",
    location: "",
    houseNumber: "",
    blockNumber: "",
    images: [],
    propertyType: "",
    bedrooms: "",
    bathrooms: "",
    garage: "",
    areaSize: "",
    yearBuilt: "",
    featured: false,
    features: [""],
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "file") {
      setFormData({
        ...formData,
        images: [...formData.images, ...Array.from(files)],
      });
    } else {
      setFormData({
        ...formData,
        [name]: type === "checkbox" ? checked : value,
      });
    }
  };

  const handleFeatureChange = (index, value) => {
    const newFeatures = formData.features.slice();
    newFeatures[index] = value;
    setFormData({ ...formData, features: newFeatures });
  };

  const addFeature = () => {
    setFormData({ ...formData, features: [...formData.features, ""] });
  };

  const removeFeature = (index) => {
    const newFeatures = formData.features.slice();
    newFeatures.splice(index, 1);
    setFormData({ ...formData, features: newFeatures });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className=" border border-gray-300 rounded-[4px] bg-white px-6 py-7"
    >
      {/* property Id and Title */}
      <main className="flex flex-col gap-3">
        <div className="grid grid-cols-3 gap-5">
          <div className="">
            <label className=" text-sm font-medium text-gray-700">
              Property ID
            </label>
            <input
              name="propertyId"
              value={formData.propertyId}
              onChange={handleChange}
              className=" w-full px-2 border border-gray-300 rounded-[4px]"
            />
          </div>
          <div className="">
            <label className=" text-sm font-medium text-gray-700">
              Block Name{" "}
            </label>
            <input
              name="blockNumber"
              value={formData.blockNumber}
              onChange={handleChange}
              className=" w-full  px-2 border border-gray-300 rounded-[4px]"
            />
          </div>
          <div className="">
            <label className=" text-sm font-medium text-gray-700">
              House No.
            </label>
            <input
              name="houseNumber"
              value={formData.houseNumber}
              onChange={handleChange}
              className=" w-full  px-2 border border-gray-300 rounded-[4px]"
            />
          </div>
        </div>

        {/*location Title Description */}
        <div className="flex flex-col gap-2">
          <div className="">
            <label className=" text-sm font-medium text-gray-700">
              Location
            </label>
            <input
              name="location"
              value={formData.location}
              onChange={handleChange}
              className=" w-full  px-2 border border-gray-300 rounded-[4px]"
            />
          </div>

          <div className="">
            <label className=" text-sm font-medium text-gray-700">Title</label>
            <input
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full  px-2 border border-gray-300 rounded-[4px]"
            />
          </div>

          <div className="">
            <label className=" text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className=" w-full px-2 border border-gray-300 rounded-[4px]"
            />
          </div>
        </div>

        {/* property Type and Area */}
        <div className="grid grid-cols-2 gap-5">
          <div className="relative">
            <label className=" text-sm font-medium text-gray-700">
              Property Type
            </label>
            <select
              name="propertyType"
              value={formData.propertyType}
              onChange={handleChange}
              className=" w-full border border-gray-300 rounded-[4px] bg-white px-2 placeholder:font-light"
            >
              <option value="">Select Property Type</option>
              <option value="house">House</option>
              <option value="apartment">Apartment</option>
              <option value="farmhouse">Farm House</option>
              <option value="commercial">commercial</option>
            </select>
            <HiOutlineChevronDown className="absolute bottom-[10px] right-[10px] w-4 h-4" />
          </div>

          <div className="relative">
            <label className=" text-sm font-medium text-gray-700">
              Area Size
            </label>
            <select
              name="areaSize"
              value={formData.areaSize}
              onChange={handleChange}
              className=" overflow-auto  w-full  border border-gray-300 rounded-[4px] bg-white px-2"
            >
              <option value="">Select Area Size</option>
              <option value="marla5">5 Marla</option>
              <option value="marla10">10 Marla</option>
              <option value="marla15">15 Marla</option>
              <option value="marla20">20 Marla</option>
              <option value="marla25">25 Marla</option>
              <option value="marla30">30 Marla</option>
              <option value="marla35">35 Marla</option>
              <option value="marla40">40 Marla</option>
              <option value="marla45">45 Marla</option>
              <option value="marla50">50 Marla</option>
              <option value="marla55">55 Marla</option>
              <option value="marla60">60 Marla</option>
              <option value="marla65">65 Marla</option>
              <option value="marla70">70 Marla</option>
              <option value="marla75">75 Marla</option>
              <option value="marla80">80 Marla</option>
            </select>
            <HiOutlineChevronDown className="absolute bottom-[10px] right-[10px] w-4 h-4" />
          </div>
        </div>

        {/* BedRoom, BathRooms, garage */}
        <div className="grid grid-cols-3 gap-5">
          <div className="">
            <label className="text-sm font-medium text-gray-700">
              Bedrooms
            </label>
            <input
              type="number"
              name="bedrooms"
              value={formData.bedrooms}
              onChange={handleChange}
              className="w-full border  px-2 border-gray-300 rounded-[4px]"
            />
          </div>
          <div className="">
            <label className=" text-sm font-medium text-gray-700">
              Bathrooms
            </label>
            <input
              type="number"
              name="bathrooms"
              value={formData.bathrooms}
              onChange={handleChange}
              className=" w-full  px-2 border border-gray-300 rounded-[4px]"
            />
          </div>
          <div className="">
            <label className=" text-sm font-medium text-gray-700">Garage</label>
            <input
              type="number"
              name="garage"
              value={formData.garage}
              onChange={handleChange}
              className=" w-full  px-2 border border-gray-300 rounded-[4px]"
            />
          </div>
        </div>

        {/* year built and Featured */}
        <div className="grid grid-cols-2 gap-5">
          <div className="">
            <label className=" text-sm font-medium text-gray-700">Price</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className=" w-full  px-2 border border-gray-300 rounded-[4px]"
            />
          </div>
          <div className="">
            <label className=" text-sm font-medium text-gray-700">
              Year Built
            </label>
            <input
              type="number"
              name="yearBuilt"
              value={formData.yearBuilt}
              onChange={handleChange}
              className=" w-full  px-2 border border-gray-300 rounded-[4px]"
            />
          </div>
        </div>

        {/* Additional Features */}
        <div className="">
          <label className=" text-sm font-medium text-gray-700">Features</label>
          <div className="">
            {formData.features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2 mt-2">
                <input
                  value={feature}
                  onChange={(e) => handleFeatureChange(index, e.target.value)}
                  className=" w-full  px-2  border border-gray-300 rounded-[4px]"
                />
                <button
                  type="button"
                  onClick={() => removeFeature(index)}
                  className="text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          <div className="mt-2">
            <button
              type="button"
              onClick={addFeature}
              className="py-2 px-4 bg-bg text-white rounded-[4px]"
            >
              Add Feature
            </button>
          </div>
        </div>

        {/* feature property */}
        <div className="flex items-center gap-2 ">
          <input
            type="checkbox"
            name="featured"
            checked={formData.featured}
            onChange={handleChange}
            className="h-5 w-5 text-indigo-600 border-gray-300 rounded"
          />
          <span className=" text-sm font-medium text-gray-700 whitespace-nowrap">
            Featured Property
          </span>
        </div>

        {/* Upload Images */}
        <div className="flex flex-col gap-1">
          <label class="flex bg-bg gap-2 text-white items-center justify-center rounded-[50px] w-[15%]">
            <MdOutlineFileUpload />
            <span class=" text-base">Select a file</span>
            <input
              type="file"
              class="hidden"
              name="images"
              placeholder="Select a file"
              multiple
              onChange={handleChange}
              className="hidden"
            />
          </label>
          {formData.images.length > 0 && (
            <div className="mt-2 border rounded-[4px] p-2">
              {formData.images.map((file, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <span className="truncate">{file.name}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      {/* submit btn */}
      <hr className="mt-4 mb-2" />
      <div className="flex justify-end">
        <button
          type="submit"
          className="mt-4 py-2 px-5 bg-green-500 text-white rounded-[4px]"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default AdminListingForm;
