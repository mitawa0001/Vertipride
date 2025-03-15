import React from "react";
import logo01 from "../image/web logo/01.png";
import logo02 from "../image/web logo/02.png";
import logo03 from "../image/web logo/03.png";
import logo04 from "../image/web logo/05.png";
import logo05 from "../image/web logo/04.png";
import logo06 from "../image/web logo/06.png";
import logo07 from "../image/web logo/07.png";
import logo08 from "../image/web logo/08.png";
import logo09 from "../image/web logo/09.png";
import logo010 from "../image/web logo/10.png";
import logo011 from "../image/web logo/11.png";

function partners_slider() {
  return (
    <>
      <section class="mt-5">
        <h1 class="text-dark h3 mb-2 text-center "></h1>
        <div className="about-section-title text-center my-0">
          <h2>Our partners</h2>
        </div>
        <div class="slider">
          <div class="slide-track">
            <div class="slide">
              <img
                class="auto-scrool"
                src={logo01}
                alt=""
                height="100%"
                width="100%"
              ></img>
            </div>
            <div class="slide">
              <img
                class="auto-scrool"
                src={logo02}
                alt=""
                height="100%"
                width="100%"
              ></img>
            </div>
            <div class="slide">
              <img
                class="auto-scrool"
                src={logo03}
                alt=""
                height="100%"
                width="100%"
              ></img>
            </div>
            <div class="slide">
              <img
                class="auto-scrool"
                src={logo04}
                alt=""
                height="100%"
                width="100%"
              ></img>
            </div>
            <div class="slide">
              <img
                class="auto-scrool"
                src={logo05}
                alt=""
                height="100%"
                width="100%"
              ></img>
            </div>
            <div class="slide">
              <img
                class="auto-scrool"
                src={logo06}
                alt=""
                height="100%"
                width="100%"
              ></img>
            </div>
            <div class="slide">
              <img
                class="auto-scrool"
                src={logo07}
                alt=""
                height="100%"
                width="100%"
              ></img>
            </div>
            <div class="slide">
              <img
                class="auto-scrool"
                src={logo07}
                alt=""
                height="100%"
                width="100%"
              ></img>
            </div>
            <div class="slide">
              <img
                class="auto-scrool"
                src={logo08}
                alt=""
                height="100%"
                width="100%"
              ></img>
            </div>
            <div class="slide">
              <img
                class="auto-scrool"
                src={logo09}
                alt=""
                height="100%"
                width="100%"
              ></img>
            </div>

            <div class="slide">
              <img
                class="auto-scrool"
                src={logo010}
                alt=""
                height="100%"
                width="100%"
              ></img>
            </div>
            <div class="slide">
              <img
                class="auto-scrool"
                src={logo011}
                alt=""
                height="100%"
                width="100%"
              ></img>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default partners_slider;
