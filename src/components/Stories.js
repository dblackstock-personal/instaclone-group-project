import React from 'react';
import './Stories.css';
import userProfile from '../images/user-profile.png';

const Stories = () => {
    return (
        <div id="stories-element">
            <div id="user">
                <img id="user-profile-pic" src={userProfile}></img>
                <div id="user-details">
                    <div id="profile-user-webname">test_user_name</div>
                    <div id="profile-user-offlinename">John Doe</div>
                </div>
            </div>
            <div id="stories">
                <div class="title">
                    <div class="title-heading">Stories</div>
                    <div class="title-expand">Watch All</div>
                </div>

                <div id="story-users">
                <div id="story-users-for-scrolling">

                    <div class="story-user">
                        <img class="user-story-profile-pic" src={userProfile}></img>
                        <div class="user-story-details">
                            <div class="user-story-webname">jamesryan2018</div>
                            <div class="user-story-activity">2 hours ago</div>
                        </div>
                    </div>

                    <div class="story-user">
                        <img class="user-story-profile-pic" src={userProfile}></img>
                        <div class="user-story-details">
                            <div class="user-story-webname">twotone</div>
                            <div class="user-story-activity">6 hours ago</div>
                        </div>
                    </div>

                    <div class="story-user">
                        <img class="user-story-profile-pic" src={userProfile}></img>
                        <div class="user-story-details">
                            <div class="user-story-webname">timekoala</div>
                            <div class="user-story-activity">12 hours ago</div>
                        </div>
                    </div>

                    <div class="story-user">
                        <img class="user-story-profile-pic" src={userProfile}></img>
                        <div class="user-story-details">
                            <div class="user-story-webname">yesitsme</div>
                            <div class="user-story-activity">19 hours ago</div>
                        </div>
                    </div>
                    </div>
                </div>

            </div>
            <div id="suggestions">
                <div class="title">
                    <div class="title-heading">Suggestions For You</div>
                    <div class="title-expand">See All</div>
                </div>

            </div>
        </div >
    )
}

export default Stories;
