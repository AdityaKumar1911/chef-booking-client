import React from "react";

const ChefProfile = () => {
  const chef = {
    id: 1,
    name: "Chef John",
    speciality: "Italian Cuisine",
    availableDates: ["2022-06-01", "2022-06-02", "2022-06-03"],
    hourlyRate: 50,
  };

  return (
    <div className="container mt-5">
      <h2>Chef Profile</h2>
      <p>Name: {chef.name}</p>
      <p>Speciality: {chef.speciality}</p>
      <p>Hourly Rate: ${chef.hourlyRate}</p>
      <p>Available Dates:</p>
      <ul>
        {chef.availableDates.map((date) => (
          <li key={date}>{date}</li>
        ))}
      </ul>
    </div>
  );
};

export default ChefProfile;
