import React, { useState } from "react";
import "./UserForm.css";

const UserForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    groupCode: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="container">
      <h2>Форма користувача</h2>
      <form>
        <label>
          Ім'я:
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
        </label>
        <label>
          Прізвище:
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
        </label>
        <label>
          Код групи:
          <input type="text" name="groupCode" value={formData.groupCode} onChange={handleChange} />
        </label>
        <label>
          Електронна пошта:
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>
        <button type="button">
          Зберегти дані
        </button>
      </form>
      <h3>Введені дані:</h3>
      <ul>
        <li>Ім'я: {formData.firstName}</li>
        <li>Прізвище: {formData.lastName}</li>
        <li>Код групи: {formData.groupCode}</li>
        <li>Електронна пошта: {formData.email}</li>
      </ul>
    </div>
  );
};

export default UserForm;
