import "../styles/Poles.css" 
import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"

const initialInventory = [
  { serial: 1, brand: 'Pacer', length: "16'1"},
  { serial: 2, brand: 'UCS', length: "16'1"},
  { serial: 3, brand: 'Pacer', length: "16'1" },
  { serial: 4, brand: 'Pacer', length: "16'1" },
  { serial: 4, brand: 'Pacer', length: "16'1" },
  { serial: 4, brand: 'Pacer', length: "16'1" },
  { serial: 4, brand: 'Pacer', length: "16'1" },
  { serial: 4, brand: 'Pacer', length: "16'1" },
  { serial: 4, brand: 'Pacer', length: "16'1" },
  { serial: 4, brand: 'Pacer', length: "16'1" },
  { serial: 4, brand: 'Pacer', length: "16'1" },
  { serial: 4, brand: 'Pacer', length: "16'1" },
  { serial: 4, brand: 'Pacer', length: "16'1" },
  { serial: 4, brand: 'Pacer', length: "16'1" },
  { serial: 4, brand: 'Pacer', length: "16'1" },
  { serial: 4, brand: 'Pacer', length: "16'1" },
  { serial: 4, brand: 'Pacer', length: "16'1" },
  { serial: 4, brand: 'Pacer', length: "16'1" },
];

function Poles() {
  const navigate = useNavigate();
  const [inventory, setInventory] = useState(initialInventory);

  const handleRowClick = (url) => {
    navigate(url)
  }

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'autoa';
    };
  }, []);
 


  return (
    <div class="page-container">
    <h1>filter</h1>
    <div class="inventory">
    <table class="pole-inventory">
      <thead>
        <tr >
          <th>Serial Number</th>
          <th>Brand</th>
          <th>Length</th>
        </tr>
      </thead>
    <tbody>
      {inventory.map(item => (
        <tr onClick={() => handleRowClick("/"+item.serial)}>
          <td>{item.serial}</td>
          <td>{item.brand}</td>
          <td>{item.length}</td>
        </tr>
      ))}
    </tbody>
    </table>
    </div>
    </div>

  )
}

export default Poles;
