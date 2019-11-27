import React from 'react';
import instaIcon from '../images/instagram-icon.svg';
import instaName from '../images/instagram-name.png';
import exploreIcon from '../images/explore-icon.svg';
import activityIcon from '../images/activity-icon.svg';
import userIcon from '../images/user-icon.svg';
import './TopNav.css'
// icon from fontawesome.com, no changes have been made, license can be found at https://fontawesome.com/license

export const TopNav = () => {
    return (
        <div id="top-nav">
            <div id="left-side">
            {/* this should contain the instagram logo, a vertical line and the instagram name */}
            <img className="icon insta-icon" src={instaIcon} alt="Instagram"/>
            <div id="vertical-line"></div>
            <img id="insta-name" src={instaName} alt="Instagram"/>
            </div>

            <div id="right-side">
            {/* this should contain the explore, activity and profile icons */}
            <img className="icon explore-icon" src={exploreIcon} alt="Explore"/>
            <img className="icon activity-icon" src={activityIcon} alt="Activity"/>
            <img className="icon user-icon" src={userIcon} alt="Activity"/>
            </div>
        </div>
    )
}
