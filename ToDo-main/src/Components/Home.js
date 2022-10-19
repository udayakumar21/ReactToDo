import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./style.css";
import Display from "./Display";
class Home extends Component {
   state = {
      items: [],
      text: "",
   };
   handleChange = (e) => {
      this.setState({ text: e.target.value });
   };

   handleClick = (e) => {
      if (this.state.text != "") {
         const items = [...this.state.items, this.state.text];
         this.setState({ items: items, text: "" });
      }
   };

   handleDelete = (id) => {
      const Olditems = [...this.state.items];
      const items = Olditems.filter((element, i) => {
         return i != id;
      });
      this.setState({ items: items });
   };

   render() {
      return (
         <>
            <div className="container">
               <h1 className="display-4 head shadow p-2">To-Do Application</h1>
               <div className="row">
                  <div className="col-9 input">
                     <input
                        type="text"
                        className="form-control rounded"
                        id="dataInp"
                        placeholder="Write something"
                        value={this.state.text}
                        onChange={this.handleChange}
                     ></input>
                  </div>
                  <div className="col-3">
                     <button
                        className="btn  btn-outline-info"
                        onClick={this.handleClick}
                     >
                        POST
                     </button>
                  </div>
               </div>
               <div className="display">
                  <ul className="list list-unstyled">
                     {this.state.items.map((value, i) => {
                        return (
                           <Display
                              value={value}
                              key={i}
                              id={i}
                              sendfunc={this.handleDelete}
                           />
                        );
                     })}
                  </ul>
               </div>
            </div>
         </>
      );
   }
}

export default Home;
