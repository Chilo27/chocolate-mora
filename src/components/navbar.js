import React from 'react'
import CartWidget from './CartWidget'
import "./navbar.css"
import { BoxIconElement } from 'boxicons'

const  Navbar = () =>{
  return (

    <div className="Navbar">
        <div class="nav-bg">
        <nav class="nav-servicios enlaces">
                <a href="#">Inicio</a>
                <a href="#">Contacto</a>
                <a href="#">Nosotros</a>
          <button className='boton'>
          <CartWidget/>
          </button>
                
        </nav>
    </div>


    </div>
  )
}

export default Navbar
