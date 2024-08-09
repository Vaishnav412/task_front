import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { login } from '../services/allApi';
import { useNavigate } from 'react-router-dom';


function Login() {

    const navigate=useNavigate()

const [loginData, setloginData]=useState({
    email:"",password:""
})

const getsetloginData=(e)=>{
  const {name, value}=e.target;
  setloginData({...loginData,[name] : value})
}

const handleSubmit=async(e)=>{
  e.preventDefault();

  const { email, password}=loginData;
  if(!email || !password){
    alert("Fill the form")
  }
  else{
    try{
        const data ={email, password}

        // api call

        const response = await login(data)
        console.log(response);
        if(response.status === 200){
            setloginData({
                email:"",password:""
            })
            const user=response.data.existingUser
            // console.log(user._id);
            localStorage.setItem("user",user._id)
            const userId=localStorage.getItem("user")
           navigate(`/${userId}`)
        }
        else{
            alert("Failed to login")
        }
        
    }
    catch(err){
      console.log(err);
      
    }
  }

}


    return (
        <>
<div className='loginpage'>
    
                <div className="container mt-5">
                    <div className="row justify-content-center">
                        <div className="col-md-6 col-lg-5 mt-5">
                            <div className=" rounded p-3 bg-dark text-white ">
                                <h2 className="text-center fw-bolder rounded">LOG IN</h2>
                                <Form onSubmit={handleSubmit} className="p-4 rounded">
                                    <FloatingLabel
                                        controlId="floatingInput"
                                        label="Email"
                                        className="mb-3 "
                                    >
                                        <Form.Control onChange={getsetloginData} name='email' type="email" placeholder="name@example.com" value={loginData.value}/>
                                    </FloatingLabel>
                                    <FloatingLabel controlId="floatingPassword" label="Password">
                                        <Form.Control onChange={getsetloginData} name='password' type="password" className='text-dark'  placeholder="Password" value={loginData.value} />
                                    </FloatingLabel>
                                    <div className="d-flex justify-content-center">
                                        <Button type='submit' className="mt-4 w-100 fw-bolder" variant="success" size="lg">
                                            LOG IN
                                        </Button>
                                    </div>
                                    <p className="m-0 text-secondary text-center mt-4">
                                        Don't have an account? <a href="/signup" className="link-primary text-decoration-none">Sign up</a>
                                    </p>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
    
</div>



        </>
    )
}

export default Login