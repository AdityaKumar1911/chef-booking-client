import React, { useState } from "react";
import axios from "axios";

const AddChefForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    speciality: "",
    availableDates: "",
    hourlyRate: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear validation errors when the field is edited
    setErrors({ ...errors, [name]: "" });
  };

  const validateForm = () => {
    const { name, speciality, availableDates, hourlyRate } = formData;
    const newErrors = {};
    if (!name) {
      newErrors.name = "Name is required";
    }
    if (!speciality) {
      newErrors.speciality = "Speciality is required";
    }
    if (!availableDates) {
      newErrors.availableDates = "Available Dates are required";
    }
    if (!hourlyRate) {
      newErrors.hourlyRate = "Hourly Rate is required";
    } else if (isNaN(hourlyRate) || Number(hourlyRate) <= 0) {
      newErrors.hourlyRate = "Hourly Rate must be a positive number";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        console.log("Form Data ==>", formData); // Log the form data here
        await axios.post("http://localhost:4000/Chefs", formData);
        alert("Chef added successfully!");
        setFormData({
          name: "",
          speciality: "",
          availableDates: "",
          hourlyRate: "",
        });
      } catch (error) {
        console.error("Error adding chef:", error);
        alert("Error adding chef. Please try again.");
      }
    }
  };

  return (
    <div className="container">
      <h2>Add Chef</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <div className="text-danger">{errors.name}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="speciality" className="form-label">
            Speciality
          </label>
          <input
            type="text"
            className="form-control"
            id="speciality"
            name="speciality"
            value={formData.speciality}
            onChange={handleChange}
          />
          {errors.speciality && (
            <div className="text-danger">{errors.speciality}</div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="availableDates" className="form-label">
            Available Dates
          </label>
          <input
            type="text"
            className="form-control"
            id="availableDates"
            name="availableDates"
            value={formData.availableDates}
            onChange={handleChange}
          />
          {errors.availableDates && (
            <div className="text-danger">{errors.availableDates}</div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="hourlyRate" className="form-label">
            Hourly Rate
          </label>
          <input
            type="text"
            className="form-control"
            id="hourlyRate"
            name="hourlyRate"
            value={formData.hourlyRate}
            onChange={handleChange}
          />
          {errors.hourlyRate && (
            <div className="text-danger">{errors.hourlyRate}</div>
          )}
        </div>
        <button type="submit" className="btn btn-primary">
          Add Chef
        </button>
      </form>
    </div>
  );
};

export default AddChefForm;
