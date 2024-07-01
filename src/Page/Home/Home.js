import React from "react";

export default function Home() {
  return (
    <>
      <div className="main-page-wrapper">

        <div className="hero-banner-thirteen position-relative zn2 pt-190 pb-225 lg-pb-150 lg-pt-150 md-pb-80">
          <div className="container">
            <div className="row">
              <div className="col-xl-12 m-auto">
                <div className="text-wrapper wow fadeInUp">
                  <h1 className="hero-heading fw-500 tx-dark text-center">
                    Travel planner
                    <span className="position-relative">
                      <img
                        src="images/lazy.svg"
                        data-src="images/shape/shape_161.svg"
                        alt=""
                        className="lazy-img shapes text-shape"
                      />
                    </span>
                  </h1>
                </div>
              </div>
            </div>{" "}
  
            <div className="search-form-bg position-relative wow fadeInUp">
              <form action="#" className="search-area">
                <div className="row gx-0 align-items-center">
                  <div className="col-lg-3">
                    <div className="input-block">
                      <div className="title">I’m looking to..</div>
                      <select className="nice-select">
                        <option value={0} data-display="Buy Portfolio">
                          Buy Portfolio
                        </option>
                        <option value={1}>Condo</option>
                        <option value={1}>Apartments</option>
                        <option value={1}>Villa</option>
                        <option value={1}>For Rent</option>
                      </select>
                    </div>{" "}
      
                  </div>
                  <div className="col-lg-3">
                    <div className="input-block">
                      <div className="title">Markets</div>
                      <select className="nice-select">
                        <option value={1}>New York</option>
                        <option value={1}>New Jersey</option>
                        <option value={1}>Pennsylvania</option>
                        <option value={1}>South Carolina</option>
                      </select>
                    </div>{" "}
              
                  </div>
                  <div className="col-lg-3">
                    <div className="input-block">
                      <div className="title">Price Range</div>
                      <select className="nice-select">
                        <option value={1}>$10,000 - $200,000</option>
                        <option value={1}>$20,000 - $300,000</option>
                        <option value={1}>$40,000 - $500,000</option>
                      </select>
                    </div>{" "}
                    {/* /.input-block */}
                  </div>
                  <div className="col-lg-3">
                    <div className="input-block">
                      <button className="w-100 fw-500 tran3s">
                        Search Now
                      </button>
                    </div>{" "}
                
                  </div>
                </div>
              </form>{" "}
    
              <img
                src="images/lazy.svg"
                data-src="images/shape/shape_160.svg"
                alt=""
                className="lazy-img shapes shape-two"
              />
            </div>{" "}
    
          </div>{" "}
        
          <img
            src="images/lazy.svg"
            data-src="images/shape/shape_159.svg"
            alt=""
            className="lazy-img shapes shape-one"
          />
        </div>{" "}

      </div>{" "}
    </>
  );
}
