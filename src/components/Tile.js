import React, {Component} from 'react';
import likeLogo from '../images/likeLogo.svg';
import planeLogo from '../images/dm-icon.svg';
import speechIcon from '../images/speechIcon.svg';
import '../components/Tile.css';


class Tile extends Component {
  render() {
    return (
        // parent div called feedTile contains all of the components for the tile. This is repeated for each post.
              <div className="feedTile">
                    <div className="userName">
                        <img className="user-profile-img"src={this.props.profileImg}/>
                        <h4 className="post-owner">{this.props.uName}</h4>
                    </div>

                    <div className="mainImage">
                        <img src={this.props.mainImg} alt="one" id="maineImg"></img>
                    </div>

                    <div className="iconsHeart">
                {/* //needs an icon image, needs to be a clickable item NOT a button though, when clicked needs to fill in colour as red. */}
                        <img src={likeLogo} alt="heart" id="heart"></img>
                        <img src={speechIcon} alt="speechIcon" id="speechIcon"></img>
                        <img src={planeLogo} alt="planeLogo" id="planeLogo"></img>
                        {/* //if button clicked then display filled in heart, else do nothing */}
                    </div>

                    <div className="imageTitle">
                        <h3>{this.props.imgTitle}</h3>
                    </div>
                    
                    <div className="imageDesc">
                        <h5>{this.props.imgDesc}</h5>
                    </div>

                    <div className="comments">
                        <p>{this.props.comms}</p>
                    </div>

                    <div className="likeComments">
                    {/* <img src={likeComments} alt="likeComments" id="likeComments"></img>
                        <button onClick="likeIsTrue">Like</button> */}
                    </div>
        </div>
      );
    }}

export default Tile;


