import './Navbar.css';
import {useState} from 'react';
import MegaMenu from './mainmenu';
import { useSelector } from "react-redux";

export default function Navbar(){const [open,setOpen]=useState(null);
    const items=[['MEN','men'],
    ['WOMEN','women'],
    ['KIDS','kids'],
    ['SPORTS','sports'],
    ['LIFESTYLE','lifestyle'],
    ['OUTLET','outlet'],
    ['OFFERS','offers']];
    const totalQuantity = useSelector(
        state => state.cart.totalQuantity
    );

    return (

        <div>

            🛒 {totalQuantity}

        </div>

    );

return <nav className='navbar'><div className='nav-top'>
    <span>help</span>
    <span>orders and returns</span>
    <span>sign up</span>
    <span>log in</span>
    </div><div className='nav-wrap' onMouseLeave={()=>setOpen(null)}><div className='nav-main'><div className='logo'>
    <img src='https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg' width='100'/></div><ul className='nav-links'>{items.map(([t,k])=><li key={t} onMouseEnter={()=>k&&setOpen(k)}>{t}</li>)}</ul><div className='nav-icons'>
    <span>🔍</span>
    <span>👤</span>
    <span>♡</span>
    <span>🛍️</span>
    </div></div>{open&&<MegaMenu type={open}/>}</div></nav>}