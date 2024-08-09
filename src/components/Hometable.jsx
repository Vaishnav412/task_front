import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Container, Col, Row } from 'react-bootstrap';
import { deleteData, getAllData } from '../services/allApi';
import Header from '../pages/Header';






function Hometable() {

    // const navigate = useNavigate()

    const [getData, setgetData] = useState([])
    console.log(getData);

    useEffect(() => {
        getAllDatas();

    }, [])

    const getAllDatas = async () => {
        const response = await getAllData()
        console.log(response);
        setgetData(response.data)

    }

    const removeData = async (id) => {
        const response = await deleteData(id)
        // console.log(id);

        if (response.status === 200) {
            getAllDatas();
        } else {
            alert("delete error")
        }

    }

    const userId = localStorage.getItem("user")

    return (
        <>

            <Header />


            <Container fluid className='p-4' style={{marginTop:"80px"}}>
                <Row className='g-4'>

                    {

                        getData.map((item) => (
                            <Col xs={12} sm={6} md={4}>


                                <Card className='cards rounded text-white mb-4'>
                                    <Card.Body>
                                        <Card.Title>{item.title}</Card.Title>
                                        <Card.Text>
                                            {item.description.slice(0, 25)}
                                        </Card.Text>
                                        <Button className={item.status === "COMPLETE" ? "btn btn-success" : "btn btn-warning"} >TASK {item.status}</Button>
                                        <div className='d-flex justify-content-between mt-4'>
                                           <div>
                                                <Link to={`/${userId}/edit/${item._id}`}>
                                                    <Button variant="secondary" className='me-2'>
                                                        <i className="fa-solid fa-pen-to-square"></i>
                                                    </Button>
                                                </Link>
                                               <Link to={`/${userId}/view/${item._id}`}>
                                                    <Button variant='success'>
                                                        <i className="fa-solid fa-eye"></i>
                                                    </Button>
                                               </Link>
                                           </div>

                                           <div>
                                                <Button onClick={() => removeData(item._id)} variant="warning">
                                                    <i className="fa-solid fa-trash"></i>
                                                </Button>
                                           </div>
                                        </div>
                                       
                                    </Card.Body>
                                </Card>
                            </Col>

                        ))
                    }



                    <Col xs={12} sm={6} md={4}>
                        {/* Link to trigger modal */}
                        <Link to={`/${userId}/add`}>
                            <Card className='cardadd rounded text-white mb-4'>
                                <Card.Body>
                                    <img width={'80px'} className='img' src="https://cdn.iconscout.com/icon/premium/png-256-thumb/plus-button-3199225-2663592.png?f=webp&w=256" alt="Add" />
                                </Card.Body>
                            </Card>
                        </Link>

                    </Col>

                </Row>
            </Container>
        </>
    )
}

export default Hometable