'use client';
import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Button } from "@/components/ui/button";

const validationSchema = Yup.object().shape({
    email: Yup.string()
        .email('El email no es válido')
        .required('El email es requerido'),
    password: Yup.string()
        .min(6, 'La contraseña debe tener al menos 6 caracteres')
        .required('La contraseña es requerida'),
});

export default function LogInForm() {
    return (
        <div className="w-3/5 flex flex-col gap-5 items-center">
            <div className="flex flex-col w-2/3">
                <h2 className="text-primary-default text-2xl leading-9">
                    Hello again!
                </h2>
                <h2 className="text-[64px] leading-[96px]">
                    Welcome back
                </h2>
            </div>
            <Formik
                initialValues={{ email: '', password: '' }}
                validationSchema={validationSchema}
                onSubmit={values => {
                    console.log(values);
                }}
            >
                {() => (
                    <Form className="flex flex-col gap-9 w-2/3">
                        <div className="flex flex-col w-3/5 gap-2">
                            <Field name="email" type="email" placeholder="Email"
                                className="w-full p-3 rounded-xl border border-secondary-300 bg-transparent" />
                            <ErrorMessage name="email" component="div" className="text-danger-400/90" />
                        </div>
                        <div className="flex flex-col w-3/5 gap-2">
                            <Field name="password" type="password" placeholder="Contraseña"
                                className="w-full p-3 rounded-xl border border-secondary-300 bg-transparent" />
                            <ErrorMessage name="password" component="div" className="text-danger-400/90" />
                        </div>
                        <div className="flex  w-2/3 justify-center">
                            <Button
                                type="submit"
                            >
                                Create Account
                            </Button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
}