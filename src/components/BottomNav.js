import React, { Component } from 'react';
import homeLogo from '../images/homeLogo.svg';
import searchLogo from '../images/searchLogo.svg';
import addLogo from '../images/addLogo.svg';
import likeLogo from '../images/likeLogo.svg';
import userLogo from '../images/userLogo.svg';
import '../components/BottomNav.css'


export default class BottomNav extends Component {
    render() {
        return (
            <React.Fragment>
                <nav id="bottom-navBar">
                    <a href="#"><img id="homeLogo-btm-nav" alt="home" src={homeLogo} /></a>
                    <a href="#"><img id="searchLogo-btm-nav" alt="search" src={searchLogo} /></a>
                    <a href="#"><img id="addLogo-btm-nav" alt="add" src={addLogo} /></a>
                    <a href="#"><img id="likeLogo-btm-nav" alt="notifications" src={likeLogo} /></a>
                    <a href="#"><img id="profileLogo-btm-nav" alt="profile" src={userLogo} /></a>
                </nav>
            </React.Fragment>
        )
    }
}