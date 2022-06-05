import { NavLink } from "react-router-dom";
import "./Product.css";

const ShowProducts = ({data, setFilter, filterProduct, filter}) => {

    return (
        <>
            <div className="buttons d-flex justify-content-center pb-5 mt-1">
                <button className="btn btn-outline-dark ms-1" onClick={() => setFilter(data)}>
                    All
                </button>
                <button className="btn btn-outline-dark ms-1" onClick={() => filterProduct('men\'s clothing')}>
                    Men's clothing
                </button>
                <button className="btn btn-outline-dark ms-1" onClick={() => filterProduct('women\'s clothing')}>
                    Women's clothing
                </button>
                <button className="btn btn-outline-dark ms-1" onClick={() => filterProduct('electronics')}>
                    Electronic
                </button>
                <button className="btn btn-outline-dark ms-1" onClick={() => filterProduct('jewelery')}>
                    Jewelery
                </button>
                
            </div>
            {filter.map((product) => {
                return (
                        <div style={{"minWidth":"280px"}} className="col-md-6 mb-4" key={product.id}>
                            <div className="card h-100 text-center p-4 product-block" style={{"display":"flex","alignItems":"center"}} key={product.id}>
                                <img style={{"objectFit":"contain", "maxWidth":"240px"}} src={product.image} className="card-img-top" alt={product.title} height='250px' />
                                <div className="card-body">
                                    <h5 className="card-title mb-0">{product.title.substring(0, 12)}...</h5>
                                    <p className="card-text lead fw-bold">
                                        ${product.price}
                                    </p>
                                    <NavLink to={`/products/${product.id}`} className="btn btn-outline-dark">Buy now</NavLink>
                                </div>
                            </div>
                        </div>
                );
            })}
        </>
    );

}

export default ShowProducts;