import React from "react";
import './App.css';
import { GoogleLogin } from "react-google-login";

const responseGoogle = response => {
  console.log(response);
}
function App() {
  return (
    <div className="App">
      <GoogleLogin
        clientId="923842506847-ms2d483rn0n1p7qpt04cp80m2sldnnl9.apps.googleusercontent.com"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
      />
    </div>
  );
}

export default App;
