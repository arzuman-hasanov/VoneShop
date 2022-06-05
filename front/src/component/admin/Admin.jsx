import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import "../admin/Admin.css"
import { toast } from 'react-toastify';
import axios from "axios";
const Home = () => {
    const [data, setData] = useState([]);

    const loadData = async () =>{
        const response = await axios.get("http://localhost:5000/api/get").catch((err)=>{console.log("xeberdarliq")});
        setData(response.data)
    }
    
    useEffect(()=>{
        loadData()
    },[])

    const deleteContact = (id) => {
        if (
            window.confirm("Are you sure that you wanted to delete that contact ?")
        ) {
            axios.delete(`http://localhost:5000/api/remove/${id}`);
            toast.success("Contact Deleted Successfully");
            setTimeout(() => loadData(), 500)
            loadData()
        }
    }

  return (
    <div className='admin-page' style={{margin: "30px auto",textAlign:"center"}}>
        <Link to="/adduser">
            <button className='btn btn-user'>Add User</button>
        </Link>
            
        <table className='styled-table'>
            <thead>
                <tr>
                    <th>No.</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item, index)=>{
                    return (
                        <tr key={item.id}>
                            <th scope='row'>{index+1}</th>
                            <td>{item.username}</td>
                            <td>{item.email}</td>
                            <td>{item.user_password}</td>
                            <td>
                                <Link to={`/update/${item.id}`}>
                                    <button className="btn btn-edit">Edit</button>
                                </Link>

                                    <button className="btn btn-delete" onClick={() => deleteContact(item.id)}>Delete</button>
                                    
                                <Link to={`/view/${item.id}`}>
                                    <button className="btn btn-view">View</button>
                                </Link>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </div>
  )
}

export default Home