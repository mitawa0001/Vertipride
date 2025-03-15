import React, { useState } from "react";
import Menu from "../menu/menu";
import 'bootstrap/dist/css/bootstrap.min.css';


const Gallery = () => {
  const [items, setItems] = useState(Menu);
  const [activebtn, setActiveBtn] = useState("");
  console.log(activebtn, "activebtn");

  const filterItem = (categItem) => {
    const updateItems = Menu.filter((curElem) => {
      return curElem.category === categItem;
    });

    setItems(updateItems);
    setActiveBtn(categItem);
  };
  return (
    <>
      <div className="abs">

        <div class="justify-content-between flex-wrap">
          <div class="row">
            <div class="col-lg-12 text-center my-3">
              <h2 class=" listed-heading">
                <b>Technology We Use</b>
              </h2>
            </div>
          </div>
        </div>
        <div className=" text-center">
          <ul className=" tabs-nav  nav nav-pills justify-content-center ">
            <div className="container d-flex ">
              <li className="nav-item border-right">
                <a
                  className={
                    activebtn == "breakfast"
                      ? " flex-fill  nav-link active"
                      : "nav-link"
                  }
                  href="javascrip:0;"
                  onClick={() => filterItem("breakfast")}
                >
                  Android
                  Development
                </a>
              </li>
              <li className="nav-item border-right">
                <a
                  className={
                    activebtn == "lunch"
                      ? " flex-fill  nav-link  active "
                      : "nav-link"
                  }
                  href="javascrip:0;"
                  onClick={() => filterItem("lunch")}
                >
                  Digital
                  Marketing
                </a>
              </li>
              <li className="nav-item border-right">
                <a
                  className={
                    activebtn == "evening"
                      ? " flex-fill  nav-link active"
                      : "nav-link"
                  }
                  // className={active2 ? "nav-link active" : "nav-link"}
                  href="javascrip:0;"
                  onClick={() => filterItem("evening")}
                >
                  UI/UX
                  Design
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={
                    activebtn == "dinner"
                      ? " flex-fill  nav-link active"
                      : "nav-link"
                  }
                  // className={active3 ? "nav-link active" : "nav-link"}
                  href="javascrip:0;"
                  onClick={() => filterItem("dinner")}
                >
                  Graphic
                  Design
                </a>
              </li>
            </div>

          </ul>
        </div>


        <div class="tabs-content">
          <div class="tabsBody">
            <div class="first_ring">
              <div className="imgCenter center rounded-circle">

              </div>
            </div>
            <div class="second_ring">
              <div className="imgCenter left rounded-circle"></div>
              <div className="imgCenter right rounded-circle"></div>
            </div>
            <div class="third_ring">
              <div className="imgCenter left rounded-circle"></div>
              <div className="imgCenter center rounded-circle"></div>
              <div className="imgCenter right rounded-circle"></div>
            </div>
          </div>
        </div>

        <div className="container my-4">
          <div className="row ">
            {items.map((elem) => {
              const { name, image1, } = elem;
              return (
                <div className=" alpha-11">

                  <div class="filter-1-box container">
                    <img
                      class="img-fluid filter-special"
                      src={image1}
                      alt={name}
                    />
                  </div>

                </div>
              );
            })}
            {items.map((elem) => {
              const { name, image2 } = elem;
              return (
                <div className="alpha-22">
                  <div class="card mb-3 ">
                    <container>
                      <img
                        class="img-fluid filter-special"
                        src={image2}
                        alt={name}
                      />
                    </container>
                  </div>
                </div>
              );
            })}
            {items.map((elem) => {
              const { name, image3 } = elem;
              return (
                <div className="alpha-33">
                  <div class="card mb-3 ">
                    <container>
                      <img
                        class="img-fluid filter-special"
                        src={image3}
                        alt={name}
                      />
                    </container>
                  </div>
                </div>
              );
            })}
            {items.map((elem) => {
              const { name, image4 } = elem;
              return (
                <div className="alpha-44">
                  <div class="card mb-3 ">
                    <container>
                      <img
                        class="img-fluid filter-special"
                        src={image4}
                        alt={name}
                      />
                    </container>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

     
    </>
  );
};

export default Gallery;
