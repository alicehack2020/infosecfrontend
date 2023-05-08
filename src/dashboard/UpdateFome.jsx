import { useEffect, useState } from "react";
import axios from "axios";
import "./Form.css";
import { url } from "../constants/constants";
import { useNavigate, useParams } from "react-router-dom";
const UpdateForm = () => {
    const {id}=useParams()
    const navigate=useNavigate()
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contactNumber: "",
    city: "",
    state: "",
  });
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const fetchData = async () => {
        const token = localStorage.getItem("token");
        const config = {
          headers: { Authorization: `Bearer ${token}` }
        };
          const result = await axios.get(`${url}/post/getOne?id=${id}`, config);
        console.log(result.data)
        setFormData({
          fullName:result.data.fullName,
          email: result.data.email,
          contactNumber: result.data.contactNumber,
          city: result.data.city,
          state:result.data.state
        })

      };
      fetchData(); 
    } else {
      navigate("/")
    }
  }, [])  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.put(`${url}/post/update?id=${id}`, formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      console.log(result.data);
      setFormData({
        fullName: "",
        email: "",
        contactNumber: "",
        city: "",
        state: "",
      });
      navigate("/") 
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="form-container">
      <h2>Add User Details</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Full Name:
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Contact Number:
          <input
            type="text"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          City:
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          State:
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UpdateForm;
