import React from 'react';
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="Header">
      <span className="Link"><Link to="/" id='frente'>Home</Link></span>
      <span className="Link"><Link to="/link1">Texto 1</Link></span>      
      <span className="Link"><Link to="/link2">Texto 2</Link></span>
      <span className="Link"><Link to="/sexy">Conteúdo especial</Link></span>
    </div>
  )
}
