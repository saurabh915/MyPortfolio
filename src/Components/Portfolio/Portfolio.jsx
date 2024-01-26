import React from 'react'
import './Portfolio.css'
import 'swiper/css'
import Portfolio1 from '../../img/portfolio.png'
import LMS from '../../img/LMS.png'
import {Swiper,SwiperSlide } from 'swiper/react'
import HOC from '../../img/hoc.png'
import Notepage from '../../img/notepage.png'
import NewsApp from '../../img/newsapp.png'
import Textutils from '../../img/text.png'
import WhatsappClone from '../../img/WhatsappClone.png'
import Snakegame from '../../img/Snakegame.png'
import Drawing from '../../img/drawing.png'
import {themeContext} from "../../Context"
import Clapingo from '../../img/Clapingo.png'
import {useContext} from "react";
function Portfolio() {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
  <div className="portfolio" id='Portfolio'>
    <span style={{color: darkMode?'white':''}}>Recent Projects</span>
    <span>Portfolio</span>
    <Swiper spaceBetween={40}
    slidesPerView={3}
    grabCursor={true}

    className= 'portfolio-slider projects'>
      
     
        <SwiperSlide>

            <img src={LMS} alt="" style={{cursor:'pointer'}} />
        
        </SwiperSlide>
        <SwiperSlide>
            <a href="https://saurabh-patil.netlify.app/">
            <img src={Portfolio1} alt="" style={{cursor:'pointer'}} />
            </a>
        </SwiperSlide>
        <SwiperSlide>
        <a href="http://inotepage.herokuapp.com/login/">
            <img src={Notepage} alt="" style={{cursor:'pointer'}} />
            </a>
        </SwiperSlide>
        <SwiperSlide>
            <img src={NewsApp} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://paragraphutils.netlify.app/">
            <img src={Textutils} alt="" />

            </a>
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://whatsup.netlify.app/">
            <img src={WhatsappClone} alt="" />

            </a>
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://foodysnake.netlify.app/">
            <img src={Snakegame} alt="" />

            </a>
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://dsadraw.netlify.app/">
            <img src={Drawing} alt="" />

            </a>
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://Claping0.netlify.app/">
            <img src={Clapingo} alt="" />

            </a>
        </SwiperSlide>

    </Swiper>
  </div>
  )
}

export default Portfolio