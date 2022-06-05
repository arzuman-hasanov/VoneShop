import React, {useState, useEffect} from 'react';
import { useParams, Link} from "react-router-dom";
import axios from 'axios';
import { toast } from 'react-toastify';
import "../admin/AddEdit.css"
const initialState = {
    username: "",
    email: "",
    user_password: ""
}

const AddEdit = () => {
    const [ state, setState ] = useState(initialState);

    const { username, email, user_password } = state;


    const { id } = useParams()

    useEffect(() =>{
        axios
        .get(`http://localhost:5000/api/get/${id}`)
        .then((resp) => setState({...resp.data[0]}))
        .catch((error)=>{
            console.log("xeberdarliq");
        })
    },[id])

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!username || !email || !user_password){
            toast.error("Please provide value")
        }else {
            if(!id){
                axios.post("http://localhost:5000/api/post", {
                    username,
                    email,
                    user_password
                })
                .then(() =>{
                    setState({username: "", email: "", user_password: ""})
                    toast.success("Successfully added")
                })
                .catch((err)=> toast.error(err.response.data))
            } else {
                axios.put(`http://localhost:5000/api/update/${id}`, {
                username,
                email,
                user_password
            })
            .then(() =>{
                setState({username: "", email: "", user_password: ""})
                toast.success("Successfully updated")
            })
            .catch((err)=> toast.error(err.response.data))
            }
            
        }
    }

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setState({...state, [name]: value});
    }
  return (
    <div style={{marginTop: "60px"}}>
        <form style={{
            margin: "auto",
            padding: "15px",
            maxWidth: "400px",
            alignContent: "center"
        }}
        onSubmit={handleSubmit}
        >
            <label htmlFor='name'>Name</label>
            <input 
                type="text"
                id="name"
                name="username"
                placeholder='username..'
                value={username || ""}
                onChange={handleInputChange}
            />
            <label htmlFor='email'>Email</label>
            <input 
                type="email"
                id="email"
                name="email"
                placeholder='email..'
                value={email || ""}
                onChange={handleInputChange}
            />
            <label htmlFor='contact'>Contact</label>
            <input 
                type="password"
                id="password"
                name="user_password"
                placeholder='your password..'
                value={user_password || ""}
                onChange={handleInputChange}
            />
            <input type="submit" value={id?"Update":"Save"} />
            <Link to="/admin">
                <input type="button" value="Go Back" />
            </Link>
        </form>
    </div>
  )
}

export default AddEdit