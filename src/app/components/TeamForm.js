import React from "react";
import { FormikProvider, useFormik } from "formik";
import * as Yup from "yup";
import Field from "./Form";

const TeamForm = () => {
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      images: [],
      designation: "",
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Title is required"),
      description: Yup.string().required("Description is required"),
      designation: Yup.string().required("Designation is required"),
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
          <main className="flex flex-col gap-3">
            {/* Title Description */}
            <Field type="text" name="title" label="Title" />
            <Field type="text" name="designation" label="Designation" />
            <Field type="textarea" name="description" label="Description" />

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

export default TeamForm;
