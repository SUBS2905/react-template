import React from "react";

function Header(){
    return(
        <div className="nav-container">
            <nav className="navbar navbar-expand-lg">
                <a className="navbar-brand" href="#brand-text">React Template</a>

                <button className="navbar-toggler all_btn navbar-dark" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">

                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#">FEED</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">AUTHORS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">EXPLORE</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">BLOG</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">CONTACT</a>
                        </li>
                    </ul>

                </div>
            </nav>
        </div>)
}

export default Header