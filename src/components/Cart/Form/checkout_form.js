import React, {useEffect, useState} from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import HeaderCart from "../HeaderCart/header_cart";
import Footer from "../../Home/Footer/footer";
import Bottom from "../../Home/Bottom/bottom";

const CheckoutSchema = Yup.object().shape({
    firstName: Yup.string()
        .required('First name is required')
        .matches(/^[a-zA-Z\s]+$/, 'First name must not contain invalid characters')
        .matches(/^[A-Z]/, 'First name must contain at least one uppercase letter')
        .min(3, 'First name must be at least 3 characters'),
    lastName: Yup.string()
        .required('Last name is required')
        .matches(/^[a-zA-Z\s]+$/, 'Last name must not contain invalid characters')
        .matches(/[A-Z]/, 'Last name must contain at least one uppercase letter')
        .min(3, 'Last name must be at least 3 characters'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    phoneNumber: Yup.string()
        .matches(/^[0-9]+$/, 'Invalid phone number')
        .min(10, 'Phone number must be at least 10 digits')
        .max(12, 'Phone number must be at most 12 digits')
        .required('Phone number is required'),
    address: Yup.string().required('Address is required')
        .matches(/^[a-zA-Z\s.,]+$/, 'Address must not contain invalid characters')
        .min(15, 'The address has to be at least 15 characters'),
});

const Checkout = () => {
    const navigate = useNavigate();
    const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);


    useEffect(() => {
        let timerId;

        if (isErrorModalOpen) {
            timerId = setTimeout(() => {
                setIsErrorModalOpen(false);
            }, 4000);
        }

        return () => {
            clearTimeout(timerId);
        };
    }, [isErrorModalOpen]);

    return (
        <div>
            <HeaderCart />
            <h1 className="checkout_header">Checkout</h1>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    phoneNumber: '',
                    address: '',
                }}
                validationSchema={CheckoutSchema}
                onSubmit={(values, { setSubmitting, errors, touched }) => {
                    if (errors && Object.keys(errors).length > 0 || touched && Object.values(touched).some(t => t)) {
                        setIsErrorModalOpen(true);
                        setTimeout(() => {
                            setIsErrorModalOpen(false);
                        }, 4000);
                    } else {
                        setIsErrorModalOpen(false);
                        navigate('/Success');
                    }
                    setSubmitting(false);
                }}
                validateOnChange={true}
                validateOnBlur={true}
            >
                {({ errors, touched }) => (
                    <Form className="forms">
                        <div className="first_name_form">
                            <label>First Name:</label>
                            <br />
                            <Field type="text" name="firstName" placeholder="Andrii" />
                            <ErrorMessage name="firstName" component="div" className="error" />
                        </div>
                        <br />
                        <div className="last_name_form">
                            <label>Last Name:</label>
                            <br />
                            <Field type="text" name="lastName" placeholder="Plish" />
                            <ErrorMessage name="lastName" component="div" className="error" />
                        </div>
                        <br />
                        <div className="email_form">
                            <label>Email:</label>
                            <br />
                            <Field type="email" name="email" placeholder="abrakadabra@gmail.com" />
                            <ErrorMessage name="email" component="div" className="error" />
                        </div>
                        <br />
                        <div className="phone_number_form">
                            <label>Phone number:</label>
                            <br />
                            <Field type="text" name="phoneNumber" placeholder="01234567890" />
                            <ErrorMessage name="phoneNumber" component="div" className="error" />
                        </div>
                        <br />
                        <div className="address_form">
                            <label>Address:</label>
                            <br />
                            <Field type="text" as="textarea" name="address" placeholder="с.Нижня Квасоля, вул.Шевченка, 46" />
                            <ErrorMessage name="address" component="div" className="error" />
                        </div>
                        <br />
                        {(isErrorModalOpen || Object.keys(errors).length > 0) && (
                            <div className="error-message">
                                Please, correctly write all fields.
                                <img src="/icons/warning.png" alt="warning_img" height="23px" width="23px"/>
                            </div>
                        )}
                        <div className="form_buttons">
                            <Link to="/Cart">
                                <button className="go_back_form" type="button">
                                    <span>Go Back</span>
                                </button>
                            </Link>
                            <button className="continue_cart_form" type="submit">
                                <span>Continue</span>
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
            <Bottom />
            <Footer />
        </div>
    );
};

export default Checkout;
