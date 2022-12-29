import React from 'react'
import "./Works.css";
import Upwork from '../../img/Upwork.png';
import Fiverr from '../../img/fiverr.png';
import Amazon from '../../img/amazon.png';
import Shopify from '../../img/Shopify.png';
import Facebook from '../../img/Facebook.png';
import { themeContext } from '../../Context';
import { useContext } from 'react';
import { motion } from 'framer-motion';
function Works() {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode; 
  return (
    <div className="Works">
        <div className="awesome">
            <span style={{color:darkMode?'white':''}}>Works for All these</span>
            <span>Brands and Clients</span>
            <spane>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores explicabo voluptas voluptate minus obcaecati adipisci.
<br />
Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ducimus reiciendis quis.
<br />
Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe?
<br />
Lorem ipsum dolor sit amet.

            </spane>

            <button className="button s-button">Hire me</button>
            <div className="blur s-blur"style={{background: "var(--purple"}}></div>
       
       <div className="w-right">
        <motion.div
        
        initial={{rotate:45}}
        whileInView={{rotate:0}}
        viewport={{margin:'-40px'}}//when it comes in view of 40% then it rotate
        transition= {{duration:3.5,type:'spring'}}
        className="w-mainCircle">
            <div className="w-secCircle">
                <img src={Upwork} alt="" />
            </div>

            <div className="w-secCircle">
                <img src={Fiverr} alt="" />
            </div>


            <div className="w-secCircle">
                <img src={Amazon} alt="" />
            </div>


            <div className="w-secCircle">
                <img src={Shopify} alt="" />
            </div>

            <div className="w-secCircle">
                <img src={Facebook} alt="" />
            </div>
              {/* background circles */}
        <div className="w-backCircle blueCircle"></div>
       <div className="w-backCircle yellowCircle"></div>
        </motion.div>
      
       </div>
        </div>
    </div>
  )
}

export default Works