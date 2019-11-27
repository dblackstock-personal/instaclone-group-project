import React from 'react';
import instaIcon from '../images/instagram-icon.svg';
import instaName from '../images/instagram-name.png';
import exploreIcon from '../images/explore-icon.svg';
import activityIcon from '../images/activity-icon.svg';
import userIcon from '../images/user-icon.svg';
import './TopNav.css'
// icon from fontawesome.com, no changes have been made, license can be found at https://fontawesome.com/license

export default class TopNav extends React.Component {

    render(){
    return (
        <div id="top-nav">
            <div id="left-side">
            {/* this should contain the instagram logo, a vertical line and the instagram name */}
            <img className="icon insta-icon" src={instaIcon} alt="Instagram"/>
            <div id="vertical-line"></div>
            <img id="insta-name" src={instaName} alt="Instagram"/>
            </div>
            <input id="top-search-box" placeholder="search"></input>
            <div id="right-side">
            {/* this should contain the explore, activity and profile icons */}
            {/* <img className="icon explore-icon" src={exploreIcon} alt="Explore"/> */}
            <a href="#"><img className="icon explore-icon" alt="Explore" src={exploreIcon} onMouseDown={this.props.logoClick} onMouseUp={this.props.logoClick} /></a>
            <a href="#"><img className="icon activity-icon" alt="Activity" src={activityIcon} onMouseDown={this.props.logoClick} onMouseUp={this.props.logoClick} /></a>
            <a href="#"><img className="icon user-icon" alt="User" src={userIcon} onMouseDown={this.props.logoClick} onMouseUp={this.props.logoClick} /></a>
            </div>
        </div>
    )
    }
}
