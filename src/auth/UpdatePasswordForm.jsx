import { useState } from "react";
import axios from "axios";
import "./UpdatePasswordForm.css";
import { url } from "../constants/constants";

const UpdatePasswordForm = () => {
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = {
      oldPassword: formData.currentPassword,
      newPassword:formData.newPassword
    }
    try {
      const result = await axios.put(
        `${url}/user/updatePassword`,
        data,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      console.log(result.data);
      alert(result.data.message)
      setFormData({
        currentPassword: "",
        newPassword: "",
        confirmNewPassword: "",
      });
    } catch (error) {
      console.log(error);
      alert(error.response.data.message)
    }
  };

  return (
    <div className="form-container">
      <h2>Update Password</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Current Password:
          <input
            type="password"
            name="currentPassword"
            value={formData.currentPassword}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          New Password:
          <input
            type="password"
            name="newPassword"
            value={formData.newPassword}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Confirm New Password:
          <input
            type="password"
            name="confirmNewPassword"
            value={formData.confirmNewPassword}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Update Password</button>
      </form>
    </div>
  );
};

export default UpdatePasswordForm;
