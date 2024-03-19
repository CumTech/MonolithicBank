"use client";
import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("The name is required"),
  lastName: Yup.string().required("The last name is required"),
  email: Yup.string()
    .email("The email is not valid")
    .required("The email is required"),
  phone: Yup.string()
    .min(10, "The phone number must be at least 10 characters long")
    .max(10, "The phone number can't exceed 20 characters")
    .required("The phone number is required"),
});

export default function UserInfoForm() {
  return (
    <div className="w-full flex flex-col gap-16">
      <div>
        <h2 className="text-[40px] font-bold leading-[48px] break-words text-white ">
          Basic Information
        </h2>
      </div>
      <Formik
        initialValues={{ name: "", lastName: "", email: "", phone: "" }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {() => (
          <Form className="flex flex-col gap-16">
            <div className="flex flex-row gap-16">
              <div className="flex flex-col w-1/2 gap-2">
                <label className="w-[376px] text-zinc-400 text-base font-medium font-['Kode Mono'] leading-normal tracking-tight">First Name</label>
                <Field
                  name="name"
                  type="text"
                  placeholder="Luis"
                  className="w-full p-3 rounded-xl border border-secondary-300 bg-transparent"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-danger-400/90"
                />
              </div>
              <div className="flex flex-col w-1/2 gap-2">
                <label className="w-[133px] h-5 text-white text-base font-medium font-['Kode Mono'] leading-normal tracking-tight">Last Name</label>
                <Field
                  name="lastName"
                  type="text"
                  placeholder="Alferez"
                  className="w-full p-3 rounded-xl border border-secondary-300 bg-transparent"
                />
                <ErrorMessage
                  name="lastName"
                  component="div"
                  className="text-danger-400/90"
                />
              </div>
            </div>

            <div className="flex flex-row gap-16 justify-items-end justify-self-end">
              <div className="flex flex-col w-1/2 gap-2">
                <label className="w-[133px] h-5 text-white text-base font-medium font-['Kode Mono'] leading-normal tracking-tight ">E-mail</label>
                <Field
                  name="email"
                  type="email"
                  placeholder="hello@email.com"
                  className="w-full p-3 rounded-xl border border-secondary-300 bg-transparent"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-danger-400/90"
                />
              </div>
              <div className="flex flex-col w-1/2 gap-2">
                <label className="w-[133px] h-5 text-white text-base font-medium font-['Kode Mono'] leading-normal tracking-tight">Phone Number</label>
                <Field
                  name="phone"
                  type="phone"
                  placeholder="mx +52 5522334455"
                  className="w-full p-3 rounded-xl border border-secondary-300 bg-transparent"
                />
                <ErrorMessage
                  name="phone"
                  component="div"
                  className="text-danger-400/90"
                />
                <div className="flex flex-col w-1/3 gap-2 inset-y-0 right-0">
                  <Button
                    className="text-base w-full p-0 rounded-2xl border-secondary-300 text-text bg-trasparent border focus:text-black focus:bg-white hover:text-black hover:bg-white"
                    type="submit"
                  >
                    Validate
                  </Button>
                </div>
              </div>
            </div>
            
            <Separator/>

            <div className="flex flex-row gap-4">
              <div className="flex flex-col w-1/2 gap-2">
                <Button
                  className="text-secondary-default bg-primary-default border h-16 hover:opacity-80"
                  type="submit"
                >
                  Save Changes
                </Button>
              </div>
              <div className="flex flex-col w-1/2 gap-2 ">
                <Button
                  variant="outline"
                  className="border-secondary-300 h-16"
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
