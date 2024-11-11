import "./css/form.css";
import "./css/input.css";
import "./css/checkbox.css";
import "./css/select.css";
import "./css/Submit.css";
import Modal from "./Modal";

import { useState } from "react";
export default function Form() {
  const [error, setError] = useState(null);
  const [show, setShow] = useState(false);
  const [inputs, setInputs] = useState({
    name: "",
    number: "",
    age: "",
    isEmp: false,
  });
  let addActive = (e) => {
    e.preventDefault();
    // if (inputs.age > 100 || inputs.age < 18) {
    //   setError("Age must be between 18 and 100");
    // }
    let test = 0;
    if (test === 0) {
      e.target.classList.add("active");
      test = 1;
      setShow(true);
    }
    setTimeout(() => {
      e.target.classList.remove("active");
    }, 1500);
  };
  let btn = inputs.name === "" || inputs.number === "" || inputs.age === "";
  let btnClasses = "";
  if (btn) {
    btnClasses = "button type1";
  } else {
    btnClasses = "button type1 des";
  }
  function handle() {
    if (show) {
      setShow(false);
    }
  }
  return (
    <div className="pearnt" onClick={handle}>
      <form>
        <h1>Requesting a Form</h1>
        <div className="group">
          <input
            required
            type="text"
            id="name"
            name="name"
            className="input"
            value={inputs.name}
            onChange={(e) => {
              setInputs({ ...inputs, name: e.target.value });
            }}
          />
          <span className="highlight" />
          <span className="bar" />
          <label htmlFor="name">Name:</label>
        </div>
        <div className="group">
          <input
            required
            type="text"
            id="phoneNum"
            name="phoneNum"
            className="input"
            value={inputs.number}
            onChange={(e) => {
              setInputs({ ...inputs, number: e.target.value });
            }}
          />
          <span className="highlight" />
          <span className="bar" />
          <label htmlFor="phoneNum">Phone Number</label>
        </div>
        <div className="group">
          <input
            required
            type="text"
            id="age"
            name="age"
            className="input"
            value={inputs.age}
            onChange={(e) => {
              setInputs({ ...inputs, age: e.target.value });
            }}
          />
          <span className="highlight" />
          <span className="bar" />
          <label htmlFor="age">Age</label>
        </div>
        <label className="container">
          <input
            type="checkbox"
            id="chek"
            name="is employee"
            checked={inputs.isEmp}
            onChange={(e) => {
              setInputs({ ...inputs, isEmp: e.target.checked });
            }}
          />
          <svg viewBox="0 0 64 64" height="2em" width="2em">
            <path
              d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
              pathLength="575.0541381835938"
              className="path"
            ></path>
          </svg>
          <label htmlFor="chek">Are You an Employee</label>
        </label>
        <button
          className={btnClasses}
          onClick={addActive}
          disabled={btn}
        ></button>
      </form>
      <Modal isVisible={show} error={error}></Modal>
    </div>
  );
}
