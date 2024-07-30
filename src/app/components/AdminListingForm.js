"use client";

import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "./Button";
import { useDispatch, useSelector } from 'react-redux';
import { HiOutlineChevronDown } from "react-icons/hi";
import { createProperty } from "../properties/_redux/jobActions";

const AdminListingForm = () => {
  const dispatch = useDispatch();
  // const count = useSelector((state) => state.counter.count);


  const formik = useFormik({
    initialValues: {
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
    },
    validationSchema: Yup.object({
      propertyId: Yup.string().required("Required"),
      title: Yup.string().required("Required"),
      description: Yup.string().required("Required"),
      price: Yup.number().required("Required").positive("Must be positive"),
      location: Yup.string().required("Required"),
      houseNumber: Yup.string().required("Required"),
      blockNumber: Yup.string().required("Required"),
      propertyType: Yup.string().required("Required"),
      bedrooms: Yup.number().required("Required").positive("Must be positive").integer("Must be an integer"),
      bathrooms: Yup.number().required("Required").positive("Must be positive").integer("Must be an integer"),
      garage: Yup.number().required("Required").positive("Must be positive").integer("Must be an integer"),
      areaSize: Yup.string().required("Required"),
      yearBuilt: Yup.number().required("Required").positive("Must be positive").integer("Must be an integer"),
    }),
    onSubmit: (values) => {


 
    },
  });

  const handleFeatureChange = (index, value) => {
    const newFeatures = formik.values.features.slice();
    newFeatures[index] = value;
    formik.setFieldValue("features", newFeatures);
  };

  const addFeature = () => {
    formik.setFieldValue("features", [...formik.values.features, ""]);
  };

  const removeFeature = (index) => {
    const newFeatures = formik.values.features.slice();
    newFeatures.splice(index, 1);
    formik.setFieldValue("features", newFeatures);
  };

  const handleFileChange = (e) => {
    formik.setFieldValue("images", [...formik.values.images, ...Array.from(e.target.files)]);
  };

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="border border-gray-300 rounded-[4px] bg-white px-6 py-7"
    >
      <main className="flex flex-col gap-3">
        <div className="grid grid-cols-3 gap-5">
          <div>
            <label className="text-sm font-medium text-gray-700">Property ID</label>
            <input
              name="propertyId"
              value={formik.values.propertyId}
              onChange={formik.handleChange}
              className="w-full px-2 border border-gray-300 rounded-[4px]"
            />
            {formik.errors.propertyId && formik.touched.propertyId && (
              <div className="text-red-500 text-sm">{formik.errors.propertyId}</div>
            )}
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">Block Name</label>
            <input
              name="blockNumber"
              value={formik.values.blockNumber}
              onChange={formik.handleChange}
              className="w-full px-2 border border-gray-300 rounded-[4px]"
            />
            {formik.errors.blockNumber && formik.touched.blockNumber && (
              <div className="text-red-500 text-sm">{formik.errors.blockNumber}</div>
            )}
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">House No.</label>
            <input
              name="houseNumber"
              value={formik.values.houseNumber}
              onChange={formik.handleChange}
              className="w-full px-2 border border-gray-300 rounded-[4px]"
            />
            {formik.errors.houseNumber && formik.touched.houseNumber && (
              <div className="text-red-500 text-sm">{formik.errors.houseNumber}</div>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div>
            <label className="text-sm font-medium text-gray-700">Location</label>
            <input
              name="location"
              value={formik.values.location}
              onChange={formik.handleChange}
              className="w-full px-2 border border-gray-300 rounded-[4px]"
            />
            {formik.errors.location && formik.touched.location && (
              <div className="text-red-500 text-sm">{formik.errors.location}</div>
            )}
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">Title</label>
            <input
              name="title"
              value={formik.values.title}
              onChange={formik.handleChange}
              className="w-full px-2 border border-gray-300 rounded-[4px]"
            />
            {formik.errors.title && formik.touched.title && (
              <div className="text-red-500 text-sm">{formik.errors.title}</div>
            )}
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">Description</label>
            <textarea
              name="description"
              value={formik.values.description}
              onChange={formik.handleChange}
              className="w-full border border-gray-300 rounded-[4px]"
            />
            {formik.errors.description && formik.touched.description && (
              <div className="text-red-500 text-sm">{formik.errors.description}</div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-5">
          <div className="relative">
            <label className="text-sm font-medium text-gray-700">Property Type</label>
            <select
              name="propertyType"
              value={formik.values.propertyType}
              onChange={formik.handleChange}
              className="w-full border border-gray-300 rounded-[4px] bg-white px-2 placeholder:font-light"
            >
              <option value="">Select Property Type</option>
              <option value="house">House</option>
              <option value="apartment">Apartment</option>
              <option value="farmhouse">Farm House</option>
              <option value="commercial">Commercial</option>
            </select>
            <HiOutlineChevronDown className="absolute bottom-[10px] right-[10px] w-4 h-4" />
            {formik.errors.propertyType && formik.touched.propertyType && (
              <div className="text-red-500 text-sm">{formik.errors.propertyType}</div>
            )}
          </div>
          <div className="relative">
            <label className="text-sm font-medium text-gray-700">Area Size</label>
            <select
              name="areaSize"
              value={formik.values.areaSize}
              onChange={formik.handleChange}
              className="overflow-auto w-full border border-gray-300 rounded-[4px] bg-white px-2"
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
            {formik.errors.areaSize && formik.touched.areaSize && (
              <div className="text-red-500 text-sm">{formik.errors.areaSize}</div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-5">
          <div>
            <label className="text-sm font-medium text-gray-700">Bedrooms</label>
            <input
              type="number"
              name="bedrooms"
              value={formik.values.bedrooms}
              onChange={formik.handleChange}
              className="w-full px-2 border border-gray-300 rounded-[4px]"
            />
            {formik.errors.bedrooms && formik.touched.bedrooms && (
              <div className="text-red-500 text-sm">{formik.errors.bedrooms}</div>
            )}
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">Bathrooms</label>
            <input
              type="number"
              name="bathrooms"
              value={formik.values.bathrooms}
              onChange={formik.handleChange}
              className="w-full px-2 border border-gray-300 rounded-[4px]"
            />
            {formik.errors.bathrooms && formik.touched.bathrooms && (
              <div className="text-red-500 text-sm">{formik.errors.bathrooms}</div>
            )}
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">Garage</label>
            <input
              type="number"
              name="garage"
              value={formik.values.garage}
              onChange={formik.handleChange}
              className="w-full px-2 border border-gray-300 rounded-[4px]"
            />
            {formik.errors.garage && formik.touched.garage && (
              <div className="text-red-500 text-sm">{formik.errors.garage}</div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-5">
          <div>
            <label className="text-sm font-medium text-gray-700">Year Built</label>
            <input
              type="number"
              name="yearBuilt"
              value={formik.values.yearBuilt}
              onChange={formik.handleChange}
              className="w-full px-2 border border-gray-300 rounded-[4px]"
            />
            {formik.errors.yearBuilt && formik.touched.yearBuilt && (
              <div className="text-red-500 text-sm">{formik.errors.yearBuilt}</div>
            )}
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">Price</label>
            <input
              type="number"
              name="price"
              value={formik.values.price}
              onChange={formik.handleChange}
              className="w-full px-2 border border-gray-300 rounded-[4px]"
            />
            {formik.errors.price && formik.touched.price && (
              <div className="text-red-500 text-sm">{formik.errors.price}</div>
            )}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            name="featured"
            checked={formik.values.featured}
            onChange={formik.handleChange}
            className="h-4 w-4"
          />
          <label className="text-sm font-medium text-gray-700">Featured</label>
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700">Features</label>
          {formik.values.features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2 mb-2">
              <input
                type="text"
                value={feature}
                onChange={(e) => handleFeatureChange(index, e.target.value)}
                className="w-full px-2 border border-gray-300 rounded-[4px]"
              />
              <button
                type="button"
                onClick={() => removeFeature(index)}
                className="text-red-500"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={addFeature}
            className="text-blue-500"
          >
            Add Feature
          </button>
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700">Images</label>
          <input
            type="file"
            name="images"
            onChange={handleFileChange}
            multiple
            className="w-full px-2 border border-gray-300 rounded-[4px]"
          />
        </div>

        <Button type="submit">Submit</Button>
      </main>
    </form>
  );
};

export default AdminListingForm;