import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const ShowProduct = ({ product, addProduct, removeProduct }) => {

    const state = useSelector(state => state.handleCart);
    console.log('this is state ->', state);

    const isProductInCart = (product) => {
        return state.find(item => item.id === product.id);
    }

    const quantity = (product) => {
        let quantity = 0;
        state.forEach(item => {
            if (item.id === product.id) {
                quantity = item.quantity;
            }
        }
        )
        console.log('quantity ->', quantity);
        return quantity;
    }

    return (
        <>

            <div className="col-md-6">
                <img src={product.image} alt={product.title} height='400px' width='400px' />
            </div>
            <div className="col-md-6 bg-light-border">
                <h4 className='text-uppercase text-black-50'>
                    {product.category}
                </h4>
                <h1 className="display-5">
                    {product.title}
                </h1>
                <p className="lead fw-bolder">
                    Rating {product.rating && product.rating.rate}
                    <i className="fa fa-star" style={{ color: 'orange', marginLeft: 5 }}></i>
                    ({product.rating && product.rating.count})
                </p>
                <div className="display-6 fw-bold my-4">
                    $ {product.price}
                </div>
                <div className="lead mb-3">
                    {product.description}
                </div>

                {!isProductInCart(product) &&
                    <button className="btn btn-outline-dark px-4 py-2" onClick={() => addProduct(product)}>
                        Add to cart
                    </button>
                }

                {isProductInCart(product) && <button className="btn btn-outline-danger rounded-circle" onClick={() => removeProduct(product)}>
                    <i className="fa fa-minus"></i>
                </button>
                }
                {isProductInCart(product) && <span className="mx-3">{quantity(product)}</span>}
                {isProductInCart(product) && <button className="btn btn-outline-success rounded-circle" onClick={() => addProduct(product)}>
                    <i className="fa fa-plus"></i>
                </button>
                }

                <NavLink to='/cart' className='btn btn-dark ms-2 px-3 py-2'>
                    Go to cart
                </NavLink>
            </div>

        </>
    );
}

export default ShowProduct;