import React, { useEffect, useState } from 'react'
import { Form, Container} from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getAllData, updateData } from '../services/allApi';
import Header from './Header';




function Edit() {


    const navigate = useNavigate()

    const [normalinputs, setnormalinputs] = useState({
        title: "", description: "", status: ""
    })

    useEffect(() => {

        const getData = async () => {
            const { data } = await getAllData("")
            console.log(data);
            let existingData = data.find(item => item._id === id)
            console.log(existingData);
            setnormalinputs(existingData)
        }
        getData()
    }, [])
    const { id } = useParams()
    console.log(id);

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
                const response = await updateData(id, data);
                console.log(response);

                if (response.status === 200) {
                    navigate(`/${userId}/alltask`);

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
            <Container fluid className='dataform p-4'>


                <div className='adddata'>

                    <Form onSubmit={handleSubmit}>

                        <Form.Group className='mb-2' controlId="exampleForm.ControlInput1">
                            <Form.Label className='text-white'>Title</Form.Label>
                            <Form.Control onChange={getsetAddData} name='title' type="text" placeholder="Title" required value={normalinputs.title} />
                        </Form.Group>

                        <Form.Group className='mb-3' controlId="exampleForm.ControlTextarea1">
                            <Form.Label className='text-white'>Description</Form.Label>
                            <Form.Control onChange={getsetAddData} name='description' as="textarea" rows={3} required value={normalinputs.description} />
                        </Form.Group>

                        <Form.Group className='mb-2'>
                            <Form.Label className='text-white'>Select Status</Form.Label>
                            <Form.Check className='text-white' onChange={getsetAddData} type="radio" checked={normalinputs.status==="COMPLETE"?true:false} name='status' value="COMPLETE" label="Complete" />
                            <Form.Check className='text-white' onChange={getsetAddData} type="radio" checked={normalinputs.status==="INCOMPLETE"?true:false} name='status' value="INCOMPLETE" label="Incomplete" />
                        </Form.Group>
                        <div className='d-flex justify-content-between'>
                          <Link to={`/${userId}/alltask`}>
                               <Button variant='secondary'>
                                Cancel
                               </Button>
                          </Link>
                            <Button variant="success" type="submit">
                                Update
                            </Button>
                            
                        </div>


                    </Form>

                </div>



            </Container>





        </>
    )
}

export default Edit