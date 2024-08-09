import React, { useEffect, useState } from 'react'
import Header from '../pages/Header'
import Card from 'react-bootstrap/Card';
import { getAllData } from '../services/allApi';



function Home() {

  const [getAlldata, setgetAlldata] = useState([])

  useEffect(() => {
    getdatacount()
  }, [])




  const getdatacount = async () => {
    const response = await getAllData()
    setgetAlldata(response.data)
  }



  return (
    <>

      <Header />

      <div className='home' >
        <Card className='homecard rounded text-white mb-4 w-50'>
          <Card.Body>
            <h1 style={{ paddingLeft: "45%" }}>{getAlldata.length}</h1>
            <h2>TASK  FORMED</h2>
          </Card.Body>
        </Card>
      </div>




    </>
  )
}

export default Home