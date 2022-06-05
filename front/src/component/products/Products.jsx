import React, { useState, useEffect } from 'react';
import 'react-loading-skeleton/dist/skeleton.css';
import Loading from './Loading';
import ShowProducts from './ShowProducts';

const Products = () => {

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    const [isComponentMounted, setIsComponentMounted] = useState(true);

    useEffect(() => {

        const getProducts = async () => {
            setLoading(true);
            const response = await fetch('https://fakestoreapi.com/products');

            if (isComponentMounted) {
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
            }

            return () => {
                setIsComponentMounted(false);
            }
        }

        getProducts();


    }, [isComponentMounted]);

    const filterProduct = (category) => {
        const updateList = data.filter(item => item.category === category);
        setFilter(updateList);
    }


    return (
        <div>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1 className="display-6 fw-bolder text-center">
                            Products
                        </h1>
                        <hr />
                        <div className="row justify-content-center">
                            {loading ? <Loading /> :
                                <ShowProducts
                                    data={data}
                                    setFilter={setFilter}
                                    filterProduct={filterProduct}
                                    filter={filter}
                                />}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products;