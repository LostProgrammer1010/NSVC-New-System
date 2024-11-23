import "../styles/Poles.css" 
import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"

const initialInventory = [
  { serial: 234831, brand: 'Pacer', length: "16'1"},
  { serial: 234982, brand: 'UCS', length: "10'6"},
  { serial: 97373, brand: 'Pacer', length: "9'0" },
  { serial: 39854, brand: 'ESSX', length: "16'0" },
  { serial: 388753, brand: 'Pacer', length: "16'0" },
  { serial: 293754, brand: 'UCS', length: "16'0" },
  { serial: 328754, brand: 'ESSX', length: "16'6" },
  { serial: 43875, brand: 'Pacer', length: "13'6" },
  { serial: 43758, brand: 'Pacer', length: "13'0" },
  { serial: 42375, brand: 'Shur', length: "10'6" },
  { serial: 42375, brand: 'Pacer', length: "11'6" },
  { serial: 23574, brand: 'Mistic', length: "17'0" },
  { serial: 387952, brand: 'Pacer', length: "8'0" },
  { serial: 98573, brand: 'Mistic', length: "14'7" },
  { serial: 87529, brand: 'Pacer', length: "14'7" },
  { serial: 38792, brand: 'Shur', length: "12'6" },
  { serial: 3875, brand: 'Pacer', length: "16'0" },
  { serial: 92375, brand: 'Pacer', length: "16'2" },
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
        <tr onClick={() => handleRowClick("/pole/"+item.serial)}>
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
