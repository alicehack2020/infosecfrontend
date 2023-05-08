import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { url } from '../constants/constants';
import "./DashBoard.css"
let token
const DashBoard = () => {
  const navigate = useNavigate()
  const [data, setData] = useState([]);
  useEffect(() => {
    token = localStorage.getItem("token");
    if (token) {
      fetchData(); 
    } else {
      navigate("/login")
    }
  }, [])
  
  const goToForm = () => {
    navigate("/form")
  }
  const goToUpdatePassword = () => {
    navigate("/updatepassword")
  }
  const logOut = () => {
    localStorage.clear();
    navigate("/login")
  }
  const goToUpdateProfile = () => {
    navigate("/updateprofile")
  }

  const fetchData = async () => {
    const token = localStorage.getItem("token");
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };
    const result = await axios.get(`${url}/post/list`, config);
    setData(result.data);
  };
  
  const deleteRecord = async (id) => {
    try {
      const result = await axios.delete(`${url}/post/delete?id=${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      console.log(result.data);
      fetchData()
      navigate("/") 
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div>
        <button onClick={() => goToForm()}>ADD POST</button>
        <button onClick={() => goToUpdateProfile()}>Update Profile</button>
        <button onClick={() => goToUpdatePassword()}>Update Password</button>
        <button onClick={() => logOut()}>Logout</button>
      </div>
    <div className='table-container'>
      <table>
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Email</th>
            <th>Contact Number</th>
            <th>City</th>
            <th>State</th>
            <th>Created At</th>
            <th>delete</th>
            <th>update</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item._id}>
              <td>{item.fullName}</td>
              <td>{item.email}</td>
              <td>{item.contactNumber}</td>
              <td>{item.city}</td>
              <td>{item.state}</td>
              <td>{new Date(item.createdAt).toLocaleString()}</td>
              <td><button onClick={()=>navigate(`/form/${item._id}`)}>update</button></td>
              <td><button onClick={()=>deleteRecord(item._id)}>delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
    
  );
};


export default DashBoard