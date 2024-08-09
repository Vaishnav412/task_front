import React, { useState } from 'react'
import { Form, Container } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import { addData } from '../services/allApi';
import { Link, useNavigate } from 'react-router-dom';
import Header from './Header';


function Add() {

    const navigate = useNavigate()

    const [normalinputs, setnormalinputs] = useState({
        title: "", description: "", status: ""
    })

    const getsetAddData = (e) => {
        const { name, value } = e.target;
        setnormalinputs({ ...normalinputs, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { title, description, status } = normalinputs;

        if (!title || !description || !status) {
            alert("Please fill out all fields.");
        } else {
            const data = new FormData();
            data.append("title", title);
            data.append("description", description);
            data.append("status", status);

            try {
                const response = await addData(data);
                console.log(response);

                if (response.status === 200) {
                    setnormalinputs({ title: "", description: "", status: "" });
                    navigate('/home');

                } else {
                    alert("Request Failed");
                }
            } catch (error) {
                console.error("Error:", error);
                alert("An error occurred. Please try again.");
            }
        }
    };

    const userId=localStorage.getItem("user")

    return (
        <>

        <Header/>

            <Container fluid className='dataform p-4' >

               

                        <div className='adddata'>

                            <Form onSubmit={handleSubmit}>

                                <Form.Group className='mb-2' controlId="exampleForm.ControlInput1">
                                    <Form.Label className='text-white'>Title</Form.Label>
                                    <Form.Control onChange={getsetAddData} name='title' type="text" placeholder="Title" required value={normalinputs.value}/>
                                </Form.Group>

                                <Form.Group className='mb-3' controlId="exampleForm.ControlTextarea1">
                                    <Form.Label className='text-white'>Description</Form.Label>
                                    <Form.Control onChange={getsetAddData} name='description' as="textarea" rows={3} required value={normalinputs.value} />
                                </Form.Group>

                                <Form.Group className='mb-2'>
                                    <Form.Label className='text-white'>Select Status</Form.Label>
                                    <Form.Check className='text-white' onChange={getsetAddData}  type="radio" name='status' value="COMPLETE" label="Complete" />
                                    <Form.Check className='text-white' onChange={getsetAddData}   type="radio" name='status' value="INCOMPLETE" label="Incomplete" />
                                </Form.Group>
                                <div className='d-flex justify-content-between'>
                                <Link to={`/${userId}/alltask`}>
                                    <Button variant="secondary">
                                        Close
                                    </Button>
                                    </Link>
                                        <Button variant="success" type="submit">
                                            Add
                                        </Button>

                                </div>
                            </Form>
                        </div>
            </Container>
        </>
    )
}

export default Add