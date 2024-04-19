import React from "react";

export function Header({headerInfo, call, children}) {
  
  return (
    <>
    {children}
      <div style={{ textAlign: "center" }}>
        <h1>Hello Everyone!!!</h1>
        <h2>Let's get started...</h2>
        <h3>My full name is {headerInfo.name}.</h3>
        <h3>Mail: {headerInfo.email}</h3>
        <h3>Phone Number: {headerInfo.phone}, Can you call me? : {call}</h3>
        <h3>Address: {headerInfo.address}.</h3>
      </div>
    </>
  );
}
