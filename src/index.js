import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(

    <React.StrictMode>
      <Auth0Provider
        domain="dev-edjbborj0fu7c76p.us.auth0.com"
        clientId="qiSgC2GcFaPTzBFp7IcUk6XzkEKvJAAN"
        authorizationParams={{
          redirect_uri: window.location.origin,
        }}
      >
         
        <App />
        
      </Auth0Provider>
    </React.StrictMode>,
  
  document.getElementById("root")
);
