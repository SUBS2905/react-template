import React from "react";

function Footer(){
    return(
        <div className="footer">
            <div className="footer-flex">
                <a className="footer-item" href="#">NEWS</a>
                <a className="footer-item" href="#">SPORT</a>
                <a className="footer-item" href="#">WEATHER</a>
                <a className="footer-item" href="#">FUTURE</a>
            </div>
                <a href="#navbar"><i class="fa fa-arrow-up fa-2x"></i></a>
        </div>
    );
}

export default Footer;