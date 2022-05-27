import React, { useState } from 'react';
import { Button, FormGroup, Input, Label } from 'reactstrap';
import * as yup from 'yup';
import { Form, Formik, useFormik } from 'formik';

function Login(props) {

    const [userType, setUserType] = useState('Login')
    // const [Reset, setReset] = useState(false)

    let login = {
        email: yup.string().email("Please enter valid email").required("Please enter Email"),
        password: yup.string().required("Please enter password")
    }

    let Signup = {
        name: yup.string().required("Please enter your name"),
        email: yup.string().email("Please enter valid email").required("Please enter Email"),
        password: yup.string().required("Please enter password")
    }

    let resetPass = {
        email: yup.string().email("Please enter valid email").required("Please enter Email"),
    }

    let schema, initialVal;

    if (userType === 'Login') {
        schema = yup.object().shape(login);
        initialVal = {
            email: '',
            password: ''
        }
    }
    else if (userType === 'Signup') {
        schema = yup.object().shape(Signup);
        initialVal = {
            name: '',
            email: '',
            password: ''
        }
    }
    else if (userType === 'forgotPassword') {
        schema = yup.object().shape(resetPass);
        initialVal = {
            email: ''
        }
    }


    const formik = useFormik({
        initialValues: initialVal,
        validationSchema: schema,
        onSubmit: values => {
            if (userType === 'Login') {
                console.log('Successfully Login 👍');
            } else if (userType === 'Signup') {
                console.log('Successfully Signup 👍');
            } else if (userType === 'forgotPassword') {
                console.log('Your OTP is : 852002');
            }
            // alert(JSON.stringify(values, null, 2));
        }
    });

    //   console.log(formik.errors.email);

    return (
        <main id="main">
            <section id="appointment" className="appointment">
                <div className="container">
                    <div className="section-title">
                        {
                            userType === 'forgotPassword' ?
                                <h2>Forgot Password</h2> :
                                userType === 'Login' ?
                                    <h2>Login</h2>
                                    :
                                    <h2>Sign Up</h2>
                        }
                    </div>
                    <Formik values={formik}>
                        <Form onSubmit={formik.handleSubmit} className="php-email-form">
                            <div className="row flex-column align-items-center">
                                {
                                    userType === 'forgotPassword' ?
                                        <div className="col-md-4 form-group mt-3 mt-md-0">
                                            <input type="email" className="form-control" name="email" id="email" placeholder="Enter email" />
                                            {
                                                formik.errors.email ? <p>{formik.errors.email}</p>
                                                    :
                                                    null
                                            }
                                            <div className="validate" />
                                        </div> :
                                        null
                                }
                                {
                                    userType === 'Signup' ?
                                        <div className="col-md-4 form-group">
                                            <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" onChange={formik.handleChange} />
                                            <div className="validate" />
                                            {
                                                formik.errors.name ? <p>{formik.errors.name}</p>
                                                    :
                                                    null
                                            }
                                        </div>
                                        :
                                        null
                                }
                                {
                                    (userType === 'Login' || userType === 'Signup') ?
                                        <>
                                            <div className="col-md-4 form-group mt-3 mt-md-0">
                                                <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" onChange={formik.handleChange} />
                                                {
                                                    formik.errors.email ? <p>{formik.errors.email}</p>
                                                        :
                                                        null
                                                }
                                                <div className="validate" />
                                            </div>
                                            <div className="col-md-4 form-group mt-3 mt-md-0">
                                                <input type="password" className="form-control" name="password" id="password" placeholder="Password" onChange={formik.handleChange} />
                                                {
                                                    formik.errors.password ? <p>{formik.errors.password}</p>
                                                        :
                                                        null
                                                }
                                                <div className="validate" />
                                            </div>
                                        </>
                                        :
                                        null
                                }

                            </div>

                            {
                                userType === 'forgotPassword' ?
                                    <>
                                        <div className="text-center"><button className='appointment-btn border-0 m-0' type="submit">Send OTP</button></div>
                                        <div className="text-center"><button className='appointment-btn border-0 ms-0 mt-3' type="button" onClick={() => setUserType('Login')}>Login</button></div>
                                    </>
                                    :
                                    userType === 'Login' ?
                                        <>
                                            <div className="text-center"><button className='appointment-btn border-0 m-0' type="submit">Login</button></div>
                                            <div className="text-center"><button className='appointment-btn border-0 ms-0 mt-3' type="button" onClick={() => setUserType('forgotPassword')} >Forgot Password</button></div>
                                            <div className='text-center pt-4'>
                                                <p>Create a new account </p><button className='appointment-btn border-0 m-0' type="button" onClick={() => setUserType('Signup')}>Sign Up</button>
                                            </div>
                                        </>
                                        :
                                        <>
                                            <div className="text-center"><button className='appointment-btn border-0 m-0' type="submit">Sign Up</button></div>
                                            <div className='text-center pt-4'>
                                                <p>Already have an account </p><button className='appointment-btn border-0 m-0' type="button" onClick={() => setUserType('Login')}>Login</button>
                                            </div>
                                        </>
                            }
                        </Form>
                    </Formik>
                </div>
            </section>
        </main>
    );
}


export default Login;