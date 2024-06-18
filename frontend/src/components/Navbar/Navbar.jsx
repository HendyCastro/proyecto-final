import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from '../../context/Context';


import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



function Navbar() {
  const { isAuthenticated, logout } = useContext(AuthContext);

  //  componente NavLink junto con el atributo isActive nos ayudan a saber cuál de las opciones de navegación corresponde a la ruta consultada.
  const setActiveClass = ({ isActive }) => (isActive ? "active" : undefined);

  return (

    <nav className="nav">
      <div>
        <NavLink className={`base ${setActiveClass}`} to="/" exact="true" activeclassname="active-link">
          <img src="https://via.placeholder.com/300" alt="Logo" style={{ width: "80px" }} />
          {/* <h1>hola</h1> */}
        </NavLink>
      </div>

      {!isAuthenticated ? (
        <div className="botones">
          <div className="boton">
            <NavLink className={`base ${setActiveClass}`} to="/login" activeclassname="active-link">
              <h6>Iniciar Sesión</h6>
            </NavLink>
          </div>
          <div className="boton">
            <NavLink className={`base ${setActiveClass}`} to="/registro" activeclassname="active-link">
              <h6>Registrarse</h6>
            </NavLink>
          </div>
          <div className="boton">
            <NavLink className={`base ${setActiveClass}`} to="/vehiculos" activeclassname="active-link">
              <h6>Vehículos</h6>
            </NavLink>
          </div>

        </div>
      ) : (
        <div className="botones">
          <div className="boton">
            <NavLink className={`base ${setActiveClass}`} to="/vehiculos" activeclassname="active-link">
              <h6>Vehículos</h6>
            </NavLink>
          </div>
          <div className="boton">
            <NavLink className={`base ${setActiveClass}`} to="/publicar" activeclassname="active-link">
              <h6>Publicar</h6>
            </NavLink>
          </div>
          <div className="boton">
            <NavLink className={`base ${setActiveClass}`} to="/mis-publicaciones" activeclassname="active-link">
              <h6>Mis Publicaciones</h6>
            </NavLink>
          </div>
          <div className="boton">
            <NavLink className={`base ${setActiveClass}`} to="/perfil" activeclassname="active-link">
              <h6>Perfil</h6>
            </NavLink>
          </div>
          <div className="boton">
            <NavLink className={`base ${setActiveClass}`} to="/login" activeclassname="active-link">
              <h6>Cerrar Sesión</h6>
            </NavLink>
          </div>
        </div>
      )}

    </nav>

  );
}

export default Navbar;
