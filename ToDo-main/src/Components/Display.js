import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./style.css";
function Display(props) {
   return (
      <>
         <br></br>
         <div className="row rowstyle">
            <div className="col-8 shadow p-1 rounded">
               <li>{props.value}</li>
            </div>
            <div className="col-4">
               <button
                  className="btn  btn-outline-warning btnst shadow p-1"
                  onClick={() => {
                     props.sendfunc(props.id);
                  }}
               >
                  Delete
               </button>
            </div>
         </div>
      </>
   );
}

export default Display;
