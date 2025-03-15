import React from "react";
import productsData from "../menu/blogdetails";
import { Link } from "react-router-dom";


const Products = () => {
    const products = productsData.map(product => {
        return (
            <>
                <div className="col-xl-4 col-lg-4 col-md-8 col-sm-12 mt-5">
                    <div class="px-2" key={product.id}>
                        <Link to={`/blog/${product.id}`}>
                            <div class="home-single-blog">
                                <div class="s-blog-image">
                                    <img src={product.blog_banner_img} alt="blog img"></img>
                                    <div class="blog-post-date">
                                        <span>{product.date}</span>
                                    </div>
                                </div>
                                <div class="s-blog-content">
                                    <h4>{product.title}</h4>
                                    <p>{product.description}</p>
                                    <Link to={`/blog/${product.id}`}>Read More</Link>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>    
            </>
        );
    });

return (
    <>
        
        <div class="about-hero-banner">
            <div class="about-hero-text">
                <h1>Blogs</h1>
            </div>
        </div>
        <div className="container">
            <div class="d-flex flex-wrap ">
                {products}
            </div>
        </div>
    </>
);
};

export default Products;
