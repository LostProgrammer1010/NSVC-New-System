import { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import "../styles/Form.css"

function Form({route, method}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [register, setRegister] = useState(false)
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const name = method === "login" ? "Login" : "Register";
    const link = method === "login" ? "/Register" : "/Login";

    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();
        try {
            const res = await api.post(route, { username, password })
            if (method === "login") {
                localStorage.setItem(ACCESS_TOKEN, res.data.access);
                localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
                navigate("/")
            } else {
                navigate("/login")
            }

        } catch (error) {
            alert(error)
        } finally {
            setLoading(false)
        }
    };

    return (
        <form onSubmit={handleSubmit} className="form-container">
        <h1>{name}</h1>
        <label for="username"> Username:</label>
        <input 
          id="username"
          className="form-input" 
          name="username"
          type="text" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <label for="password">Password:</label>
        <input 
        className="form-input" 
        type="password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        />
        <button className="form-button" type="submit">
            {name}
        </button>
      {name === "Login"&& (<><br/><hr/><a href={link}>Sign Up Here</a></>)}
    </form>
    )

}

export default Form
