import React from 'react'
import Products from './products/Products';
import Footer from './Footer';

const Home = () => {
    return (
        <div className='hero'>
            <div className="card bg-dark border-0">
                <img style={{"objectFit":"cover"}} src="https://img.freepik.com/free-photo/black-friday-elements-assortment_23-2149074076.jpg?w=2000" className="card-img" alt="Background Cover" height={'550px'} />
                <div className="card-img-overlay d-flex flex-column justify-content-center">
                    <div className="container">
                        <h5 className="card-title display-3 fw-bolder mb-0">Products</h5>
                        <p className="card-text lead fs-2">
                            Check out all the trends <i className="fa fa-hand-o-down"></i>
                        </p>
                    </div>
                </div>
            </div>
            <Products />
            <Footer />
        </div>
    )
}

export default Home;