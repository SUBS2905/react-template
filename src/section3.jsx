import React from "react";
import Card from "./components/card";

function Section3(){
    return(
        <section className="white-container" id="section-3">
            <Card imgsrc="goblin.jpg" />
            <Card imgsrc = "ji-eun-tak.jpg" />
            <Card imgsrc = "grim-reaper.jpg" />
        </section>
    );
}

export default Section3;