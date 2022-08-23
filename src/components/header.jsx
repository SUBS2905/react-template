import React from "react";

function Header(){
    return(
        <div className="nav-container" id="navbar">
            <nav className="navbar navbar-expand-lg">
                <a className="navbar-brand" href="#">React Template</a>

                <button className="navbar-toggler all_btn navbar-dark" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">

                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#section-1">FEED</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#section-2">AUTHORS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#section-3">EXPLORE</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#section-4">BLOG</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#section-5">CONTACT</a>
                        </li>
                    </ul>

                </div>
            </nav>
        </div>)
}

export default Header