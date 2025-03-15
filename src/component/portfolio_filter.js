import React, { useState } from "react";
import Menu from "../menu/port_menu";

const Portfolio_filter = () => {
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
            <div>
                <div class="justify-content-between flex-wrap">
                    <div class="row">
                        <div class="col-lg-12 text-center my-3">
                            <h2 class=" listed-heading my-5">
                                <b>Our Portfolio</b>
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="container text-center">
                    <ul className="port_filter nav nav-pills justify-content-center my-3">
                        <li className="nav-item">
                            <a
                                className={
                                    activebtn == "breakfast"
                                        ? " flex-fill  nav-link active"
                                        : "nav-link"
                                }
                                href="javascrip:0;"
                                onClick={() => filterItem("breakfast")}
                            >
                                Mobility
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className={
                                    activebtn == "lunch"
                                        ? " flex-fill  nav-link  active "
                                        : "nav-link"
                                }
                                href="javascrip:0;"
                                onClick={() => filterItem("lunch")}
                            >
                                Web & Full Stack
                            </a>
                        </li>
                        <li className="nav-item">
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
                                E-Commerce & CMS
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
                                Designing
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="container my-4">
                    <div className="row">
                        {items.map((elem) => {
                            const { id, name, image } = elem;

                            return (
                                <div className="col-xl-6 col-lg-6 col-md-6" id={id}>
                                    <div class="col-xl-6 col-lg-6 col-md-6">
                                        <img
                                            class="r-50 img-fluid filter-special w-100"
                                            src={image}
                                            alt={name}
                                        />
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

export default Portfolio_filter;
