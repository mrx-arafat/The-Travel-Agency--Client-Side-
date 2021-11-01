import React from "react";
import "./Newsletter.css";
import TelegramIcon from "@mui/icons-material/Telegram";

const Newsletter = () => {
  return (
    <div>
      <div className="container my-5">
        <section className="newsletter conntainer-lg mx-auto">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="content">
                  <form>
                    <h2>SUBSCRIBE TO OUR NEWSLETTER</h2>
                    <div className="input-group">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter your email"
                      />
                      <span className="input-group-btn">
                        <button className="btn" type="submit">
                          <TelegramIcon /> Subscribe Now
                        </button>
                      </span>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Newsletter;
