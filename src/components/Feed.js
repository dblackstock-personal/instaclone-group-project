import React, {Component} from 'react';
import Tile from '../components/Tile';
import img1 from '../images/1.PNG';
import img2 from '../images/2.png';
import img3 from '../images/3.jpg';
import img4 from '../images/4.jpg';
import img5 from '../images/5.jpg';
import img6 from '../images/6.jpg';
import img7 from '../images/7.jpg';
import img8 from '../images/8.jpg';
import img9 from '../images/9.jpg';
import img10 from '../images/10.jpg';
import img11 from '../images/11.jpg';
import img12 from '../images/12.jpg';
import img13 from '../images/13.jpg';
import img14 from '../images/14.jpg';
import img15 from '../images/15.jpg';
import img16 from '../images/16.jpg';
import img17 from '../images/17.png';
import img18 from '../images/18.jpg';
import img19 from '../images/19.jpg';
import img20 from '../images/20.jpg';
import img21 from '../images/21.jpg';
import img22 from '../images/22.jpg';
import img23 from '../images/23.jpg';
import { isTSAnyKeyword } from '@babel/types';


     class Feed extends React.Component {
     constructor(props) {
       super(props);
       this.state = { 
               allUsers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22], 
               
               uName: ['Raven_Wizrd', 'Another-Dead_Star', 'Captain.Kittens', 'Snooz20217', 'Tommo_STAR.90', 'MrShojy', 'TheLuckyFool_93', 'GirlHasCake1984', 'Raj.1961.Patel', 'EpicQUickScooper95', 
               'MrCREAMYgoodness', 'ViolentSalad45', 'Ding_Ding_Pain', 'THEflanMan', 'Toast-WARLORD', 'checkTheLasagne', 'ShamefullyCrassss', 'DrDrakeRemoray', 'TraumaticPenguin', 'Jezley-Swipes',
               'Scooby-Snax5617', 'Jess-BerryDopeyLady', 'VeryHappyHamster934'], 
               
               mainImg: [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12,
               img13, img14, img15, img16, img17, img18, img19, img20, img21, img22, img23],
              
              imgTitle: ['Painting', 'Wise words from Mr Churchill', 'Astral projection', 'Otters I saw today', 'Slytherin', 'Brothers love each other', 
              'So true!!', 'Tattoo I need!', 'My cat Tabitha', 'Work hard, dream harder', 
              'I love Lady Gaga', 'Otter with a snowball', 'Cool butterfly graphic art', 'I love this show', 'First crop looks amazing', 'Dream states', 
              'best shop in Amsterdam', 'Alex Grey', 'Fennic Fox <3', 'New Star Wars soon!!',
              'If Firefox were Fire-otter...', 'My new tattoo! I love it!', "Jenae's 20th night out!"],
              
              imgDesc: ['Finally finished my painting, really enjoyed it. What do you think?', 'This quote helped me today...', 
              'Performance art at uni today, has soooo much fun making this!', "Considering wildlife photography, can't believe how close I got to these otters! I love how in love they are.",
               'Loving this Slytherin tattoo design, need some new ink', 'Zen and Pudding in their cosy new cat-tree', 'Each obstacle is a challenge to overcome and teach us something new. Be excited by new challenges!',
                'Considering asking my S/O to get this tat', 'My cat Tabitha, she is so photogenic its sickening', 
                'I set myself a bigger goal and my dreams are finally coming into view', 'The woman, the icon, the godess.', 
                'I was so lucky to snap this photo in Lochabar - Scotland', "I am so into this astral graphic art movement these days, really don't know if I should get this as a tattoo or draw a mural", 
                "Series two is out now. If you haven't seen Final Space (adult themed cartoon), give it a try", 
                "Dylan has finally finished growing his latest stash of cooking mushrooms. Yep, just for cooking guys...", 'Dream states', 
                "Gourmet bud shop in Amsterdam, check out their merch at https://www.amsterdamgenetics.com/shop/merchandise/", 'I could stare at his work for hours. Does anyone else find Alex Grey fascinating?', 
                'My next pet in an ideal world, such beautiful creatures!', 'Really stoked for the new film coming out!','Sat this little guy at The Deep aquarium, Hull', 
                'A big shout out to Andy Walker at Creative_Vandals!', "Night out in York with Jenae, I look so spaced out haha"],
              
              
              comms: ['Wow thats one awesome painting, such talent!', 'So true', 'This is fantastic, did you do it for film or photography?', 'Awwwww cute couple', "If you get this I solemnly swear I'll call you Malfoy for life XD", 
              '*Squeee!!* such handsome boys! <3', 'Thank you, this has really spoken to me today.', 'Awww m8 this is sick as sh*t! Would you be offended if I got it too?', 'I remember that little fluffball! How old is she now?', 'This.', 
              "Have you seen her in AHS Hotel? She is fantastic!", "If he's playing, I'm game for a snowball fight! :P", 'Awesome', 'Oooooo finally someone else who has seen this too!', 
              "How do you cook with psilocybin man? I'm not convinced that its just for cooking!!", 'This totally reminds me of a Netflix show called Love-Death-Robots cos theres a great animation about swimming in an imaginary psychadellic ocean.', 
              'I remember last time we went, awesome holiday!', 'Tool!!!!!!!!', 'If you get a Fennic Fox, you also get to adopt me. I will never leave', 'Wanna come to the cinema with me?',
              'OMG haha you should establish a new browser just for this lol!', 'Wow so beautiful Jess! Flower fairies are my favourite too! I love the undercut too, how long have you had your hair like this?', "Thanks so much for a fab evening ladies! It was great to catch up!"]}
       
     }
     render() {
       let { allUsers } = this.state;
       return(
       <div>
          <div className="wrapper" id="wrapper">
           <Tile uName={this.state.uName[0]}mainImg={this.state.mainImg[0]} imgTitle={this.state.imgTitle[0]} imgDesc={this.state.imgDesc[0]} comms={this.state.comms[0]}/>
           <Tile uName={this.state.uName[1]} mainImg={this.state.mainImg[1]} imgTitle={this.state.imgTitle[1]} imgDesc={this.state.imgDesc[1]} comms={this.state.comms[1]}/>
           <Tile uName={this.state.uName[2]}mainImg={this.state.mainImg[2]} imgTitle={this.state.imgTitle[2]} imgDesc={this.state.imgDesc[2]} comms={this.state.comms[2]}/>
           <Tile uName={this.state.uName[3]} mainImg={this.state.mainImg[3]} imgTitle={this.state.imgTitle[3]} imgDesc={this.state.imgDesc[3]} comms={this.state.comms[3]}/>
           <Tile uName={this.state.uName[4]}mainImg={this.state.mainImg[4]} imgTitle={this.state.imgTitle[4]} imgDesc={this.state.imgDesc[4]} comms={this.state.comms[4]}/>
           <Tile uName={this.state.uName[5]} mainImg={this.state.mainImg[5]} imgTitle={this.state.imgTitle[5]} imgDesc={this.state.imgDesc[5]} comms={this.state.comms[5]}/>
           <Tile uName={this.state.uName[6]}mainImg={this.state.mainImg[6]} imgTitle={this.state.imgTitle[6]} imgDesc={this.state.imgDesc[6]} comms={this.state.comms[6]}/>
           <Tile uName={this.state.uName[7]} mainImg={this.state.mainImg[7]} imgTitle={this.state.imgTitle[7]} imgDesc={this.state.imgDesc[7]} comms={this.state.comms[7]}/>
           <Tile uName={this.state.uName[8]}mainImg={this.state.mainImg[8]} imgTitle={this.state.imgTitle[8]} imgDesc={this.state.imgDesc[8]} comms={this.state.comms[8]}/>
           <Tile uName={this.state.uName[9]} mainImg={this.state.mainImg[9]} imgTitle={this.state.imgTitle[9]} imgDesc={this.state.imgDesc[9]} comms={this.state.comms[9]}/>
           <Tile uName={this.state.uName[10]}mainImg={this.state.mainImg[10]} imgTitle={this.state.imgTitle[10]} imgDesc={this.state.imgDesc[10]} comms={this.state.comms[10]}/>
           <Tile uName={this.state.uName[11]} mainImg={this.state.mainImg[11]} imgTitle={this.state.imgTitle[11]} imgDesc={this.state.imgDesc[11]} comms={this.state.comms[11]}/>
           <Tile uName={this.state.uName[12]}mainImg={this.state.mainImg[12]} imgTitle={this.state.imgTitle[12]} imgDesc={this.state.imgDesc[12]} comms={this.state.comms[12]}/>
           <Tile uName={this.state.uName[13]} mainImg={this.state.mainImg[13]} imgTitle={this.state.imgTitle[13]} imgDesc={this.state.imgDesc[13]} comms={this.state.comms[13]}/>
           <Tile uName={this.state.uName[14]}mainImg={this.state.mainImg[14]} imgTitle={this.state.imgTitle[14]} imgDesc={this.state.imgDesc[14]} comms={this.state.comms[14]}/>
           <Tile uName={this.state.uName[15]} mainImg={this.state.mainImg[15]} imgTitle={this.state.imgTitle[15]} imgDesc={this.state.imgDesc[15]} comms={this.state.comms[15]}/>
           <Tile uName={this.state.uName[16]}mainImg={this.state.mainImg[16]} imgTitle={this.state.imgTitle[16]} imgDesc={this.state.imgDesc[16]} comms={this.state.comms[16]}/>
           <Tile uName={this.state.uName[17]} mainImg={this.state.mainImg[17]} imgTitle={this.state.imgTitle[17]} imgDesc={this.state.imgDesc[17]} comms={this.state.comms[17]}/>
           <Tile uName={this.state.uName[18]}mainImg={this.state.mainImg[18]} imgTitle={this.state.imgTitle[18]} imgDesc={this.state.imgDesc[18]} comms={this.state.comms[18]}/>
           <Tile uName={this.state.uName[19]} mainImg={this.state.mainImg[19]} imgTitle={this.state.imgTitle[19]} imgDesc={this.state.imgDesc[19]} comms={this.state.comms[19]}/>
           <Tile uName={this.state.uName[20]} mainImg={this.state.mainImg[20]} imgTitle={this.state.imgTitle[20]} imgDesc={this.state.imgDesc[20]} comms={this.state.comms[20]}/>
           <Tile uName={this.state.uName[21]}mainImg={this.state.mainImg[21]} imgTitle={this.state.imgTitle[21]} imgDesc={this.state.imgDesc[21]} comms={this.state.comms[21]}/>
           <Tile uName={this.state.uName[22]} mainImg={this.state.mainImg[22]} imgTitle={this.state.imgTitle[22]} imgDesc={this.state.imgDesc[22]} comms={this.state.comms[22]}/>
        </div>
         <div>allUsers = {
           allUsers.length }</div>
       </div>
       )
     }
   }

       
export default Feed