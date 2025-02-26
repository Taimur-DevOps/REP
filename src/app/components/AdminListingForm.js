"use client";
import { FormikProvider, useFormik } from "formik";
import * as Yup from "yup";
import Field from "./Form";

const AdminListingForm = () => {
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
      bedrooms: Yup.number()
        .required("Required")
        .positive("Must be positive")
        .integer("Must be an integer"),
      bathrooms: Yup.number()
        .required("Required")
        .positive("Must be positive")
        .integer("Must be an integer"),
      garage: Yup.number()
        .required("Required")
        .positive("Must be positive")
        .integer("Must be an integer"),
      areaSize: Yup.string().required("Required"),
      yearBuilt: Yup.number()
        .required("Required")
        .positive("Must be positive")
        .integer("Must be an integer"),
    }),
    onSubmit: (values) => {
      console.log(values);
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

  return (
    <FormikProvider value={formik}>
      <form
        onSubmit={formik.handleSubmit}
        className="border border-gray-300 rounded-[4px] bg-white px-6 py-7"
      >
        <main className="flex flex-col gap-3">
          <div className="grid grid-cols-3 gap-5">
            <Field type="text" name="propertyId" label="Property ID" />
            <Field type="text" name="blockNumber" label="Block Name" />
            <Field type="text" name="houseNumber" label="House No." />
          </div>

          {/* location title desc */}

          <div className="flex flex-col gap-2">
            <Field type="text" name="location" label="Location" />
            <Field type="text" name="title" label="Title" />
            <Field type="textarea" name="description" label="Description" />
          </div>

          {/* property type and area */}
          <div className="grid grid-cols-2 gap-5">
            <Field
              type="select"
              name="propertyType"
              label="Property Type"
              options={[
                { value: "house", label: "House" },
                { value: "apartment", label: "Apartment" },
                { value: "farmhouse", label: "Farm House" },
                { value: "commercial", label: "Commercial" },
              ]}
            />
            <Field
              type="select"
              name="areaSize"
              label="Area Size"
              options={[
                { value: "marla5", label: "5 Marla" },
                { value: "marla10", label: "10 Marla" },
                { value: "marla15", label: "15 Marla" },
                { value: "marla20", label: "20 Marla" },
              ]}
            />
          </div>
          {/* beds bath area */}
          <div className="grid grid-cols-3 gap-5">
            <Field type="number" name="bedrooms" label="Bedrooms" />
            <Field type="number" name="bathrooms" label=" Bathrooms" />
            <Field type="number" name="garage" label="Garage" />
          </div>
          {/* price year build */}
          <div className="grid grid-cols-2 gap-5">
            <Field type="number" name="yearBuilt" label="Year Built" />
            <Field type="number" name="price" label="Price" />
          </div>
          {/* featured property  */}
          <Field type="checkbox" name="featured" label=" Featured" />

          {/* add new features */}
          <Field type="list" name="Features" label="Features" />
          <div>
            <label className="text-sm font-medium text-gray-700">
              Features
            </label>
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
          {/* upload images */}
          <Field name="images" label="Select a file" type="file" />

          {/* submit btn */}
          <hr className="mt-4 mb-2" />
          <div className="flex justify-end">
            <button
              type="submit"
              className="mt-4 py-2 px-5 bg-green-500 text-white rounded-[4px] text-base leading-4"
            >
              Save
            </button>
          </div>
        </main>
      </form>
    </FormikProvider>
  );
};

export default AdminListingForm;

//   <label className="flex bg-bg gap-2 text-white items-center justify-center rounded-[50px] w-[15%]">
// <MdOutlineFileUpload />
// <span className="text-base">Select a file</span>
// <input
//   type="file"
//   name="images"
//   multiple
//   onChange={handleFileChange}
//   className="hidden"
// />
// </label>
// {formik.touched.images && formik.errors.images ? (
// <div className="text-red-500">{formik.errors.images}</div>
// ) : null}
// {formik.values.images.length > 0 && (
// <div className="mt-2 border rounded-[4px] p-2">
//   {formik.values.images.map((file, index) => (
//     <div key={index} className="flex items-center space-x-2">
//       <span className="truncate">{file.name}</span>
//     </div>
//   ))}
// </div>
// )}
