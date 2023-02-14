import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/global.css";
import App from "./App";
import { Auth0Provider } from '@auth0/auth0-react';

//Render location currently set to "root" within the DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain="dev-46amf5os30gck6e0.us.auth0.com"
    clientId="JXuNKdTR5qWQD04xgsoeqFyQqZdi4Eo9"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Auth0Provider>
);
