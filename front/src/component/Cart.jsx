import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Swal from 'sweetalert2';
import { addProductToCart, deleteProductFromCart } from '../redux/action/listActions';

const Cart = () => {

    const state = useSelector((state) => state.handleCart);
    const dispatch = useDispatch();

    const showSuccess = (message, icon) => {
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 1000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        })

        Toast.fire({
            icon: icon,
            title: message
        })
    }


    const removeProduct = (product) => {
        dispatch(deleteProductFromCart(product));
        // showSuccess('Product removed from cart', 'info');
    }

    const addProduct = (product) => {
        dispatch(addProductToCart(product));
        // showSuccess('Product added to cart', 'success');
    }

    const quantity = (product) => {
        let quantity = 0;
        state.forEach(item => {
            if (item.id === product.id) {
                quantity = item.quantity;
            }
        }
        )
        return quantity;
    }

    const cartItems = (cartItem) => {
        return (
            <div className="row py-4 hover-light-gray mb-2" key={cartItem.id}>
                <div className="col-3 px-5 py-2">
                    <img src={cartItem.image} alt={cartItem.name} className="img-fluid" height='150px' width='200px' />
                </div>
                <div className="col-5 px-5 py-5">
                    <h5 className="fw-bold">{cartItem.title}</h5>
                    <p className="fs-14">{cartItem.description}</p>
                </div>
                <div className="col-4 px-5 py-5">
                    <h5 className="fw-bold">${cartItem.price}</h5>
                    <h5 className="fw-bold"><i className='fa fa-star' style={{ color: 'orange' }}></i> {cartItem.rating.rate} ({cartItem.rating.count})</h5>
                    {quantity(cartItem) === 1 && <button className="btn btn-outline-danger" onClick={() => removeProduct(cartItem)}>Remove</button>}
                    {quantity(cartItem) >= 2 && <button className="btn btn-outline-danger rounded-circle" onClick={() => removeProduct(cartItem)}>
                        <i className="fa fa-minus"></i>
                    </button>
                    }
                    {quantity(cartItem) >= 2 && <span className="mx-3">{quantity(cartItem)}</span>}
                    {quantity(cartItem) >=2 && <button className="btn btn-outline-success rounded-circle" onClick={() => addProduct(cartItem)}>
                        <i className="fa fa-plus"></i>
                    </button>
                    }
                </div>
                {/* <hr /> */}

            </div>
        )
    }

    const Empty = () => {
        return (
            <div className="row py-4">
                <div className="col-12 text-center">
                    <h3>Your cart is empty</h3>
                </div>
            </div>
        )
    }

    const Checkout = () => {
        return (
            <div className="container">
                <div className="row">
                    <NavLink to='/checkout' className='btn btn-dark px-3 py-2 w-25 mx-auto'>Proceed to Checkout</NavLink>
                </div>
            </div>
        )
    }

    return (
        <>
            {state.length === 0 ? <Empty /> : state.map(cartItem => cartItems(cartItem))}
            {state.length !== 0 && <Checkout style={{ width: '100px' }} />}
        </>

    )
}

export default Cart;