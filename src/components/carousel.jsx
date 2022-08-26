import React from "react";

function CarouselItem(props) {
  return (
    <div
      className="carousel-card"
      style={{
        backgroundColor: "var(--" + props.colour + ")"
      }}
    >
      <h3>Lorem Ipsum</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
        fermentum nisl velit, sed consectetur eros lobortis in. Donec vitae
        aliquam tortor. Interdum et malesuada fames ac ante ipsum primis in.
      </p>
    </div>
  );
}

export default CarouselItem;
