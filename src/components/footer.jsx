import React from "react";

function Footer(){
    return(
        <div className="footer">
            <div className="footer-flex">
                <a className="footer-item" href="#section-1">NEWS</a>
                <a className="footer-item" href="#section-2">SPORT</a>
                <a className="footer-item" href="#section-3">WEATHER</a>
                <a className="footer-item" href="#section-4">FUTURE</a>
            </div>
                <a href="#navbar" className="to-top"><i class="fa fa-arrow-up fa-2x"></i></a>
        </div>
    );
}

export default Footer;