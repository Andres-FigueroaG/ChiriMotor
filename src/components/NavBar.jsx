import React from "react";
import { Link } from "react-router-dom"
/*const links = [
    {
        name: "Home",
        href: "./home"
    },
    {
        name: "SobreNosotros",
        href: "./sobreNosotros"
    },
]*/
const NavBar = () => {
    return (
        <nav className="main-nav">
            <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/nosotros">Sobre Nosotros</Link></li>
                <li><Link to="/modelos">Modelos</Link></li>
                <li><Link to="/contacto">Contactanos</Link></li>
            </ul>
        </nav>
    )
}

export default NavBar;