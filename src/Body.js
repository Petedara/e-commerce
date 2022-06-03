import SideBar from "./components/SideBar";
import ReactDOM from 'react-dom/client';
import Menu from "./components/Menu";
import Midnav from "./MidNav";
import "./body.css"

export default function body(){
    return(
        <div className="body">
            <div className="side-bar">
                <SideBar />
            </div>
            <div className="mid-nav">
                <Midnav />
            </div>
            <div className="menu-bar">
                <Menu />
            </div>
        </div>
    )
}