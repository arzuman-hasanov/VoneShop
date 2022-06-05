import React from 'react';
import { NavLink } from 'react-router-dom';

const About = () => {
  return (
    <div>
        <div className="container py-2 my-2">
            <div className="row">
                <div className="col-md-6">
                    <h1 className='text-dark fw-bold mb-4'>About us</h1>
                    <p className="lead mb-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quisquam, quidem.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla fugiat provident sit perspiciatis, fuga maiores repellat, adipisci numquam architecto nemo quam, magnam autem! Aliquid, illo quae nobis natus cupiditate doloribus?
                        Natus quisquam quo iure nesciunt? Officia a at nisi nihil obcaecati ut alias, doloremque, soluta et, magni nulla modi velit neque quod sapiente quidem tempora consequatur incidunt ad inventore commodi.
                        
                    </p>

                    <NavLink to={'/contact'} className="btn btn-outline-dark px-3">Contact us</NavLink>
                </div>
                <div className="col-md-6 my-5 d-flex justify-content-center">
                    <img style={{"objectFit": 'contain', "width": "90%"}} src="https://media.istockphoto.com/photos/emails-with-blurred-city-lights-picture-id1134247993?k=20&m=1134247993&s=612x612&w=0&h=2m4qwm0V4V-a5QOP5n7tSC3njlxo1q7WsMBW82foJ7Y=" alt="about" height='500px' width='500px' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default About;