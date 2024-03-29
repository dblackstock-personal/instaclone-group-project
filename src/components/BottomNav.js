import React, { Component } from 'react';
import homeLogo from '../images/homeLogo.svg';
import searchLogo from '../images/searchLogo.svg';
import addLogo from '../images/addLogo.svg';
import likeLogo from '../images/likeLogo.svg';
import userLogo from '../images/userLogo.svg';
import '../components/BottomNav.css'

export default class BottomNav extends Component {

    // True or false state that the ternary evaluates when a button is clicked. 
    state = {
        homeButtonClicked: false,
        resetButtonClicked: false, 
        likeButtonClicked: false, 
        profileButtonClicked: false,
        addButtonClicked: false,
    }; 

    // Reset buttons: sets all of the icons back to the default black colour upon selecting a new page.
    resetBtns = () => {
        this.setState({
            homeButtonClicked: false,
            searchButtonClicked: false, 
            likeButtonClicked: false, 
            profileButtonClicked: false,
            addButtonClicked: false,
        })
    } 
    // Set active function - this changes the colour of the icon at the bottom of the screen. 
    // This function could also set the page to transfer the user to their profile, home etc
    setActive = (e) => {
        this.resetBtns()
        if(e.target.id == "homeLogo-btm-nav" ){
            this.setState({
                homeButtonClicked: true,
            })
        } else if(e.target.id == "searchLogo-btm-nav"){
            this.setState({
                searchButtonClicked: true, 
            })
        } else if(e.target.id == "addLogo-btm-nav"){
            this.setState({
                addButtonClicked: true,
            })
        } else if(e.target.id == "likeLogo-btm-nav"){
            this.setState({
                likeButtonClicked: true, 
            }) 
        } else if(e.target.id == "profileLogo-btm-nav"){
            this.setState({
                profileButtonClicked: true,
            })
        }
    }

    render() {
        return (
            <React.Fragment>
                <nav id="bottom-navBar">
                    <a href="#"><img className={this.state.homeButtonClicked ? 'clicked' : 'reset'} id="homeLogo-btm-nav" alt="home" src={homeLogo} onPointerDown={this.setActive}/></a>
                    <a href="#"><img className={this.state.searchButtonClicked ? 'clicked' : 'reset'} id="searchLogo-btm-nav" alt="search" src={searchLogo} onPointerDown={this.setActive}/></a>
                    <a href="#"><img className={this.state.addButtonClicked ? 'clicked' : 'reset'} id="addLogo-btm-nav" alt="add" src={addLogo} onPointerDown={this.setActive}/></a> 
                    <a href="#"><img className={this.state.likeButtonClicked ? 'clicked' : 'reset'} id="likeLogo-btm-nav" alt="notifications" src={likeLogo} onPointerDown={this.setActive}/></a>
                    <a href="#"><img className={this.state.profileButtonClicked ? 'clicked' : 'reset'} id="profileLogo-btm-nav" alt="profile" src={userLogo}  onPointerDown={this.setActive}/></a>                 
                </nav>
            </React.Fragment>
        )
    }
}
