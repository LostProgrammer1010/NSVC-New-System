import {React, useState } from 'react';
import { useParams } from 'react-router-dom';
import "../styles/Pole.css";
import DeletePoleWarning from '../components/DeletePoleWarning';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
  const [deleteMessage, setdeleteMessage] = useState(false)

  var pole = new Object(); 
  for (let i = 0; i < initialInventory.length; i++){
    if (initialInventory[i]["serial"] == id) {
      pole = initialInventory[i]
    }
  }

  function udpateMessage() {
    setdeleteMessage(PreState => !PreState);
  }



  return(
    <div class="page" id='pole'>

      {deleteMessage && (
          <DeletePoleWarning route={`/pole/${id}/delete`} pole={pole} closeMessage={udpateMessage}/>
      )}

      <div class="content">
        <button onClick={udpateMessage}><FontAwesomeIcon icon={faX} size="1x" color='white'/></button>
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
    <img src="http://127.0.0.1:8000/api/pole/qr_codes/722047.png"/>
    </div>
  )
}

export default Pole;
