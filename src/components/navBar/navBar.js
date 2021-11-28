import './navBar.css';
import { CartWidget } from '../cartWidget/cartWidget';
import { NavLink } from "react-router-dom";


export const NavBar = () => {
    return (
            <div className="sticky">
                <nav>
                    <div className="logo">TRIFON</div>
                    <div className="menu">
                        <ul>
                            <li>
                                <NavLink to="/" style={{ textDecoration: 'none' , color: '#F2F2F2'}}>
                                    Productos
                                </NavLink>
                            </li>
                            <li>
                                <NavLink key='rollos' exact to={`/category/mayoristas`} style={{ textDecoration: 'none' , color: '#F2F2F2'}}>
                                    Mayoristas        
                                </NavLink>
                            </li>
                            <li>
                                <NavLink key='otros' exact to={`/category/minoristas`} style={{ textDecoration: 'none' , color: '#F2F2F2'}}>
                                    Minoristas
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/cart" style={{ textDecoration: 'none' , color: '#F2F2F2'}}>
                                    <CartWidget/>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
  
    )
    
}

