import React from 'react';
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="Header">
      <Link className="Link" to="/">Home</Link>
      <Link className="Link" to="/link1">Texto 1</Link>      
      <Link className="Link" to="/link2">Texto 2</Link>
      <Link className="Link" to="/sexy">Conteúdo especial</Link>
    </div>
  )
}
