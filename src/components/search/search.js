import React, { useState } from "react";
import "./style.css";
import { cities } from "../../helper/constants.js";

const OneWay = () => {
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");

  const handleSubmit = () => {
    var source = document.getElementById("source");
    setSource(source.value);
    var destination = document.getElementById("destination");
    setDestination(destination.value);
  };
  console.log(source, destination);

  return (
    <div
      class=" grid-container px-5 py-4"
      style={{
        backgroundColor: "rgb(255, 255, 255)",
        borderBottomLeftRadius: "12px",
        borderBottomRightRadius: "12px",
        borderTopRightRadius: "12px",
      }}
    >
      <div class="item">
        <div className="small-text-bold orange-text">From</div>
      </div>
      <div class="item">
        <div className="small-text-bold orange-text">To</div>
      </div>
      <div class="item">
        <div className="small-text-bold  orange-text">Expected Date</div>
      </div>
      <div class="item"></div>
      <div class="item">
        <select
          class="form-select"
          aria-label="Default select example"
          id="source"
        >
          <option selected disabled>
            Select a city
          </option>
          {cities.map((city, i) => (
            <option key={i} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>
      <div class="item">
        <select
          class="form-select"
          aria-label="Default select example"
          id="destination"
        >
          <option selected disabled>
            Select a city
          </option>
          {cities.map((city, i) => (
            <option key={i} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>
      <div class="item">
        <select class="form-select" aria-label="Default select example">
          <option selected>Select a city</option>
          {cities.map((city, i) => (
            <option key={i} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>
      <div class="item d-flex justify-content-end">
        <button
          className="btn rounded-pill w-100 text-white"
          style={{ backgroundColor: "#ee6b2a" }}
          onClick={handleSubmit}
        >
          Search
        </button>
      </div>

      {source !== "" && destination !== "" ? (
        <>
          <div></div>
          <div></div>
          <div></div>
          <div className="d-flex justify-content-end">
            <a
              href="#"
              onClick={() => {
                setSource("");
                setDestination("");
              }}
            >
              Clear
            </a>
          </div>
          <div className="small-text-bold">Airways</div>
          <div>a</div>
          <div></div>
          <div></div>
        </>
      ) : null}
    </div>
  );
};
const RoundTrip = () => {
  return (
    <div
      class=" grid-container px-5 py-4"
      style={{
        backgroundColor: "rgb(255, 255, 255)",
        borderBottomLeftRadius: "12px",
        borderBottomRightRadius: "12px",
        borderTopRightRadius: "12px",
      }}
    >
      <div class="item">
        <div className="small-text-bold orange-text">From</div>
      </div>
      <div class="item">
        <div className="small-text-bold orange-text">To</div>
      </div>
      <div class="item">
        <div className="small-text-bold  orange-text">Expected 2Date</div>
      </div>
      <div class="item"></div>
      <div class="item">
        <select class="form-select" aria-label="Default select example">
          <option selected>Select a city</option>
          {cities.map((city, i) => (
            <option key={i} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>
      <div class="item">
        <select class="form-select" aria-label="Default select example">
          <option selected>Select a city</option>
          {cities.map((city, i) => (
            <option key={i} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>
      <div class="item">
        <input
          type="text"
          class="form-control border border-dark"
          style={{
            borderRadius: "8px",
          }}
        />
      </div>
      <div class="item">
        <button
          className="btn rounded-pill w-100 text-white"
          style={{ backgroundColor: "#ee6b2a" }}
        >
          Search
        </button>
      </div>
    </div>
  );
};
const MultiCity = () => {
  return (
    <div
      class=" grid-container px-5 py-4"
      style={{
        backgroundColor: "rgb(255, 255, 255)",
        borderBottomLeftRadius: "12px",
        borderBottomRightRadius: "12px",
        borderTopRightRadius: "12px",
      }}
    >
      <div class="item">
        <div className="small-text-bold orange-text">From</div>
      </div>
      <div class="item">
        <div className="small-text-bold orange-text">To</div>
      </div>
      <div class="item">
        <div className="small-text-bold  orange-text">Expected 3Date</div>
      </div>
      <div class="item"></div>
      <div class="item">
        {/* <input
          type="text"
          class="form-control border border-dark"
          style={{
            borderRadius: "8px",
          }}
        /> */}
        <select class="form-select" aria-label="Default select example">
          <option selected>Select a city</option>
          {cities.map((city, i) => (
            <option key={i} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>
      <div class="item">
        <select class="form-select" aria-label="Default select example">
          <option selected>Select a city</option>
          {cities.map((city, i) => (
            <option key={i} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>
      <div class="item">
        <select class="form-select" aria-label="Default select example">
          <option selected>Select a city</option>
          {cities.map((city, i) => (
            <option key={i} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>
      <div class="item">
        <button
          className="btn rounded-pill w-100 text-white"
          style={{ backgroundColor: "#ee6b2a" }}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default function SearchWidget({ type }) {
  if (type === 1) return OneWay();
  else if (type === 2) return RoundTrip();
  else if (type === 3) return MultiCity();
}
