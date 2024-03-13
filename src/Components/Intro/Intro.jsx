import React from 'react'
import './Intro.css'
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import boy from '../../img/boy.png'
import thumbup from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import glassesimoji from '../../img/glassesimoji.png'
import Leetcode from '../../img/leetcode.png'
import FloatingDiv from '../../Components/FloatingDiv/FloatingDiv'
import { themeContext } from '../../Context';
import {useContext} from 'react';
import { motion } from 'framer-motion';
import Geeks from '../../img/letter-g.png'
import { Link } from 'react-scroll';
function Intro() {
   
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const transition = {duration:2,type:'spring'}
  return (
   
   <div className="intro">
    <div className="i-left">
        <div className="i-name">
            <span style={{color:darkMode?'white':''}}>
                Hy! I Am
            </span>
            <span>
               Saurabh Patil
            </span>
            <span>
                Frontend Developer with high level of experience in web designing and development,producting the quality work
            </span>
        </div>
        <Link spy={true} to="Contact" smooth={true} activeClass="activeClass">
        <button className="button i-button">Hire me</button>
        </Link>
        <div className="i-icons">
            <a href="https://github.com/saurabh915/saurabh915">
            <img src={Github} alt=""   />

            </a>
            <a href="https://www.instagram.com/saurabh_patil_9945/">

            <img src={Instagram} alt=""  />
            </a>
            <a href="https://www.linkedin.com/in/saurabh-patil-69bb111b5">

            <img src={LinkedIn} alt=""  />
            </a>
            <a href="https://leetcode.com/living_code/">

<img src={Leetcode}  style={{    transform: 'scale(2.5)',
    top: '29px',
    left: '19px',
    position: 'relative',cursor:'pointer'}} alt=""  />
</a>
<a href="https://auth.geeksforgeeks.org/user/saurabhspatil4545">

<img src={Geeks}  style={{    transform: 'scale(1)',
 
    position: 'relative',cursor:'pointer'}} alt=""  />
</a>
        </div>
    </div>
    <div className="i-right">
       <img src={Vector1} alt="" srcset="" />
       <img src={Vector2} alt="" srcset="" />
       <img src={boy} alt="" srcset=""/>
       <motion.img    
       initial={{left:'50%'}}
       whileInView = {{top:'-2.6rem' , left: '9%'}}
       transition={transition}
       src={glassesimoji} alt="" srcset="" />
       <motion.div className='floating-div'
       initial={{top:'-4%' ,left:'68%'}}
       whileInView={{top: '24%',left:'81%'}}
       transition={transition}
       
       style={{top: '24%',left:'81%'}}>
      
     <a target='_blank' rel="noreferrer" href="https://drive.google.com/drive/folders/1RhfrV_p2JMCCNyJsCex27voLn6a7QusH?usp=sharing"> <FloatingDiv image= {Crown} txt1 = 'Web' txt2='Developer'/></a> 

       </motion.div>
       <motion.div 
       className='floating-div2'
       initial={{left:'55%', top:'75%'}}
       whileInView={{top: '87%',left:'23.4%'}}
       transition={transition}
      
      
       style={{top: '90%',left:'19.4%'}}>
      
      <a target='_blank' rel="noreferrer" href="https://drive.google.com/drive/folders/1hlUXrNBNj-Pyaq7W2cRXaLCbSco8vSB2?usp=sharing"><FloatingDiv image= {thumbup} txt1 = 'AI/ML' txt2='Enthusiast'/>
</a>
      </motion.div>
      <div className="blur" style={{background:"rgb(238 210 255)"}}></div>
    </div>
   </div>
  )
}

export default Intro