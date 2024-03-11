'use client';
import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {Button} from "@/components/ui/button";

const validationSchema = Yup.object().shape({
    name: Yup.string()
        .required('El nombre es requerido'),
    lastName: Yup.string()
        .required('El apellido es requerido'),
    email: Yup.string()
        .email('El email no es válido')
        .required('El email es requerido'),
    password: Yup.string()
        .min(6, 'La contraseña debe tener al menos 6 caracteres')
        .required('La contraseña es requerida'),
    curp: Yup.string()
        .length(18, 'El CURP debe tener 18 caracteres')
        .required('El CURP es requerido'),
});

export default function SignUpForm() {
    return (
        <div className="flex h-screen justify-center items-center">
            <Formik
                initialValues={{ name: '', lastName: '', email: '', password: '', curp: '' }}
                validationSchema={validationSchema}
                onSubmit={values => {
                    console.log(values);
                }}
            >
                {() => (
                    <Form className="flex flex-col gap-4">
                        <div className="flex flex-row gap-4">
                            <div className="flex flex-col gap-2">
                                <label>
                                    Name
                                    <Field name="name" type="text" placeholder="Nombre"
                                           className="w-full p-3 rounded-xl border border-secondary-300 bg-transparent"/>
                                </label>
                                <ErrorMessage name="name" component="div" className="text-danger-400/90"/>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label>
                                    Last Name
                                    <Field name="lastName" type="text" placeholder="Apellido"
                                           className="w-full p-3 rounded-xl border border-secondary-300 bg-transparent"/>
                                </label>
                                <ErrorMessage name="lastName" component="div" className="text-danger-400/90"/>
                            </div>
                        </div>

                        <label>
                            Email
                            <Field name="email" type="email" placeholder="Email"
                                   className="w-full p-3 rounded-xl border border-secondary-300 bg-transparent"/>
                        </label>
                        <ErrorMessage name="email" component="div" className="text-danger-400/90"/>

                        <label>
                            Password
                            <Field name="password" type="password" placeholder="Contraseña"
                                   className="w-full p-3 rounded-xl border border-secondary-300 bg-transparent"/>
                        </label>
                        <ErrorMessage name="password" component="div" className="text-danger-400/90" />

                        <label>
                            CURP
                            <Field name="curp" type="text" placeholder="CURP" className="w-full p-3 rounded-xl border border-secondary-300 bg-transparent" />
                        </label>
                        <ErrorMessage name="curp" component="div" className="text-danger-400/90" />

                        <div className="flex justify-center">
                            <Button
                                type="submit"
                                className="w-fit"
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