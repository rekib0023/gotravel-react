import React, { useState, useEffect } from "react";
import Base from "../base.js";
import "./style.css";
import "../../static/css/styles.css";
import { SearchWidget } from "../../components";

export default function Home() {
  const [tripType, setTripType] = useState(1);

  return (
    <Base>
      <div className="home">
        <div className="my-container">
          {/* landing page */}
          <div className="row" style={{ marginTop: "6%" }}>
            <div className="col-9">
              <h1 className="heading-1 white-text">
                Let's Make <br /> Your Best <br /> Trip Ever.
              </h1>
              {/* <br /> */}
              <p className="small-text">
                The real voyage of discovery consists not in <br /> seeking new
                landscapes, but in having <br />
                new eyes.
              </p>
              <br />
              <br />
              {/* search widget */}
              <div className="d-flex">
                <button
                  className="btn small-text-bold p-3 btn-style"
                  style={{
                    color: tripType === 1 ? "#ee6b2a" : "white",
                    backgroundColor: tripType === 1 ? "white" : "",
                  }}
                  onClick={() => setTripType(1)}
                >
                  One Way
                </button>
                <button
                  className="btn small-text-bold p-3 btn-style"
                  style={{
                    color: tripType === 2 ? "#ee6b2a" : "white",
                    backgroundColor: tripType === 2 ? "white" : "",
                  }}
                  onClick={() => setTripType(2)}
                >
                  Round Trip
                </button>
                <button
                  className="btn small-text-bold p-3 btn-style"
                  style={{
                    color: tripType === 3 ? "#ee6b2a" : "white",
                    backgroundColor: tripType === 3 ? "white" : "",
                  }}
                  onClick={() => setTripType(3)}
                >
                  Multi - City
                </button>
              </div>
              <SearchWidget type={tripType} />
            </div>
          </div>
          {/* <div style={{ height: "200px" }}>aaa</div> */}
        </div>
      </div>
    </Base>
  );
}
