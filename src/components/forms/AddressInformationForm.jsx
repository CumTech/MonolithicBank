"use client";
import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button } from "@/components/ui/button";

const validationSchema = Yup.object().shape({
  street: Yup.string().required("The street is required"),
  city: Yup.string().required("The city is required"),
  state: Yup.string().required("The state is required"),
  country: Yup.string().required("The country is required"),
  postalcode: Yup.string()
    .min(5, "The postal code must be at least 5 characters long")
    .required("The postal code is required"),
});

export default function AddressInformationForm() {
  return (
    <div className="w-full flex flex-col gap-16">
      <div>
        <h2 className="text-[40px] font-bold leading-[48px] break-words text-white">
          Address Information
        </h2>
      </div>
      <Formik
        initialValues={{ street: "", city: "", state: "", country: "", postalcode: "" }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {() => (
          <Form className="flex flex-col gap-8">
            <div className="flex flex-col w-full gap-2">
                <label className="text-[16] text-text ">Street</label>
                <Field
                  name="street"
                  type="text"
                  placeholder="st. monica, 205"
                  className="w-full p-3 rounded-xl border border-secondary-300 bg-transparent"
                />
                <ErrorMessage
                  name="street"
                  component="div"
                  className="text-danger-400/90"
                />
              </div>
            <div className="flex flex-row gap-16">
              <div className="flex flex-col w-1/2 gap-2">
                <label className="text-[16] text-text ">City</label>
                <Field
                  name="city"
                  type="text"
                  placeholder="Los Angeles"
                  className="w-full p-3 rounded-xl border border-secondary-300 bg-transparent"
                />
                <ErrorMessage
                  name="city"
                  component="div"
                  className="text-danger-400/90"
                />
              </div>
              <div className="flex flex-col w-1/2 gap-2">
                <label className="text-[16] text-text ">State</label>
                <Field
                  name="state"
                  type="text"
                  placeholder="California"
                  className="w-full p-3 rounded-xl border border-secondary-300 bg-transparent"
                />
                <ErrorMessage
                  name="state"
                  component="div"
                  className="text-danger-400/90"
                />
              </div>
            </div>

            <div className="flex flex-row gap-16 justify-items-end justify-self-end">
              <div className="flex flex-col w-1/2 gap-2">
                <label className="text-[16] text-text ">Country</label>
                <Field
                  name="country"
                  type="text"
                  placeholder="United States"
                  className="w-full p-3 rounded-xl border border-secondary-300 bg-transparent"
                />
                <ErrorMessage
                  name="country"
                  component="div"
                  className="text-danger-400/90"
                />
              </div>
              <div className="flex flex-col w-1/2 gap-2">
                <label className="text-[16] text-text ">Postal Code</label>
                <Field
                  name="postalcode"
                  type="number"
                  placeholder="20000"
                  className="w-full p-3 rounded-xl border border-secondary-300 bg-transparent"
                />
                <ErrorMessage
                  name="postalcode"
                  component="div"
                  className="text-danger-400/90"
                />
              </div>
            </div>
            <div className="flex flex-row gap-4">
              <div className="flex flex-col w-1/2 gap-2">
                <Button
                  className="text-text bg-trasparent border h-16 focus:text-black focus:bg-white hover:text-black hover:bg-white"
                  type="submit"
                >
                  Save Changes
                </Button>
              </div>
              <div className="flex flex-col w-1/2 gap-2 ">
                <Button
                  className="text-text bg-trasparent border h-16 focus:text-black focus:bg-white hover:text-black hover:bg-white"
                  type="submit"
                >
                  Discard Changes
                </Button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
