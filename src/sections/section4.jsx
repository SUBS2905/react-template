import React from "react";
import Carousel from "../components/carousel";

function Section4(){
    return(
        <section className="black-container" id="section-4">
            <div className="carousel">
                <h1>Carousel</h1>
                <div className="carousel-body row">
                    <Carousel colour="Orange"/>
                    <Carousel colour="Blue"/>
                </div>
                <div className="carousel-control">
                    <button><i className="fa fa-chevron-left fa-2x" ></i></button>
                    <button><i className="fa fa-chevron-right fa-2x" ></i></button>
                </div>
            </div>
        </section>
    );
}

export default Section4;