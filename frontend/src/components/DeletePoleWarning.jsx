import "../styles/DeletePoleWarning.css"
import { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";



/*
 * item: The current Pole that the user would like to be deleted from inventory 
 * route: The request route to have that pole delete from the data base
 * closeMessage: Function that is passed from the parent to close the popup window
*/

function DeletePoleWarning({pole, route, closeMessage}) {
    var number = 0;
    const message = useRef(null);
    const navigate = useNavigate();

    // ToDo Create a delete request to backend to delete a pole from the database
    function DeletePoleRequest() {
        console.log("Sending Request to Server to Delete Pole");
        navigate("/poles")
        closeMessage();
    }


    useEffect(() => {
        const handleClickOutside = (event) => {
          if (message.current && !message.current.contains(event.target)) {
            if (number != 0) {
                number = 0
                closeMessage();
            }
            number++;
          }
        };
       
        document.addEventListener("click", handleClickOutside);
    
        return () => {
          document.removeEventListener("click", handleClickOutside);
        };
      }, [closeMessage]);



    return (
        <>
        <div class="warning-container" ref={message}>
            <h1>Are you sure you want to delete pole?</h1>
            <h1> {pole.serial} {pole.brand} {pole.length}</h1>
            <div className="row-container">
                <button onClick={DeletePoleRequest}>Yes</button>
                <button onClick={closeMessage}>No</button>
            </div>
        </div>
        </>
    )

}

export default DeletePoleWarning;