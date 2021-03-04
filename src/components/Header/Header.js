import React from 'react';
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="Header">
      <Link className="Link" to="/">Home</Link>
      <Link className="Link" to="/link1">Link 1</Link>      
      <Link className="Link" to="/link2">Link 2</Link>
      <Link className="Link" to="/sexy">Conteúdo especial</Link>
    </div>
  )
}
