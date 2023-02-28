import { useState } from "react";
import React,{ReactDOM} from "react";

export const Menu = ({onChange,newProject}) => {

    return (
        <div> 
         <nav className="nav">
         <ul className="ul">
  <li className="li"><a className="a" href="#home">Acceuil</a></li>
  <li className="li" ><a className="a"  href="#newPoject" onClick={newProject}>Nouveau Projet</a></li>
  <li className="li"><a className="a" href="#importProject">Importer un projet</a></li>
  <li className="li"><a className="a"  href="#saveProject">Sauvegarder  le projet</a></li>
</ul></nav>
<input accept="image/*" onChange={onChange} type="file"></input>

        </div>
       
    )
}
