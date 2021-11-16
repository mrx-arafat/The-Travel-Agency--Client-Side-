import React from "react";

const Newsletter = () => {
  return (
    <div>
      <div class="container  d-flex justify-content-center align-items-center">
        <div class="card p-3 w-50">
          <div class="content">
            <div class="d-flex justify-content-center">
              {" "}
              <img
                class="img-responsive mb-4"
                src="https://i.imgur.com/BO8Y1D3.png"
                alt="arafat"
              />
            </div>
            <h4 class="my-5 text-danger">Subscribe To The Travel</h4>
            <input class="form-control w-100 my-3" placeholder="Email" />
            <button class="btn btn-danger d-block w-100 my-3 sub-button">
              Subscribe Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
