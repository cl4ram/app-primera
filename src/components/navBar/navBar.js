import './navBar.css';
import { CartWidget } from '../cartWidget/cartWidget';
import { Link } from "react-router-dom";


export const NavBar = () => {
    return (
            <div>
                <nav>
                    <div className="logo">TRIFON</div>
                    <div className="menu">
                        <ul>
                            <li>
                                <Link to="/">
                                Inicio
                                </Link>
                            </li>
                            <li>
                                <Link to="/category/:id">
                                Productos
                                </Link>
                            </li>
                            <li>Nosotros</li>
                            <li>Preguntas frecuentes</li>
                            <li>
                                <Link to="/cart">
                                <CartWidget/>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
  
    )
    
}

