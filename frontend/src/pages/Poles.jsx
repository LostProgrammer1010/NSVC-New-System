import "../styles/Poles.css" 
import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import Footer from "../components/Footer.jsx"

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

function Poles() {
  const navigate = useNavigate();
  const [inventory, setInventory] = useState(initialInventory);

  const handleRowClick = (url) => {
    navigate(url)
  }

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);
 


  return (
    <>
    <div class="poles-page-container">
      <div class="inventory">
        <table class="pole-table">
          <thead>
            <tr >
              <th>Serial Number</th>
              <th>Brand</th>
              <th>Length</th>
            </tr>
          </thead>
          <tbody>
            {inventory.map(item => (
              <tr class={item.isRented.toString()} onClick={() => handleRowClick("/pole/"+item.serial)}>
                <td>{item.serial}</td>
                <td>{item.brand}</td>
                <td>{item.length}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div class="color-convention">
        <div class="row-container"><div class="rented"></div>Rented</div>
        <div class="row-container"><div class="not-rented"></div>Avaliable</div>

      </div>

      <Footer/>
    </div>

    </>
  )
}

export default Poles;
