import React from 'react';
import Profile from './Dp.jpg';
import'../sidebar.css'

export default function SideBar(){
    return(
        <nav className='sidebar'>
            <div>
                <div className='profile-details'>
                    <div>
                        <img src={Profile} alt="" className='dp' width='80px' height='80px'/>
                        <p style={{fontSize: "20px", fontWeight: "600", padding: "0", margin: "0"}}>Hexagon Rice</p>
                        <p style={{fontSize: "15px", fontWeight: "400", padding: "0", margin: "5px"}}>Afolayan Peter</p>
                        <button style={{padding:'4px', border:'none', borderRadius:'5px'}}>
                            <small>My Niche</small>
                        </button><br /><br />
                    </div>
                </div>
                <div className="table">
                <table>
                    <tbody>
                        <tr>
                            <td>Followers</td>
                            <td style={{color:'blue'}}>20k</td>
                        </tr>
                        <tr>
                            <td>Likes</td>
                            <td style={{color:'blue'}}>19.5k</td>
                        </tr>
                        <tr>
                                <td>Reviews</td>
                                <td style={{color:'blue'}}>(47)</td>
                        </tr>
                        <tr>
                            <td>Sales</td>
                            <td style={{color:'blue'}}>(72)</td>
                        </tr>
                    </tbody>
                    
                </table>

                </div>
            </div>
        </nav>
    )
}