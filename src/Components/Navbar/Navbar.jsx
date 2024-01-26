import React from 'react'
import Toggle from '../Toggle/Toggle'
import {Link} from 'react-scroll'
import './Navbar.css'
function Navbar() {
  return (
    <div className="n-wrapper">
        
        <div className="n-left">
            <div className="n-name">Saurabh</div>
            {/* for toggle component usecontext hook is used which helps to change the state of darkmode and change buttom position*/}
            <span><Toggle/></span>
        </div>
        <div className="n-right">
            <div className="n-list">
                <ul>
                  <Link spy={true} to='Navbar' smooth={true} activeClass='activeClass'>
                    <li>Home</li>
                    </Link>
                  <Link spy={true} to='Services' smooth={true} activeClass='activeClass'>
                    <li>Services</li>
                    </Link>
                  <Link spy={true} to='Experience' smooth={true} activeClass='activeClass'>
                    <li>Experience</li>
                    </Link>
                  <Link spy={true} to='Portfolio' smooth={true} activeClass='activeClass'>
                    <li>Portfolio</li>
                    </Link>
                  <Link spy={true} to='Testimonitals' smooth={true} activeClass='activeClass'>
                    <li>Projects</li>
                    </Link>
                  
                </ul>
            </div>
            <Link spy={true} to='Contact' smooth={true} activeClass='activeClass'>

            <button className="button n-button">
              Contact   
            </button>
          </Link>
        </div>


    </div>
  )
}

export default Navbar