import React, { useEffect, useState } from 'react'
import './Studentdata.css'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router';

function getData(){

  const data = localStorage.getItem("empData");

  if(data != null){

      return JSON.parse(data);

  }else{

      return [];
  }

}


function Studentdata() {

 


    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState({

        fname:'',
        lname:'',
        email:'',
        password:'',
        std : '',
        contact:'',
    

    })

    const [isSubmit, setIsSubmit] = useState(false);


    const handleSubmit =(e) =>{

        e.preventDefault();

        console.log("Data >>>>", inputValue);

        const gData = getData();
        console.log(gData);

        const uid = gData.length + 101;

        const newInput = {...inputValue, id:uid }
        
        const nData = [...gData, newInput];
        localStorage.setItem("empData", JSON.stringify(nData));
        
        setInputValue({

          fname:'',
          lname:'',
          email:'',
          password:'',
          cource : '',
          contact:'',
      
  
      })
        navigate('/viewData');
        
    }

    const handleChange = (e) =>{

        const name  = e.target.name;
        const value = e.target.value;
        
        setInputValue({...inputValue, [name]: value});

    }

  return (

       
        <Container>
                <Row className='align-items-center'>
                    <Col className='col-6'>
                        <h2 className='mb-3'>
                            Student Regitration
                        </h2>
                        <Form onSubmit={handleSubmit}>
                            <Row className='justify-content-center'>

                                <Form.Group className="mb-3 col-6" controlId="formBasicEmail">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter First Name"  name='fname' value={inputValue.fname} onChange={handleChange}/>
                                </Form.Group>

                                <Form.Group className="mb-3 col-6" controlId="formBasicEmail">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Last Name" name='lname' value={inputValue.lname} onChange={handleChange}/>
                                </Form.Group>

                                <Form.Group className="mb-3 col-6" controlId="formBasicEmail">
                                    <Form.Label>Personal Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter personal email" name='email' value={inputValue.email} onChange={handleChange}/>
                                </Form.Group>

        
                                <Form.Group className="mb-3 col-6" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" name='password' value={inputValue.password} onChange={handleChange}/>
                                </Form.Group>

                                <Form.Group className="mb-3 col-6" controlId="formBasicPassword">
                                    <Form.Label>Contact</Form.Label>
                                    <Form.Control type="text" placeholder="Contact No" name='contact' value={inputValue.contact} onChange={handleChange}/>
                                </Form.Group>

                                
                                <Form.Group className="mb-3 col-6" controlId="formBasicPassword">
                                    <Form.Label>cource</Form.Label>
                                    <Form.Control type="text" placeholder="standard" name='cource' value={inputValue.cource} onChange={handleChange}/>
                                </Form.Group>


                                <Form.Group className="mb-3">
                                    <Form.Label>Gender</Form.Label>
                                    <div className='d-flex'>
                                        {
                                            ['Male', 'Female'].map((label) => {
                                                return (
                                                    <div className='col-2'>
                                                        <Form.Check type='radio' label={label} name="gender" value={label} onChange={handleChange}/>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </Form.Group>

                                

                                <div className='col-3 text-center'>
                                    <Button variant="primary" type="submit">
                                        Submit
                                    </Button>
                                </div>
                            </Row>
                        </Form>
                    </Col>
                    
                </Row>
            </Container>

        /* <form onSubmit={handleSubmit}>
               
                <label id="icon"><i className="icon-user"></i></label>
                <input type="text"  id="name" placeholder="Frist Name" name='fname' onChange={handleChange} value={inputValue.fname}/>
                <label id="icon" ><i className="icon-user"></i></label>
                <input type="text"  id="name" placeholder="Last Name" name='lname' onChange={handleChange} value={inputValue.lname}/>
                <label id="icon" ><i className="icon-envelope "></i></label>
                <input type="text" id="name" placeholder="Email" name='email' onChange={handleChange} value={inputValue.email}/>
                <label id="icon" ><i className="icon-shield"></i></label>
                <input type="password"  id="name" placeholder="Password" name='password' onChange={handleChange} value={inputValue.password}/>
                <label id="icon" ><i className="icon-shield"></i></label>
                <input type="text"  id="name" placeholder="standard" name='std' onChange={handleChange} value={inputValue.std}/>
                <label id="icon" ><i className="icon-shield"></i></label>
                <input type="text"  id="name" placeholder="Phone Number" name='contact' onChange={handleChange} value={inputValue.contact}/>
                <div className="gender text-align-center">
    

                            {
                            ['Male', 'Female'].map((type) => (
          
                                  <Form.Check // prettier-ignore
                                    type="radio"
                                    id={`${type}`}
                                    label={`${type}`}
                                    name='radio'
                                  />

                            
                              ))
                              }
                  

                               
                </div> 
                <button type='button' value='submit' className='btn btn-primary'>submit</button>
        </form> */

  )
}

export default Studentdata;