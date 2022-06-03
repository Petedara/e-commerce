import Niche from "./components/Niche";
import CataloguePost from "./CataloguePost";
import "./midnav.css"


export default function Midnav(){
    return(
        <nav className="midnav">
            <div className="category">
                <Niche name="Food" />
                <Niche name="Fashion" />
            </div>
            <div className="catalogue-post">
                <CataloguePost />
            </div>
        </nav>
    )
}