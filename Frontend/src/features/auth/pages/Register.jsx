import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
function Register() {
  const { loading, handleRegister } = useAuth();
  const navigate = useNavigate();
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
   const success =  await handleRegister({username, email ,password})
   if(success){
     navigate("/")
    }
  };
   if(loading){
    return(<main><h1> Loading..................</h1> </main>)
  }
  return (
    <main>
      <div className="form-container">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="userName">Username:</label>
            <input
            
              type="text"
              id="userName"
              name="userName"
              required
              placeholder="Enter Username"
              value={username}
              onChange={(e)=>{setUsername(e.target.value)}}
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Enter Email"
              value={email}
              onChange={(e)=>{setEmail(e.target.value)}}
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              required
              placeholder="Enter Password"
              value={password}
              onChange={(e)=>{setPassword(e.target.value)}}
            />
          </div>
          <button className="button primary-button" type="submit">
            Register
          </button>
        </form>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </main>
  );
}

export default Register;
