"use client";
import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button } from "@/components/ui/button";


const validationSchema = Yup.object().shape({
  Password: Yup.string().required("The Password is required"),
  NewPassword: Yup.string().required("The New Password is required")
    .min(8, "The new password must be at least 8 characters long")
    .required("The new password is required"),
  ConfirmPassword: Yup.string()
    .min(8, "The confirm password must be at least 8 characters long")
    .required("The confirm password is required"),
});

export default function PasswordForm() {
  return (
    <div className="w-full flex flex-col gap-16">
      <div>
        <h2 className="text-[40px] font-bold leading-[48px] break-words text-white">
          Password
        </h2>
      </div>
      <Formik
        initialValues={{ Password: "", NewPassword: "", ConfirmPassword: ""}}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {() => (
          <Form className="flex flex-col gap-16">
            <div className="flex flex-row gap-16 w-11/12">
              <div className="flex flex-col w-1/2 gap-2">
                <label className="text-[16] text-text ">Old Password</label>
                <Field
                  name="Password"
                  type="text"
                  placeholder="Luis"
                  className="w-full p-3 rounded-xl border border-secondary-300 bg-transparent"
                />
                <ErrorMessage
                  name="Password"
                  component="div"
                  className="text-danger-400/90"
                />
                <div className="flex flex-col w-6/12 gap-2 inset-y-0 right-0">
                  <Button
                    className="text-base w-full p-0 rounded-md border-secondary-300 text-text bg-trasparent border focus:text-black focus:bg-white hover:text-black hover:bg-white"
                    type="submit"
                  >
                    Forgot Password
                  </Button>
                </div>
              </div>
            </div>

            <div className="flex flex-row gap-16 justify-items-end justify-self-end">
              <div className="flex flex-col w-1/2 gap-2">
                <label className="text-[16] text-text ">New Password</label>
                <Field
                  name="NewPassword"
                  type="text"
                  placeholder="New Password"
                  className="w-full p-3 rounded-xl border border-secondary-300 bg-transparent"
                />
                <ErrorMessage
                  name="NewPassword"
                  component="div"
                  className="text-danger-400/90"
                />
              </div>
              <div className="flex flex-col w-1/2 gap-2">
                <label className="text-[16] text-text ">Confirm Password</label>
                <Field
                  name="ConfirmPassword"
                  type="text"
                  placeholder="Confirm Password"
                  className="w-full p-3 rounded-xl border border-secondary-300 bg-transparent"
                />
                <ErrorMessage
                  name="ConfirmPassword"
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
