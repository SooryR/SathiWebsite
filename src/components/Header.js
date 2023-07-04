import { Link , Outlet} from 'react-router-dom'
import { Sidebar } from "./Sidebar.js";
import "./Header.css"

const Header = () => {
    return (
        <div className="header-container">
            
            <nav className="header">
                <div className="logo">
                    <Link to="/">Soory</Link>
                </div>
                <ul className="nav-links">
                    <li><Link to="/work">Work</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
            <Sidebar/>
            <Outlet />
        </div>
    )
}

export {Header};