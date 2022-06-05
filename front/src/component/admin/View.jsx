import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios';
import "../admin/View.css"

const View = () => {
    const [user, setUser] = useState({});

    const {id} = useParams();

    useEffect(() =>{
        axios
        .get(`http://localhost:5000/api/get/${id}`)
        .then((resp) => setUser({...resp.data[0]}))
        .catch((error)=>{
            console.log("islemir");
        })
    },[id]);

  return (
    <div className='user-detail' style={{marginTop: "100px"}}>
        <div className='card'>
            <div className='card-header'>
                <p>User Detail</p>
            </div>
            <div className='container'>
                <strong>ID:</strong>
                <span>{id}</span>
                <br />
                <br />
                <strong>Name:</strong>
                <span>{user.username}</span>
                <br />
                <br />
                <strong>Email:</strong>
                <span>{user.email}</span>
                <br />
                <br />
                <strong>Password:</strong>
                <span>{user.user_password}</span>
                <br />
                <br />
                <Link to="/admin">
                    <div className='btn btn-edit'>Go back</div>
                </Link>
            </div>
        </div>
        
    </div>
  )
}

export default View