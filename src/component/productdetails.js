import React from "react";
import { useParams } from "react-router-dom";
import productsData from "../menu/productdata";


function Productdetail() {
    const { productId } = useParams()
    const thisProduct = productsData.find(prod => prod.id === productId)
    return (
        <>
            <div class="about-hero-banner">
                <div class="about-hero-text">
                    <h1> Job Description</h1>
                    {/* <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a
                        viverra leo.{""}
                    </p> */}
                </div>
            </div>
            <div className="container py-5 my-5">
                <div className="pro-details d-flex flex-wrap justify-content-between align-items-center">
                    <div className="section-heading-1">
                        <h3>{thisProduct.title}</h3>
                        <p>{thisProduct.type}</p>
                    </div>
                    <div>
                        <button className="btn btn-primary text-center">Apply Now for role</button>
                    </div>
                </div>

                <p>{thisProduct.description}</p>
                <div className="pro-details">
                    <div className="section-heading-1 my-5">
                        <h2>
                            Minimum Qualifications
                        </h2>
                        <p>{thisProduct.qualification}</p>
                    </div>
                </div>


                <p>It’s a great place to work! Will you join us?</p>
                <div className="w-100 text-center">
                    <button className="btn btn-primary ">Apply Now for role</button>
                </div>
            </div>
        </>

    )
}

export default Productdetail