import { useState, useEffect } from "react";
import axios from "axios";
import { url } from "../constants/constants";
import "./UpdateProfile.css"
const UpdateProfile = () => {
  const [fullName, setFullName] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const fetchData = async () => {
        const config = {
          headers: { Authorization: `Bearer ${token}` },
        };
        const result = await axios.get(`${url}/user/userDetails`, config);
        setFullName(result.data.data.fullName);
      };
      fetchData();
    }
  }, []);

  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };

  const handleUpdate = async () => {
    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      const data = {
        fullName: fullName,
      };
      await axios.put(`${url}/user/updateDetails`, data, config);
      setSuccess(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="update-profile">
      <h2>Update Profile</h2>
      <div className="form-group">
        <label>Full Name:</label>
        <input
          type="text"
          placeholder="Full Name"
          value={fullName}
          onChange={handleFullNameChange}
        />
      </div>
      <button onClick={handleUpdate}>Update</button>
      {success && <p>Profile updated successfully!</p>}
    </div>
  );
};

export default UpdateProfile;
