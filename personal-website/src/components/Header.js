import { Link , Outlet} from 'react-router-dom'
import { Sidebar } from "./Sidebar.js";
import "./Header.css"

const Header = () => {
    return (
        <div className="header-container">
            
            <nav className="header">
                <div className="logo">
                    <Link to="/">Your Logo</Link>
                </div>
                <ul className="nav-links">
                    <li><Link to="/work">Work</Link></li>
                    <li><Link to="/story">Story</Link></li>
                    <li><Link to="/experiences">Experiences</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
            <Sidebar/>
            <Outlet />
        </div>
    )
}

export {Header};