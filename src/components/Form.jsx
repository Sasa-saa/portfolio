import React from "react";
import { useState } from "react";

const initialFormData = {
  username: "",
  email: "",
  password: "",
  role: "",
};

const Form = () => {
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // setFormData({...formData, [e.target.name]: e.target.value})
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const sendFormData = await fetch("http://localhost:4300/api/auth/register", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = (await sendFormData).json();
      console.log(data);

      if (sendFormData) {
        alert("Data was submitted successfully!");
      }
    } catch (error) {
      alert(error);
    }

    setFormData(initialFormData);
    console.log(formData);
  };
  return (
    <div className="bg-amber-950">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          autoComplete="false"
        />{" "}
        <br />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />{" "}
        <br />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />{" "}
        <br />
        <select name="role" value={formData.role} onChange={handleChange}>
          <option value="admin">Admin</option>
          <option value="staff">Staff</option>
        </select>
        <br />
        <button>Register</button>
      </form>
    </div>
  );
};

export default Form;
