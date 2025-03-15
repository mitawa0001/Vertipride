import React from "react";
import productsData from "../menu/productdata";
import { Link } from "react-router-dom";

const Products = () => {
    const products = productsData.map(product => {
        return (
            <>
                <div className="cpntainer hiring-list">
                    <div className="d-flex flex-wrap justify-content-between" key={product.id}>
                        <div>
                            <h3>
                                {product.title}
                            </h3>
                            <p>{product.type}</p>
                        </div>
                        <div>
                            <Link className="btn btn-primary text-center" to={`/products/${product.id}`}>{product.name}</Link>
                        </div>
                    </div>
                </div>
            </>
        );
    });

    return (
        <>
            <h1 className="text-center">Explore opportunities</h1>
            {products}
        </>
    );
};

export default Products;
