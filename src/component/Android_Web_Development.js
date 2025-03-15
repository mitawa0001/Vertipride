import React, { useState } from "react";
import Menu from "../menu/portfolio_menu";

function Android_Web_Development() {
    const [item, setItem] = useState(Menu);
    const getItem = (cat) => {
        var upadatedValue = Menu.filter((items) => {
            return items.category === cat;
        });
        setItem(upadatedValue);
    };
    return (
        <>
            <ul className="d-flex flex-wrap justify-content-center py-4">
                <li className="filter_item_port ml-2" onClick={() => setItem(Menu)}>
                    All
                </li>
                <li
                    className="filter_item_port ml-2"
                    onClick={() => getItem("Brochure")}
                >
                   Android Development
                </li>
                <li
                    className="filter_item_port ml-2"
                    onClick={() => getItem("digital")}
                >
                 Web Development
                </li>
                {/* <li
                    className="filter_item_port ml-2"
                    onClick={() => getItem("mockups")}
                >
                    Mockups
                </li>
                <li
                    className="filter_item_port ml-2"
                    onClick={() => getItem("Packging")}
                >
                    Packging
                </li>
                <li
                    className="filter_item_port ml-2"
                    onClick={() => getItem("logo")}
                >
                    Logo Designing
                </li> */}
                
                <div className="row container mx-auto">
                    <br />
                    {item.map((data, index) => {
                        const { name, description, link, image } = data;
                        return (
                            <>
                                <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 mt-5">
                                    <div class="single-team">
                                        <div class="team-image">
                                            <img className="card-img-top" src={image} alt=""></img>
                                            <div class="team-content">
                                                <div class="team-social">
                                                <h3>lorem</h3>
                                                    <p>{description}</p>
                                                    <a href={link}>view details</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="person-name">
                                           
                                            <h4>{name}</h4>
                                        </div>
                                    </div>
                                </div>
                            </>
                        );
                    })}
                </div>
               
            </ul>
        </>
    )
}

export default Android_Web_Development