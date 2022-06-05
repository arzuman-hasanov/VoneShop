import React from 'react'
import './Register.css'
function Login() {



  const handleSubmit=(e)=>{
    e.preventDefault()
  }

  const handleChange =(e)=>{

  }

    return (
      <div className="d-lg-flex half">
    <div className="bg order-1 order-md-2" style={{"backgroundImage":"url('https://avatars.mds.yandex.net/get-images-cbir/165367/D4Favk3JmY6LQHnvldFjwg892/ocr')"}}></div>
    <div className="contents order-2 order-md-1">

      <div style={{"paddingTop":"60px"}} className="container">
        <div className="row justify-content-center">
          <div className="col-md-7">
            <h3>Login to <strong>VoneShop</strong></h3>
            <p className="mb-4">login to your account</p>
            <form onSubmit={handleSubmit} action="#" method="post">
              <div className="form-group first">
                <label htmlFor="username">Username</label>
                <input type="text" className="form-control" placeholder="your-email@gmail.com" id="username" onChange={handleChange}/>
              </div>
              <div className="form-group last mb-3">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" placeholder="Your Password" id="password" onChange={handleChange}/>
              </div>
              
              <div className="d-flex mb-5 align-items-center">
                <label className="control control--checkbox mb-0"><span className="caption">Remember me</span>
                  <input type="checkbox" checked="checked"/>
                  <div className="control__indicator"></div>
                </label>
                <span style={{"marginLeft":"auto"}} className="ml-auto"><a href="/login" className="forgot-pass">Forgot Password</a></span> 
              </div>

              <input type="submit" value="Log In" className="btn btn-block btn-primary" onChange={handleChange}/>

            </form>
          </div>
        </div>
      </div>
    </div>

    
  </div>
    )
}
export default Login