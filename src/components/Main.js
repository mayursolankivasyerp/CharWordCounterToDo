import React, { useState } from "react";
import PropTypes from "prop-types";

export default function Main(props) {
  const [first, setfirst] = useState("Was first released in 2013.");
  const [change1, setChange] = useState(first);
  const [isActive, setIsActive] = useState(false);
  function editLiText() {
    document.getElementById("textChangeBox").classList.add("active");
    setIsActive(true);
  }
  function changeText(event) {
    // console.log("changed");
    setChange(event.target.value);
  }
  function clickToChangeText(e) {
    // console.log("clicked");
    setfirst(change1);
    setIsActive(false);
  }
  return (
    <div className="container">
      <div className="row text-start mt-5">
        <h1>Fun facts about React</h1>
        <ul className="px-5 mt-3">
          <li>
            <p className="mb-2 d-flex">
              {first}{" "}
              <button
                className="ms-3 btn btn-sm btn-primary"
                onClick={editLiText}
              >
                Edit
              </button>
            </p>
          </li>
          <li>
            <p className="mb-2">Was originally created by Jordan Walke.</p>
          </li>
          <li>
            <p className="mb-2">Has well over 100k stars on GitHub.</p>
          </li>
          <li>
            <p className="mb-2">Is maintained by Facebook.</p>
          </li>
          <li>
            <p className="mb-2">
              Powers thousands of enterprise apps, including mobile apps.
            </p>
          </li>
        </ul>
        <div className={`mb-3 ${isActive ? "active" : ""}`} id="textChangeBox">
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              {props.labelTitle}
            </label>
            <textarea
              className="form-control"
              value={change1}
              onChange={changeText}
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
            <p>Total characters: {change1.length}</p>
            <p>Total Words: {change1.split(" ").length}</p>
          </div>
          <div className="mb-3">
            <button
              className="btn btn-sm btn-warning"
              onClick={clickToChangeText}
            >
              Enter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

Main.propTypes = {
  labelTitle: PropTypes.string,
};
