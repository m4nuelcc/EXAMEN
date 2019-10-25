import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from "react-router-dom";
import './index.css';
import {ListarActores, Test2} from "./components/ListadoActores"
import {EditarActor} from "./components/EditarActor"



export function nbsp(n) {
  let ret = []
  for (let index = 1; index <= n; index++) {
    ret.push(<span key={index}>&nbsp;</span>);    
  }
  return ret
}
export function br(n) {
  let ret = []
  for (let index = 1; index <= n; index++) {
    ret.push(<br key={index} />);    
  }
  return ret
}


const rutas = (
  <BrowserRouter>
    <Route path="/" component={ListarActores} />
    <Route path="/actor/:id" component={EditarActor} />
    <Route path="/test2" component={Test2} />
  </BrowserRouter>
  
);
ReactDOM.render(rutas, document.getElementById("root"));
