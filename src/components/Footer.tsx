import React from "react";
import {Twitter,Facebook,Instagram,Mail} from "react-feather";

const Footer: React.FC = () => {
    return (
        <div className="footer-dark">
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-md-3 item">
                            <h3>Services</h3>
                            <ul>
                                <li><a href="www.softvasel.com">Web design</a></li>
                                <li><a href="www.softvasel.com">Development</a></li>
                                <li><a href="www.softvasel.com">Hosting</a></li>
                            </ul>
                        </div>
                        <div className="col-sm-6 col-md-3 item">
                            <h3>About</h3>
                            <ul>
                                <li><a href="www.softvasel.com">Unity</a></li>
                                <li><a href="www.instagram.com">Team Unity</a></li>
                            </ul>
                        </div>
                        <div className="col-md-6 item text">
                            <h3>Unity </h3>
                            <p>Praesent sed lobortis mi. Suspendisse vel placerat ligula. Vivamus ac sem lacus. Ut
                                vehicula rhoncus elementum. Etiam quis tristique lectus. Aliquam in arcu eget velit
                                pulvinar dictum vel in justo.</p>
                        </div>
                        <div className="col item-social">
                            <i><a href="www.facebook.com"> <Facebook/> </a></i>
                            <i><a href="www.twitter.com"> <Twitter/></a> </i>
                            <i><a href="www.instagram.com"> <Mail/></a> </i>
                            <i><a href="www.instagram.com"> <Instagram/></a> </i>
                        </div>
                    </div>
                    <p className="copyright">Unity © 2021</p>
                </div>
            </footer>
        </div>
    )
}

export default Footer;