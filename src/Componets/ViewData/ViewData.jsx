import React, { useState } from 'react'
import { Container, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router';

const getData = () => {

  const data = localStorage.getItem("empData");

  if (data != null) {

      return JSON.parse(data);

  }
  else {

      return [];
  }

}

function ViewData() {


  const [empData, setEmpData] = useState(getData());
  const navigate = useNavigate();
//   const [Isdelete, setDelete] = useState(false);


  const handleEdit = (id,index) =>{
    const data = getData();
    const singlerecord = data.filter((d) => {
      return d.id === id;
    })
    navigate('/edit' ,{state : {single : singlerecord[0],index : index}});
  }

  const handleDelete = (id) =>{
    const data = getData();

    const deleterecord = data.filter((d) => {
        return d.id != id
    })

    localStorage.setItem("empData",JSON.stringify(deleterecord));
    setEmpData(deleterecord)


  }

 



  return (

      <>
          <Container>

              {
                  
            
                      <Table responsive="sm">
                          <thead>
                              <tr>
                                  <th>ID</th>
                                  <th>Name</th>
                                  <th>Email</th>
                                  <th>Password</th>
                                  <th>Contact</th>
                                  <th>cource</th>
                                  <th>Gender</th>
                                  <th>Action</th>
                              </tr>
                          </thead>
                          <tbody>

                              {
                                  empData.map((data,index) => {

                                      return (
                                          <>
                                              <tr>
                                                  <td>{
                                                      data.id
                                                  }</td>
                                                  <td>
                                                      {
                                                          data.fname + ' ' + data.lname
                                                      }
                                                  </td>
                                                  <td>
                                                      {
                                                          data.email
                                                      }
                                                  </td>
                                                  <td>
                                                      {
                                                          data.password
                                                      }
                                                  </td>
                                  
                                                  <td>{
                                                      data.contact
                                                  }</td>
                                                  <td>
                                                      {
                                                          data.cource
                                                      }
                                                  </td>
                                                  <td>
                                                      {
                                                          data.gender
                                                      }
                                                  </td>
                                                  <td>
                                                      <button className="btn btn-primary" onClick={() => handleEdit(data.id , index)}>
                                                          Edit
                                                      </button>   
                                                      {
                                                         "    "
                                                      }
                                                      <button className="btn btn-danger" onClick={() => handleDelete(data.id)}> 
                                                          Delete
                                                      </button>
                                                  </td>
                                              </tr>
                                          </>
                                      )

                                  })
                              }
                          </tbody>
                      </Table>


              }
          </Container>
      </>
  )

}

export default ViewData