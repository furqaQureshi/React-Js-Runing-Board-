import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import DatePicker from "react-datepicker";
import './App.css';
// import { Link, useHistory } from "react-router-dom";


import {
  addData,
  addCount,
  removeCount,
  removeData,
} from "./redux/actionCreators/index";
import { MenuItem, Select, TextField } from "@mui/material";
// import "./Form.css";

function Form(props) {
//   const history = useHistory("/showForm");

  const [date, setDate] = useState();
  const [valid, setValid] = useState(false);
  const init = {
    name: "",
    location: "",
    unit: "",
    data: "",
    status: "",
    point: "",
  };
  const [formValues, setFormValues] = useState(init);
  const [formformErrors, setFormformErrors] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  useEffect(() => {
    const regex =
      /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/;
    if (regex.test(date)) {
      setValid(true);
    } else {
      setValid(false);
    }
  }, [date]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const regex =
      /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/;
    if (!formValues.name) {
      setFormformErrors("name is required");
    }
    if (!formValues.location) {
      setFormformErrors("Location is required");
    }
    if (!formValues.unit) {
      setFormformErrors("Number is required");
    }
    if (!formValues.status) {
      setFormformErrors("Status is required");
    }
    if (!formValues.point) {
      setFormformErrors("Point is required");
    }
    if (!formValues.data) {
      setFormformErrors("Date is required");
    }
    if (regex.test(formValues.data)) {
      setValid(true);
    } else {
      setValid(false);
    }

    if (
      !formValues.name &&
      !formValues.location &&
      !formValues.unit &&
      !formValues.status &&
      !formValues.point &&
      formValues.data
    ) {
      setFormformErrors("Fill The Data input Field");
    } else if (
      formValues.name &&
      formValues.location &&
      formValues.unit &&
      formValues.status &&
      formValues.point &&
      formValues.data
    ) {
      props.addData(formValues);
      setFormValues({
        name: "",
        location: "",
        data: "",
        unit: "",
        status: "",
        point: "",
      });
    }

    setTimeout(() => {
      setFormformErrors("");
    }, 2000);
  };

  return (
    <div>
          <div className="row text-center mt-4">
          <div className="col-md mt-4">
            <h1>LeaderBoard</h1>
          </div>
          <div className="col-md mt-4">
            {/* <Link> */}
            <button to="/showForm" className="buttons width-100 w-25">Add Player</button>
            {/* </Link> */}
          </div>
        </div>
      <div className="container">
        <div className="row text-center mt-4">
          <div className="col-md mt-4">
            <h1>LeaderBoard</h1>
          </div>
          <div className="col-md mt-4">
            <button className="buttons width-100 w-25">Add Player</button>
          </div>
        </div>
      </div>
      <div className="form-center">
        <form>
          <h3 className="text-center mt-3">Add playes</h3>
          {formformErrors && (
            <span className="text-danger">{formformErrors}</span>
          )}
          <div className="container leader-input">
            <TextField
              id="outlined-basic"
              label="participant Name"
              variant="outlined"
              className="css-isbt42"
              placeholder="Enter your Name"
              name="name"
              value={formValues.name}
              onChange={handleChange}
            />
            <div className="row">
              <div className="col-md">
                <TextField
                  id="outlined-basic"
                  label="Location"
                  variant="outlined"
                  className="gird-ui"
                  placeholder="Enter your Location"
                  value={formValues.location}
                  onChange={handleChange}
                  name="location"
                />
              </div>
              <div className="col-md">
                <TextField
                  id="outlined-basic"
                  label="Date"
                  variant="outlined"
                  className="gird-ui"
                  type="text"
                  placeholder="Enter your Date"
                  value={formValues.data}
                  onChange={handleChange}
                  name="data"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md">
                <TextField
                  id="outlined-basic"
                  label="Unit"
                  variant="outlined"
                  className="gird-ui-1"
                  type="number"
                  placeholder="Enter your Unit"
                  value={formValues.unit}
                  onChange={handleChange}
                  name="unit"
                />
              </div>
              <div className="col-md" style={{ marginTop: "60px" }}>
                <Select
                  labelId="demo-simple-select-label"
                  name="status"
                  value={formValues.status}
                  onChange={handleChange}
                  id="outlined-basic"
                  label="Status"
                  type="button"
                  placeholder="Enter your Types"
                  variant="outlined"
                >
                  <MenuItem>none</MenuItem>
                  <MenuItem value="Runing">Runing</MenuItem>
                  <MenuItem value="Stoped">Stoped</MenuItem>
                </Select>
              </div>
              <div className="col-md">
                <TextField
                  id="outlined-basic"
                  label="Point"
                  variant="outlined"
                  type="number"
                  placeholder="Enter your Point"
                  className="gird-ui-1"
                  name="point"
                  value={formValues.point}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <button className="buttons width-101" onClick={handleSubmit}>
            Submit
          </button>
          <p className="json mt-4">{JSON.stringify(formValues)}</p>
        </form>
      </div>

      <div className="container mt-4">
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Rank</th>
              <th scope="col">Participant Name</th>
              <th scope="col">Location</th>
              <th scope="col">Date</th>
              <th scope="col">Unit</th>
              <th scope="col">Status</th>
              <th scope="col">Points</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {props.user.map((contact, i) => {
              return (
                <tr key={i} className="css-1an0fx2">
                  <td>
                    <span>{i + 1}</span>
                  </td>
                  <td>{contact.name}</td>
                  <td>{contact.location}</td>
                  <td>{contact.data}</td>
                  <td>{contact.unit}</td>
                  <td>
                    <span
                      className={
                        contact.status === "Runing" ? "running" : "stopped"
                      }
                    >
                      {contact.status}
                    </span>
                  </td>
                  <td>
                    <div className="increment">
                      <button
                        className="form-btn"
                        onClick={() => props.addCount(contact.id)}
                      >
                        +
                      </button>
                      <span>{contact.point}</span>
                      <button
                        className="form-btn"
                        onClick={() => props.removeCount(contact.id)}
                      >
                        -
                      </button>
                    </div>
                  </td>

                  <td>
                    <button
                      onClick={() => props.removeData(contact.id)}
                      className="btn btn-sm btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log(state);
  const { user, count } = state.root;
  return { user, count };
};

export default connect(mapStateToProps, {
  addData,
  removeData,
  addCount,
  removeCount,
})(Form);
