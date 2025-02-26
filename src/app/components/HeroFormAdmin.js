import React from "react";
import { useFormik, FormikProvider } from "formik";
import * as Yup from "yup";
import Field from "./Form";

const HeroFormAdmin = () => {
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      location: "",
      price: "",
      images: [],
      bedrooms: "",
      bathrooms: "",
      areaSize: "",
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Required"),
      description: Yup.string().required("Required"),
      location: Yup.string().required("Required"),
      bedrooms: Yup.number().required("Required"),
      bathrooms: Yup.number().required("Required"),
      areaSize: Yup.number().required("Required"),
      images: Yup.array().min(1, "Please select at least one file"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  
  return (
    <>
      <FormikProvider value={formik}>
        <form
          onSubmit={formik.handleSubmit}
          className=" border border-gray-300 rounded-[4px] bg-white px-6 py-7"
        >
          {/* property Id and Title */}
          <main className="flex flex-col gap-3">
            {/*location Title Description */}
            <Field type="text" name="title" label="Title" />
            <Field type="text" name="location" label="Location" />
            <Field type="textarea" name="description" label="Description" />

            {/* BedRoom, BathRooms, areaSize */}
            <div className="grid grid-cols-3 gap-4">
              <Field type="number" name="bedrooms" label="Bedrooms" />
              <Field type="number" name="bathrooms" label=" Bathrooms" />
              <Field type="number" name="garage" label="Garage" />
            </div>
            {/* Upload Images */}
            <Field name="images" label="Select a file" type="file" />
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
      </FormikProvider>
    </>
  );
};

export default HeroFormAdmin;
