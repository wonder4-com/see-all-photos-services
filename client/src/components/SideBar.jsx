import React from 'react';

const SideBar = ({ photo }) => {
    const { id, user_name, photo_title, date_added, url_address, comment } = photo;
    return (
        <div className="side-bar" >
            <div className="side-bar-image"> 
            <img src={url_address} alt="" />
            </div>
        </div>
    )
}

export default SideBar;