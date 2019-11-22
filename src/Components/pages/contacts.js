import React, { Component } from 'react';

class Contacts extends Component {
    render() {
        return (
            <div className="container-fluid">

                <h1>
                    Contact information:
                </h1>

                <p3>
                    <p1> Feel free to contact me anytime by email, on LinkedIn, or Glassdoor. You are also welcome to check out my Github to see some of the projects I worked on during college. <br /> </p1>
                    <img src="Gmail Logo.png" width="25" height="20" /> <p5> Email: <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=wesleyc1031@gmail.com" target="_blank"> wesleyc1031@gmail.com </a> <br /> </p5>
                    <img src="LinkedIn Logo.png" width="20" height="20" /> <p6> LinkedIn: <a href="https://www.linkedin.com/in/wesley-chan-a42a07163/" target="_blank"> www.linkedin.com/in/wesley-chan-a42a07163 </a> <br /> </p6>
                    <img src="Glassdoor Logo.png" width="15" height="20" /> <p7> Glassdoor: <a href="https://www.glassdoor.com/member/profile/index.htm" target="_blank"> https://www.glassdoor.com/member/profile/index.htm </a>  <br /> </p7>
                    <img src="Github Logo.png" width="20" height="20" />  <p8> Github: <a href="https://github.com/wesleyc1031" target="_blank"> https://github.com/wesleyc1031 </a> <br /></p8>    
                </p3>

            </div>
        );
    }
}

export default Contacts;