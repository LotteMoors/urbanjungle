import React, { useEffect } from "react";

import M from "materialize-css/dist/js/materialize.min.js";
import { Icon } from "react-materialize";
import Loader from "../../Loader";
import "./style.scss";

const Carousel = ({ data ,setImg}) => {
  useEffect(() => {
    var elems = document.querySelectorAll(".carousel");
    M.Carousel.init(elems, {
      duration: 200,
      dist: -70,
      shift: 4,
    });
  });

  if (!data) {
    return <Loader />;
  }

  return (
    <div className="carousel-box">
      <Icon
        style={{ margin: "-3em 0 0em -0.5em ", z_index:'5', width: "15%", zIndex:"10", cursor:'pointer', position:'relative', left:'-0.8em', top:'-0.5em' }}
        onClick={() => setImg(true)}
        medium
      >
        chevron_left
      </Icon>
      <div className="carousel">
          {console.log(data.images)}
        {data?.images.flower
          ? data?.images.flower.map((fl, index) => (
              <a className="carousel-item" key={index} href="#/images">
                <img
                  src={fl.image_url}
                  alt=""
                  style={{ width: "100%", height: "auto" }}
                />
              </a>
            ))
          : null}
        {data?.images.fruit
          ? data?.images.fruit.map((fr, index) => (
              <a className="carousel-item" key={index} href="#/images">
                <img
                  src={fr.image_url}
                  alt=""
                  style={{ width: "100%", height: "auto" }}
                />
              </a>
            ))
          : null}
        {data?.images.habit
          ? data?.images.habit.map((hb, index) => (
              <a className="carousel-item" key={index} href="#/images">
                <img
                  src={hb.image_url}
                  alt=""
                  style={{ width: "100%", height: "auto" }}
                />
              </a>
            ))
          : null}
        {data?.images.leaf
          ? data?.images.leaf.map((lf, index) => (
              <a className="carousel-item" key={index} href="#/images">
                <img
                  src={lf.image_url}
                  alt=""
                  style={{ width: "100%", height: "auto" }}
                />
              </a>
            ))
          : null}
        {data?.images.bark
          ? data?.images.bark.map((br, index) => (
              <a className="carousel-item" key={index} href="#/images">
                <img
                  src={br.image_url}
                  alt=""
                  style={{ width: "100%", height: "auto" }}
                />
              </a>
            ))
          : null}
        {data?.images.flower
          ? data?.images.flower.map((fl, index) => (
              <a className="carousel-item" key={index} href="#/images">
                <img
                  src={fl.image_url}
                  alt=""
                  style={{ width: "100%", height: "auto" }}
                />
              </a>
            ))
          : null}
        {data?.images.other
          ? data?.images.other.map((others, index) => (
              <a className="carousel-item" key={index} href="#/images">
                <img
                  src={others.image_url}
                  alt=""
                  style={{ width: "100%", height: "auto" }}
                />
              </a>
            ))
          : null}
        {data?.images.undefined
          ? data?.images.undefined.map((u, index) => (
              <a className="carousel-item" key={index} href="#/images">
                <img
                  src={u.image_url}
                  alt=""
                  style={{ width: "100%", height: "auto" }}
                />
              </a>
            ))
          : null}
      </div>
    </div>
  );
};

export default Carousel;