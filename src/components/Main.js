import React, { useState } from "react";
import PropTypes from "prop-types";
import uuid from "react-uuid";

export default function Main(props) {
  // const [first, setfirst] = useState("Was first released in 2013.");
  const [change1, setChange] = useState({id: uuid(), text: "React was first released in 2013."});
  const [isActive, setIsActive] = useState(false);
  const [data, setData] = useState([]);
  const [add, setAdd] = useState(true);



  function editLiText(id) {
    console.log(data);
    console.log(id);
    const itemToEdit = data.find(item => item.id === id);
    setAdd(false)
    if (itemToEdit) {
      setChange({id: itemToEdit.id, text: itemToEdit.text});
      setIsActive(true);
    }
  }
  function changeText(event) {
    // console.log("changed");
    setChange((prev) => ({
      ...prev,
      text: event.target.value,
    }));
  }
  
  const handleSubmit=()=>{
    if (!add) {
      // Editing existing item
      setData(
        data.map((item) =>
          item.id === change1.id ? { ...item, text: change1.text } : item
        )
      );
    } else {
      // Adding new item
      setData([...data, { id: uuid(), text: change1.text }]);
    }
    // setfirst(change1);
    setIsActive(false);
    setChange({id: uuid(), text: ""});
  }
  const handleDelete = (index) => (e) => {
    setData(data.filter((item, i) => i !== index));
  };
  return (
    <div className="container">
      <div className="row text-start mt-5">
        <h1>
          Fun facts about React{" "}
          <button className="ms-3 btn btn-sm btn-warning" onClick={()=>{setAdd(true); setIsActive(true);}}>
            Add
          </button>
        </h1>
        <ul className="px-5 mt-3">
          {data.map((item) => (
            <li key={item?.id}>
              <p className="mb-2">
                {item?.text}
                <button
                  className="ms-3 btn btn-sm btn-primary"
                  onClick={() => editLiText(item?.id)}
                >
                  &nbsp; Edit &nbsp;
                </button>
                <button
                  className="ms-3 btn btn-sm btn-danger"
                  onClick={() => handleDelete(item?.id)}
                >
                  Delete
                </button>
              </p>
            </li>
          ))}

          {/* <li>
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
          </li> */}
        </ul>
        <div
          className={`mb-3 ${isActive || !data.length ? "active" : ""}`}
          id="textChangeBox"
        >
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              {props.labelTitle}
            </label>
            <textarea
              className="form-control"
              value={change1.text}
              onChange={changeText}
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
            <p>Total characters: {change1?.text?.length}</p>
            <p>Total Words: {change1?.text ? change1?.text?.split(" ").length : 0}</p>
          </div>
          <div className="mb-3">
            <button
              className="btn btn-sm btn-warning"
              onClick={handleSubmit}
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
