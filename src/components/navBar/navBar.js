import './navBar.css';
import { CartWidget } from '../cartWidget/cartWidget';

export const NavBar = () => {
    return (
    <nav>
        <div className="logo">TRIFON</div>
        <div className="menu">
            <ul>
                <li>Inicio</li>
                <li>Productos</li>
                <li>Nosotros</li>
                <li>Preguntas frecuentes</li>
                <li>
                    <CartWidget/>
                </li>
            </ul>
        </div>
        
    </nav>
    )
    
}

