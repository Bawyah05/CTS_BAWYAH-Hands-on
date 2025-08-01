import React from 'react';
import officeImage from './office.jpg'; // Make sure this image is in the src folder

function App() {
  const officeSpaces = [
    {
      name: "DBS",
      rent: 50000,
      address: "Chennai"
    },
    {
      name: "WeWork",
      rent: 70000,
      address: "Bangalore"
    },
    {
      name: "Regus",
      rent: 55000,
      address: "Hyderabad"
    }
  ];

  return (
    <div style={{ padding: "30px", fontFamily: "Arial" }}>
      <h1><b>Office Space , at Affordable Range</b></h1>

      <img 
        src={officeImage} 
        alt="Office Space" 
        width="300" 
        style={{ marginTop: "20px", marginBottom: "20px" }} 
      />

      {officeSpaces.map((office, index) => (
        <div key={index} style={{ marginBottom: "20px" }}>
          <h2><b>Name: {office.name}</b></h2>
          <p style={{ 
              color: office.rent < 60000 ? 'red' : 'green',
              fontWeight: 'bold' 
            }}>
            Rent: Rs. {office.rent}
          </p>
          <p><b>Address:</b> {office.address}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
