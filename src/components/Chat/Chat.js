import React from 'react';
import "./Chat.css"

const Chat = () => {
    return (
        <div>
            <div className='chat-box-container' style={{lineHeight:"2" ,borderBottom:"2px solid purple"}}>
            <div className='profile-pic'>
                 <img style={{width:"20px"}} src="https://cdn.pixabay.com/photo/2017/01/31/15/12/avatar-2024924__340.png" alt="" />
                <span style={{fontSize:""}}> <b>Name</b></span>
            </div>
            <div className='oposite'>
                <img style={{width:"20px"}} src="https://cdn.pixabay.com/photo/2017/01/31/15/12/avatar-2024924__340.png" alt="" />
                adas</div>
            <div className='me'>asdasd</div>
            <div className='oposite'>
                <img style={{width:"20px"}} src="https://cdn.pixabay.com/photo/2017/01/31/15/12/avatar-2024924__340.png" alt="" />
                asdasd</div>
            <div className='me'>asdas</div>
            <div className='oposite'>
                <img style={{width:"20px"}} src="https://cdn.pixabay.com/photo/2017/01/31/15/12/avatar-2024924__340.png" alt="" />
                asdasd</div>
                <br />
            <div style={{textAlign:"center"}}>
                <input type="text" style={{marginTop:"20px",height:"30px"}} /><button style={{border: "none",backgroundColor:"dodgerblue",borderRadius:" 5px"}}>Send</button>
            </div>
            <br />
        </div>
{/* Active */}
            <div className='active-connection'>
                <h5>Active Connections</h5>
                <div className='active-connection'>
                <div className='active'><img style={{width:"20px"}} src="https://cdn.pixabay.com/photo/2017/01/31/15/12/avatar-2024924__340.png" alt="" />Name1</div>
                <div className='active'><img style={{width:"20px"}} src="https://cdn.pixabay.com/photo/2017/01/31/15/12/avatar-2024924__340.png" alt="" />Name2</div>
                <div className='active'><img style={{width:"20px"}} src="https://cdn.pixabay.com/photo/2017/01/31/15/12/avatar-2024924__340.png" alt="" />Name3</div>
                <div className='active'><img style={{width:"20px"}} src="https://cdn.pixabay.com/photo/2017/01/31/15/12/avatar-2024924__340.png" alt="" />Name4</div>
                <div className='active'><img style={{width:"20px"}} src="https://cdn.pixabay.com/photo/2017/01/31/15/12/avatar-2024924__340.png" alt="" />Name5</div></div>
            </div>
        </div>
    );
};

export default Chat;