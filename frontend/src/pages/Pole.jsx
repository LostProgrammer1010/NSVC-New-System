import React from 'react';
import { useParams } from 'react-router-dom';
import "../styles/Pole.css";
import qr from "../assets/278240.png"

const initialInventory = [
{ serial: 234831, brand: 'Pacer', length: "16'1", material: "Fiberglass", isRented: false},
{ serial: 234982, brand: 'UCS', length: "10'6", material: "Fiberglass", isRented: false},
{ serial: 97373, brand: 'Pacer', length: "9'0" , material: "Fiberglass", isRented: false},
{ serial: 39854, brand: 'ESSX', length: "16'0" , material: "Carbon", isRented: false},
{ serial: 388753, brand: 'Pacer', length: "16'0" , material: "Fiberglass", isRented: false},
{ serial: 293754, brand: 'UCS', length: "16'0" , material: "Fiberglass", isRented: true},
{ serial: 328754, brand: 'ESSX', length: "16'6" , material: "Carbon", isRented: false},
{ serial: 43875, brand: 'Pacer', length: "13'6" , material: "Fiberglass", isRented: false},
{ serial: 43758, brand: 'Pacer', length: "13'0" , material: "Fiberglass", isRented: false},
{ serial: 42375, brand: 'Shur', length: "10'6" , material: "Carbon", isRented: false},
{ serial: 42375, brand: 'Pacer', length: "11'6" , material: "Fiberglass", isRented: true},
{ serial: 23574, brand: 'Mistic', length: "17'0" , material: "Carbon", isRented: false},
{ serial: 387952, brand: 'Pacer', length: "8'0" , material: "Fiberglass", isRented: false},
{ serial: 98573, brand: 'Mistic', length: "14'7" , material: "Carbon", isRented: true},
{ serial: 87529, brand: 'Pacer', length: "14'7" , material: "Fiberglass", isRented: false},
{ serial: 38792, brand: 'Shur', length: "12'6" , material: "Carbon", isRented: false},
{ serial: 3875, brand: 'Pacer', length: "16'0" , material: "Fiberglass", isRented: false},
{ serial: 92375, brand: 'Pacer', length: "16'2" , material: "Carbon", isRented: false},
];

function Pole() {
  const { id } = useParams();
  var pole = new Object(); 
  
  for (let i = 0; i < initialInventory.length; i++){
    if (initialInventory[i]["serial"] == id) {
      pole = initialInventory[i]
      console.log(pole.serial);
    }
  }

  return(
    <div class="pole-page-container">
      <div class="content">
        <h1> Pole Information </h1>
        <label>Serial Number: {id}</label>
        <label>Length: {pole.length}</label>
        <label>Brand: {pole.brand}</label>
        <label>Material: Fiberglass</label>
        <label>Replacement Cost: $1200</label>
        <label>Rental Cost: $100</label>

        {pole.isRented && (
          <>
          <h1>Renter Information</h1>
          <label>Name: Dustin Meyer</label>
          <label>Return Date: 12/12/2024</label>
          <label>Paid: No</label>
          <label>Amount Owed: $100</label>
          </>
        )}

      </div>
    <img src={qr}/>
    </div>
  )
}

export default Pole;
