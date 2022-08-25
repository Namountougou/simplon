import { NavLink } from 'react-router-dom';
import './menu.css';
export default function Menu(){
return(
    <div className="menu">
        <ul>
            <li ><NavLink className={({isActive}) => (isActive ? "item": undefined)} to={"/"}>Home</NavLink></li>
            <li ><NavLink className={({isActive}) => (isActive ? "item": undefined)} to={"/add"}>ADD TECHNO</NavLink></li>
            <li ><NavLink className={({isActive}) => (isActive ? "item": undefined)} to={"/list"}>TECHNO LIST</NavLink></li>
        </ul> 
    </div>
)

}