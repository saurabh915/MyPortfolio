import React from 'react'
import './Services.css'
import HeartEmoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import Card from '../Card/Card'
import Resume from  './Resume.pdf'
import { useContext } from 'react'
import { themeContext } from '../../Context'
import { motion } from 'framer-motion'
function Services() {
        const transition = {duration:1,type:'spring'}
        const theme = useContext(themeContext);
        const darkMode = theme.state.darkMode;
  return (
    <div className="services" id='Services'>
        {/* left side */}
        <div className="awesome" id='s-awesome'>
<span style={{color: darkMode?'white':""}}>My awesome</span>
<span>services</span>
<span>
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
    <br />
     Animi sunt fugit excepturi quos .
</span>
<a href={Resume} download>
<button className="button s-button">Download CV</button>
</a>
        </div>
<div className="blur s-blur1" style={{background: '#ABF1FF94' }}></div>
        {/* right side */}
        <div className="cards">
 <motion.div
className='fwd'
 whileInView={{left:'14rem'}}
initial={{left:'19rem'}}
transition={transition}
style={{left: '14rem'}}>
<Card 

emoji = {HeartEmoji}
heading = {'Frontend Web Development'}
detail = {"HTML , CSS , JS , React,Bootstrap"}
/>
</motion.div>
<div className='bwd' style={{top: '12rem' ,left:'-4rem'}}>
<Card 

emoji = {Glasses}
heading = {'Backend Development'}
detail = {"Nodejs,Mongodb,Express"}
/>
</div>
<div className="blur s-blur2" style={{background: "var(--purple)"}}></div>
<motion.div 
className='cc'
 whileInView={{left:'12rem'}}
 initial={{left:'19rem'}}
 transition={transition}
style={{top: '19rem' ,left:'12rem',width:'30px'}}>
<Card 
emoji = {Humble}
heading = {'Competative Coder'}
detail = {"Practiced 150+ unique problems on leetcode , GeekforGeeks ,HackerRank..."}
/>
</motion.div>
<div className="blur s-blur2" style={{background: "var(--purple)"}}></div>

        </div>
    </div>
  )
}

export default Services