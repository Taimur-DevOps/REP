import React from "react";
import { useState } from "react";
import { MdOutlineFileUpload } from "react-icons/md";

const TeamForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    images: [],
    designation: "",
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className=" border border-gray-300 rounded-[4px] bg-white px-6 py-7"
      >
        <main className="flex flex-col gap-3">
          {/* Title Description */}

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
              Designation
            </label>
            <input
              name="designation"
              value={formData.designation}
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

          {/* Upload Images */}
          <div className="flex flex-col gap-1 mt-2">
            <label class="flex bg-bg gap-2 text-white items-center justify-center rounded-[50px] w-[50%]">
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
            Save
          </button>
        </div>
      </form>
    </>
  );
};

export default TeamForm;