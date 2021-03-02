import logo from '../logo.svg';
import '../App.css';
import React from 'react';

function NavBar() {
  return (
    <div className="NavBar">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <nav>
            <ul>
            <li>
                    <a>Home</a>
                </li>
                <li>
                    <a>Productos</a>
                </li>
                <li>
                    <a>About Us</a>
                </li>
                <li>
                    <a>Contacto</a>
                </li>
                <li>
                    <a>Mi carrito</a>
                </li>
            </ul>
        </nav>
      </header>
    </div>
  );
}

export default NavBar;
