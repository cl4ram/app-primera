import './navBar.css';
import { Carrito } from './cartWidget';

export const Menu = () => {
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
                    <Carrito/>
                </li>
            </ul>
        </div>
        
    </nav>
    )
    
}

// export function Menu() {
//     return (
//         <div>
//             <h1>Chau</h1>
//         </div>
//     )
// }

