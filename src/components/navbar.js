import React from 'react'
import "./cardWidget"
import "./navbar.css"

const  Navbar = () =>{
  return (

    <div className="Navbar">
        <div class="nav-bg">
        <nav class="nav-servicios enlaces">
                
                <a href="#">Inicio</a>
                <a href="#">Contacto</a>
                <a href="#">Nosotros</a>
                <a><cardWidget/></a>
                
                
                
        </nav>
    </div>


    </div>
  )
}

export default Navbar
