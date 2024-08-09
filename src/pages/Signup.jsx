import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { register } from '../services/allApi';
import {  useNavigate} from 'react-router-dom';

function Signup() {


    const navigate=useNavigate()
    const [registerData, setregisterData] = useState({
        username: "", email: "", password: ""
    })


    const getsetregisterData = (e) => {
        const { name, value } = e.target;
        setregisterData({ ...registerData, [name]: value })
    }


    const handleSubmit = async (e) => {
        e.preventDefault();

        const { username, email, password } = registerData;

        console.log(username, email, password);

        if (!username || !email || !password) {
            alert("fill the form")
        }
        else {
            try {
                const data = { username, email, password }

                //  api call

                const response = await register(data)
                console.log(response);
                if (response.status === 200) {
                    
                
                    
                    setregisterData({
                        username: "", email: "", password: ""
                    })
                    navigate('/')
                }
                else {
                    alert("failed to register")
                }
            }
            catch (err) {
                console.log(err);

            }
        }

    }
    return (
        <>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-6 col-lg-5 mt-5">
                        <div className=" rounded p-3 bg-dark text-white ">
                            <h2 className="text-center fw-bolder rounded">SIGN UP</h2>
                            <Form onSubmit={handleSubmit} className="p-4 rounded">

                                <FloatingLabel controlId="floatingUsername" label="Username" className='mb-3'>
                                    <Form.Control name='username' onChange={getsetregisterData} type="text" placeholder="Username" value={registerData.value} />
                                </FloatingLabel>
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Email"
                                    className="mb-3 "
                                >
                                    <Form.Control name='email' onChange={getsetregisterData} type="email" placeholder="name@example.com" value={registerData.value} />
                                </FloatingLabel>
                                <FloatingLabel controlId="floatingPassword" label="Password" className='mb-3'>
                                    <Form.Control name='password' onChange={getsetregisterData} type="password" placeholder="Password" value={registerData.value} />
                                </FloatingLabel>

                                <div className="d-flex justify-content-center">
                                    <Button type='submit' className="mt-4 w-100 fw-bolder" variant="success" size="lg">
                                        SIGN UP
                                    </Button>
                                </div>

                            </Form>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Signup