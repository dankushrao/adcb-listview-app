import React from "react";
import {
    MDBContainer
  } from "mdb-react-ui-kit";
export default function Header({title,logo}) {
  return (
    <MDBContainer className="mt-4">
    <header className="bg-gray-800 shadow-lg" style={{maxHeight:"120px"}}>
      <img src={logo} alt="Logo" style={{maxWidth: "200px"}} />
      <h2>{title}</h2>
    </header>
    </MDBContainer>
  );
}