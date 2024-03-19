"use client";
import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

const validationSchema = Yup.object().shape({
  Password: Yup.string()
    .matches(passwordRules, { message: "Make sure characters are correct " })
    .required("Required"),
  NewPassword: Yup.string()
    .matches(passwordRules, {
      message:
        "Make sure characters are correct",
    })
    .required("Required"),
  ConfirmPassword: Yup.string()
    .oneOf([Yup.ref("NewPassword"), null], "Passwords must match")
    .required("Required"),
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
        initialValues={{ Password: "", NewPassword: "", ConfirmPassword: "" }}
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
              <div>
              <label className="text-sm text-text">
                  <ul className="list-inside list-none">
                    <li>Your password must have:</li>
                  </ul>
                  <ul className="list-inside list-disc">
                    <li>8 characters</li>
                    <li>1 upper case letter</li>
                    <li>1 lower case letter</li>
                    <li>1 numeric digit</li>
                  </ul>
                </label>
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
