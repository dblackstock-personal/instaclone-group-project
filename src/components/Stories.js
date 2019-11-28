import React from 'react';
import './Stories.css';
import userProfile from '../images/user-profile.png';

const Stories = () => {
    return (
        <div id="stories-element">
            <div id="user">
                <img id="user-profile-pic" src={userProfile}></img>
                <div id="profile-user-webname">user_name</div>
                <div id="profile-user-offlinename">John Doe</div>
            </div>
            <div id="stories"></div>
            <div id="suggestions"></div>
        </div>
    )
}

export default Stories;
