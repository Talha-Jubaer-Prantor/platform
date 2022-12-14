import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./ProfessionalDashboard.css"

const ProfessionalDashboard = () => {
   

    const [sidebar,setSidebar]=useState(true)

    const btn=()=>{
    
    if(sidebar===true){
        setSidebar(false)
    }else{
        setSidebar(true)
    } 
    }
    

    


    return (
        <div>
            <div className={`sidebar ${sidebar? "active":""}`} id='sidebar'>
        <div className="logo_content">
            <div className="logo">
                <i className='bx bxl-c-plus-plus' style={{fontSize: "30px"}}></i>
                <div className="logoname" style={{marginLeft: "5px",color:"black"}}>AppendIn</div>
            </div>
            <i  className='bx bx-menu-alt-right fa-solid fa-bars' onClick={btn} id="btn" style={{fontSize: "25px",color:"black",boxShadow:"  2px 2px 6px #00000073, -2px -2px 9px white",borderRadius:"5px"}} ></i>
        </div>
        <ul className="nav_list" style={{paddingLeft:"0px"}}>
            <li>
                <Link to="/">
                <i style={{color:"black"}} className="fa-solid fa-user"></i>
                    <span className="link_names">Profile</span>
                </Link>
                <span className="tooltip">Profile</span>
            </li><br />
            <li>
                <Link to="/">
                <i style={{color:"black"}} className="fa-solid fa-layer-group"></i>
                    <span className="link_names">My courses</span>
                </Link>
                <span className="tooltip">My courses</span>
            </li><br />
            <li>
                <Link to="/">
                <i style={{color:"black"}} className="fa-sharp fa-solid fa-trophy"></i>
                    <span className="link_names">Achivements</span>
                </Link>
                <span className="tooltip">Achivement</span>
            </li><br />
            <li>
                <Link to="/">
                <i style={{color:"black"}} className="fa-solid fa-gears"></i>
                    <span className="link_names">Settings</span>
                </Link>
                <span className="tooltip">Settings</span>
            </li><br />
            <li>
                <Link to="/">
                <i style={{color:"black"}} className="fa-solid fa-right-from-bracket"></i>
                    <span className="link_names">Log Out</span>
                </Link>
                <span className="tooltip">Log Out</span>
            </li><br />
            <li>
                <Link to="/">
                <i style={{color:"black"}} className="fa-solid fa-star"></i>
                    <span className="link_names">Dummy</span>
                </Link>
                <span className="tooltip">Dummy</span>
            </li>
        </ul>
        <div className="profile_content">
            <div className="profile">
                <div className="profile_details">
                    <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAIIAggMBIgACEQEDEQH/xAAbAAEBAQEBAQEBAAAAAAAAAAAABgcFBAMBAv/EADsQAAEDAgIFCAgEBwAAAAAAAAABAgMEBQYREiExQWETF1FVcYGRkwciM0JiobHRFnLBwhQVIyQyUlP/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/ANxAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADhYpxDHZKZGsRH1cvs2LsT4l4fUDpXC5Udti5WuqGQt3aS617E2qTdVj+gjdlTUs8yf7LkxF8dZAVlXUV07p6uZ0srtrnfp0dx8QNAh9INM52U1BMxvS16O+xQWrEFtuqoylqW8r/yemi7wXb3GPn61Va5HNVWuRc0VFyVANzBF4NxS+qey3XN+lMuqKZff+FePHf2loAAAAAAAAAAAAAAfy9yMarnLk1qZqvQhjV5uL7rcp6yRVye71EX3Wbk8DVMTSrDh+4PbtSByJ3pkY8AAAUAAH61zmORzFVrmqio5NqKbBhy4/wA0s9PVO9o5ujJ+ZNSmPGiejSVXWyrjXPJk+ad7U+wRYAAAAAAAAAAAAAPFe6Zay0VlO1M3SQuaicctRjBuhlWMrM613R8sbV/hqlyvjVE1NXe0DgAAKAAAaT6Oad0VkkmcmXLzKrexMk+qKQFtoZrlXRUlM3OSRdu5qb1XghsVBSR0NFDSw+zhYjE45bwj0AAAAAAAAAAAAeW411PbqR9VVP0ImJr6VXoTiB9p54qeF008jY42pm571yRCbW/WPEEstqnz5N/s3yJoo93wruXoIrEF+qr1UaUirHTtX+nCi6k4r0qcgChvmE6+2vc+Bj6qm3PY3NzfzIn1Qnt6oupU1KilDaMX3O3NSORzaqFNSNl/yRODvvmdr8W2GtTO42pdPeqxMf8APaFQmZ07TYrjdXtSlp3JGq65npkxO/f3FR+I8LU3rU1qzemzKnYnzVTw3LHVbO1Y7fCylYqZaa+s9OzcgR2YltGCqRGyOWetly09FE03J2bmoUNrulHdIOWopmyN95uxzeCpuMbllkmldLM90kjlzc5y5qp9qCuqbdUtqKOVY5G+Cp0Km9ANrBxsN3+C90ukiJHUsy5WLo4pwOyAAAAAAAAAXUhlWML467XF0cL/AO0gcrY0T3l3u+3AtsbXFbfY5UjdlLULyTFTdntXwzMqAAAKAAAAAAAA9drr57ZXR1dM7J7F1ouxyb0U2C3VkNwooqqnXOOVuaZ7U4LxMULj0b3FUfUW2RfVVOVi7djk+nzCLwAAAAAAAGeekqpV9ypaX3Y4lf3uXL9vzI41XEOFqa91DKh00kEzWoxXNRFRydnecnm9g6xm8tAIAF/zewdYzeWg5vYOsZvLQKgAX/N7B1jN5aDm9g6xm8tAIAF/zewdYzeWg5vYOsZvLQIgAX/N7B1jL5aDm9g6xl8tAIA6mGKlaTEFDIm+VGL2O1fqVfN7B1jL5aHot+BqSkrIqiSqlmSNyORitRqKqLmmYFaAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/9k=" alt=""/>
                    <div className="name_job">
                        <div className="name">Name</div>
                        <div className="job">Role</div>
                    </div>
                </div>
                <i style={{color:"black"}} className='bx bx-log-out' id="log_out"></i>
            </div>
        </div>
    </div>
    <div className="home_content">
        <div className="text">Home Content Here...</div>
    </div>

        </div>
    );
};

export default ProfessionalDashboard;