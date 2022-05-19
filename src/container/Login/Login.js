import React from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';

function Login(props) {
    return (
        <div>

            <section>



                <div className='container'>

                    <div className='row'>
                        <div className='col-3'></div>
                        <div className='col-6'>
                            <h2 className='text-center'>Login</h2>
                            <Form>
                                <FormGroup>
                                    <Label for="exampleEmail">
                                        Email
                                    </Label>
                                    <Input
                                        id="exampleEmail"
                                        name="email"
                                        placeholder="Enter your Email"
                                        type="email"
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="examplePassword">
                                        Password
                                    </Label>
                                    <Input
                                        id="examplePassword"
                                        name="password"
                                        placeholder="password"
                                        type="password"
                                    />
                                </FormGroup>
                            </Form>
                            <Button
                                color="primary"
                            >
                                Submit
                            </Button>
                        </div>
                        <div className='col-3'></div>
                    </div>



                </div>
            </section>
        </div>
    );
}

export default Login;