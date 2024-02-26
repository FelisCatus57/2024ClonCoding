import '../CSS/default.css'

import IconHome from '../assets/home.svg'
import IconSearch from '../assets/search.svg'
import IconExplore from '../assets/Adventures.png'
import IconReels from '../assets/Cinema.png'
import IconMassage from '../assets/Email Send.png'
import IconAlarm from '../assets/Heart.png'
import IconMenu from '../assets/Vector.svg'


export default function Sidebar() {
    return <nav>
        <ul className = "buttonBox">
            <li><img src={IconHome}/>Home</li>
            <li><img src={IconSearch}/>Search</li>
            <li><img src={IconExplore}/>Explore</li>
            <li><img src={IconReels}/>Reels</li>
            <li><img src={IconMassage}/>Massage</li>
            <li><img src={IconAlarm}/>Alarm</li>
            <li><img src={IconHome}/>User</li>
        </ul>
    </nav>
};
