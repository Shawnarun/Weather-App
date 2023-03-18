import Button from 'react-bootstrap/Button';
import { useAuth0 } from "@auth0/auth0-react";
import "./Logout.css";

const Logout = () => {
  const {logout, isAuthenticated }=useAuth0();
 
  return (
    
      isAuthenticated && 
     ( 
     
     <Button class="btn btn-dark" onClick={()=> logout({ redirectUri: "http://localhost:3000/" })}>
       Log Out
      </Button>)
  );
};

export default Logout;
