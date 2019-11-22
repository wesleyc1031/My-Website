import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom';

//hi

class Header extends Component {
    render() {
        return (
            <header>
                <div className="block">
                </div>

                <nav2>
                    <u2>
                        <li2 className="Gmail">
                            <img src="Gmail Logo.png" width="25" height="20" /> <p5> <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=wesleyc1031@gmail.com" target="_blank"> Email Me </a> <br /> </p5>
                        </li2>

                        <li2 className="LinkedIn">
                            <img src="LinkedIn Logo.png" width="20" height="20" /> <p6> <a href="https://www.linkedin.com/in/wesley-chan-a42a07163/" target="_blank"> LinkedIn </a> <br />  </p6>
                        </li2>

                        <li2 className="Glassdoor">
                            <img src="Glassdoor Logo.png" width="15" height="20" /> <p7> <a href="https://www.glassdoor.com/member/profile/index.htm" target="_blank"> Glassdoor </a> <br /> </p7>
                        </li2>

                        <li2 className="Github">
                            <img src="Github Logo.png" width="20" height="20" />  <p8> <a href="https://github.com/wesleyc1031" target="_blank"> Github </a> <br /></p8>    
                        </li2>
                    </u2>
                </nav2>

                <div className="logo">
                    <Link to ="/">
                      <img src="Logo.png" width="170" height="80" />
                    </Link>
                </div>

                <nav>
                    <ul>
                        <li className="first">
                            <Link to="/">Home</Link>
                        </li>

                        <li>
                           <div class="dropdown">
                            <div class="dropbtn">About Me</div>

                            <div class="dropdown-content">
                                    <Link to="/AboutMe">Technical Skills<br /></Link>              
                                    <Link to="/Education">Education<br /></Link>
                                    <Link to="/Experience">Experience<br /></Link>
                                    <Link to="/Projects">Projects<br /></Link>
                                    <Link to="/Hobbies">Hobbies<br /></Link>
                            </div>
                            </div>
                        </li>

                        <li>
                            <Link to="/Contacts">Contacts </Link>
                        </li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Header;