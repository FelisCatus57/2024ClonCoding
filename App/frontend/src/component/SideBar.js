import '../CSS/SideBar.css'
import {BrowserRouter, Routes, Route, Link} from "react-router-dom"

import IconHome from '../assets/home.svg'
import IconSearch from '../assets/search.svg'
import IconExplore from '../assets/Adventures.png'
import IconReels from '../assets/Cinema.png'
import IconMassage from '../assets/Email Send.png'
import IconAlarm from '../assets/Heart.png'
import IconMenu from '../assets/Vector.svg'


export default function Sidebar() {
    return  <nav>
       
        <ul className = "buttonBox">
             v   ChosunGram
            <li><Link to={'/'}><img src={IconHome}/>Home</Link></li>
            <li><Link to={'/search'}><img src={IconSearch}/>Search</Link></li>
            <li><Link to={'/explore'}><img src={IconExplore}/>Explore</Link></li>
            <li><Link to={'/reels'}><img src={IconReels}/>Reels</Link></li>
            <li><Link to={'/massage'}><img src={IconMassage}/>Massage</Link></li>
            <li><Link to={'/alarm'}><img src={IconAlarm}/>Alarm</Link></li>
            <li><Link to={'/user'}><img src={IconHome}/>User</Link></li>
            <li><Link to={'/menu'}><img src={IconMenu}/>Menu</Link></li>
        </ul>
    </nav>
    
};
