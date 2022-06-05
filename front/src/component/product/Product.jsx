import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addProductToCart, deleteProductFromCart } from '../../redux/action/listActions';
import { useParams } from 'react-router-dom';
import ShowProduct from './ShowProduct';
import Loading from './Loading';
import Swal from 'sweetalert2';

const Product = () => {

    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);
    const [isComponentMounted, setIsComponentMounted] = useState(true);

    const showSuccess = (message, icon) => {
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 1500,
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

    const dispatch = useDispatch();
    const addProduct = (product) => {
        dispatch(addProductToCart(product));
        showSuccess('Product added to cart', 'success');
    };

    const removeProduct = (product) => {
        dispatch(deleteProductFromCart(product));
        showSuccess('Product removed from cart', 'info');
    };

    useEffect(() => {
        const getProduct = async () => {

            setLoading(true);
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);

            if (isComponentMounted) {
                setProduct(await response.clone().json());
                setLoading(false);
            }

            return () => {
                setIsComponentMounted(false);
            }
        }
        getProduct();
    }, [id, isComponentMounted]);


    return (
        <div className='container py-5'>
            <div className="row py-4">
                {loading ? <Loading /> : <ShowProduct product={product} addProduct={addProduct} removeProduct={removeProduct} key={product.id} />}
            </div>
        </div>
    )
}

export default Product;
