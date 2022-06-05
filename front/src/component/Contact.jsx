import React from "react";
import Swal from "sweetalert2";
import emailjs from "emailjs-com";
const Contact = () => {
  const showSuccess = () => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Message sent successfully",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_db748yj",
      "template_aja7aor",
      e.target,
      "Jy2PNw4lvyjAV9ipH"
    ).then(res=>{
        console.log(res)
    }).catch(err=>{
        console.log(err)
    })
  };

  return (
    <div>
      <div className="container mb-5">
        <div className="row">
          <div className="col-12 text-center py-4 my-4">
            <h1>Have Some Questions?</h1>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-md 5 d-flex justify-content-center">
            <img
              src="https://media.istockphoto.com/photos/closeup-image-of-male-hands-using-smartphone-with-icon-telephone-picture-id1168945108?k=20&m=1168945108&s=612x612&w=0&h=MqKJyjMB1NJ33aRB9kjhxqP_GbPmEVB11saJi9sCuwM="
              alt="Contact Us"
              height="350px"
            />
          </div>
          <div className="col-md 6">
            <form onSubmit={sendEmail}>
              <div class="mb-3">
                <label for="exampleInput" class="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  class="form-control"
                  id="exampleInput"
                  placeholder="John Adams..."
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="examle:john@adams.org"
                />
                <div id="emailHelp" class="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">
                  Enter your message
                </label>
                <textarea
                  class="form-control"
                  name="textarea"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
              <button
                type="submit"
                class="btn btn-outline-dark"
                onClick={showSuccess}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
