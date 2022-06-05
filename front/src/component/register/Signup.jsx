import React, { useState } from "react";
import Login from "./Login";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "./Register.css";

const initialState2 = {
  username: "",
  email: "",
  user_password: "",
};

function SignUp() {
  const [state, setState] = useState(initialState2);

  const { username, email, user_password } = state;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !email || !user_password) {
      toast.error("Please provide value");
    } else {
      axios
        .post("http://localhost:5000/api/post", {
          username,
          email,
          user_password,
        })
        .then(() => {
          setState({ username: "", email: "", user_password: "" });
          toast.success("Successfully added");
        })
        .catch((err) => toast.error(err.response.data));
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  return (

    <div className="d-lg-flex half">
      <div
        className="bg order-1 order-md-2"
        style={{
          backgroundImage:
            "url('https://avatars.mds.yandex.net/get-images-cbir/165367/D4Favk3JmY6LQHnvldFjwg892/ocr')",
        }}
      ></div>
      <div className="contents order-2 order-md-1">
        <div style={{"paddingTop":"60px"}} className="container">
          <div className="row justify-content-center">
            <div className="col-md-7">
              <h3>
                Sign up to <strong>VoneShop</strong>
              </h3>
              <p className="mb-4">
                If you have not account yet, you can sign up now
              </p>

              <form onSubmit={handleSubmit} action="#" method="post">
                <div className="form-group first">
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    id="name"
                    name="username"
                    className="form-control"
                    placeholder="Username"
                    value={username}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-group last mb-3">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    placeholder="E-mail"
                    value={email}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-group last mb-3">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    name="user_password"
                    className="form-control"
                    placeholder="Enter password"
                    value={user_password}
                    onChange={handleInputChange}
                  />
                </div>

                <input
                  type="submit"
                  value="Log In"
                  className="btn btn-block btn-primary"
                />

              <p className="forgot-password text-right">
                Already registered <Link to="/login"> sign in? </Link>
                <Routes>
                  <Route path="/login" element={<Login />}>

                    sign in?
                  </Route>
                </Routes>
              </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
