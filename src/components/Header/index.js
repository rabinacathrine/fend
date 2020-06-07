/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './style.css';
const Header = (props) => {
    return(
    
    // <header className="header">
    //     {/* <nav className="nav"> */}
    //         <ul>
    //         <li><a href="//#endregion">Home</a></li>
    //        <li> <a href="#">Contact Us</a></li>
    //         <li><button className="button"><a href="#">Exit</a></button></li>
    //         </ul>

    //     {/* </nav> */}
    //     {/* <div>links</div> */}
    // </header>
    <nav>
            <ul>
                <li class="logo-text">Qurious</li>
                <li>
                    <ul>
                        <li><a href="#home" class="nav-link">Home</a></li>
                        {/* <li><a href="#bio" class="nav-link">Bio</a></li>
                        <li><a href="#portfolio" class="nav-link">Portfolio</a></li>
                        <li><a href="#skills" class="nav-link">Skills</a></li> */}
                        <li><a href="#contact" class="nav-link link-button">Exit</a></li>
                     </ul>
                </li>
            </ul>
        </nav>
)
    }
export default Header;