import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import CartWidget from '../cartWidget/cartWidget';
import styles from './navbar.module.css'

function NavBar() {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to='/' className="navbar-brand" >ISV Shop</Link>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <NavLink to='/' className="nav-link" >Home <span className="sr-only">(current)</span></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to='/productos' className="nav-link" href="#">Productos</NavLink>
                    </li>
                    <li className="nav-item dropdown">
                        <NavLink to='/servicios' className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Servicios
                        </NavLink>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <NavLink to='/servicios/instalacion' className="dropdown-item" href="#">Instalación</NavLink>
                        <NavLink to='/servicios/consultoria' className="dropdown-item" href="#">Consultoría</NavLink>
                        <div className="dropdown-divider"></div>
                        <NavLink to='/servicios/programacion' className="dropdown-item" href="#">Programación</NavLink>
                        </div>
                    </li>
                    <li className={`nav-item ${styles.search}`}>
                        <form className='form-inline'>
                            <input className="form-control mr-sm-2" type="search" placeholder="Buscar" aria-label="Search" />
                            <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Buscar</button>
                        </form>
                    </li>
                </ul>
            </div>
            <CartWidget/>
        </nav>
     );
}

export default NavBar;