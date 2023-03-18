
import "./Button.css";
import { useAuth0 } from "@auth0/auth0-react";



const Button = () => {
  const {loginWithRedirect, isAuthenticated }=useAuth0();

  return (
    
      !isAuthenticated &&( 
     
     <button className="btn_shadow1" onClick={()=> loginWithRedirect({ redirectUri: "http://localhost:3000/weather" })}  >
       Login
      </button>
      )
      
  );
};

export default Button;
