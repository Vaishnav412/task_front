import React, { useEffect, useState } from 'react'
import Header from './Header'
import { Button, Container } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import { getAllData } from '../services/allApi'


function Singleview() {


    const [getdata, setgetData] = useState({})

    const { id } = useParams()
    console.log(id);

    useEffect(() => {

        const getData = async () => {
            const { data } = await getAllData("")
            console.log(data);

            setgetData(data.find(item=>item._id===id))
        }

        getData();
    }, [])



    console.log(getdata);

   const userId=localStorage.getItem("user")





    return (
        <>
            <Header />

            <Container fluid className='dataform p-4'>

               <Link to={`/${userId}/alltask`}>
                    <div className='img'>
                     <img width={"60px"} src="https://i.postimg.cc/wvzw6NtB/arrow-left-circle-blue-512.png" alt="no image" />
                    </div>
               </Link>
                <div className='adddata mt-4'>
                    <div className='homecard'>

                        <h1>{getdata.title}</h1>

                        <h4>{getdata.description}</h4>

                        <Button className={getdata.status === "COMPLETE"? "btn btn-success":"btn btn-warning"}>{getdata.status}</Button>

                    </div>



                </div>
            </Container>
        </>
    )
}

export default Singleview