import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import DatePicker from "react-datepicker";
import './App.css';


import {
  addData,
  addCount,
  removeCount,
  removeData,
} from "./redux/actionCreators/index";
import { MenuItem, Select, TextField } from "@mui/material";

function ShowForm(props) {
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

    const [Values, setValues] = useState(init);
    const [Errors, setErrors] = useState("");
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setValues({ ...Values, [name]: value });
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
      if (!Values.name) {
        setErrors("name is required");
      }
      if (!Values.location) {
        setErrors("Location is required");
      }
      if (!Values.unit) {
        setErrors("Number is required");
      }
      if (!Values.status) {
        setErrors("Status is required");
      }
      if (!Values.point) {
        setErrors("Point is required");
      }
      if (!Values.data) {
        setErrors("Date is required");
      }
      if (regex.test(Values.data)) {
        setValid(true);
      } else {
        setValid(false);
      }
  
      if (
        !Values.name &&
        !Values.location &&
        !Values.unit &&
        !Values.status &&
        !Values.point &&
        Values.data
      ) {
        setErrors("Fill The Data input Field");
      } else if (
        Values.name &&
        Values.location &&
        Values.unit &&
        Values.status &&
        Values.point &&
        Values.data
      ) {
        props.addData(Values);
        setValues({
          name: "",
          location: "",
          data: "",
          unit: "",
          status: "",
          point: "",
        });
      }
  
      setTimeout(() => {
        setErrors("");
      }, 2000);
    };
  
  return (
    <div>
         <div className="container">
      
      </div>
      <div className="-center">
        <>
          <h3 className="text-center mt-3">Add playes</h3>
          {Errors && (
            <span className="text-danger">{Errors}</span>
          )}
          <div className="container leader-input">
            <TextField
              id="outlined-basic"
              label="participant Name"
              variant="outlined"
              className="css-isbt42"
              placeholder="Enter your Name"
              name="name"
              value={Values.name}
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
                  value={Values.location}
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
                  value={Values.data}
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
                  value={Values.unit}
                  onChange={handleChange}
                  name="unit"
                />
              </div>
              <div className="col-md" style={{ marginTop: "60px" }}>
                <Select
                  labelId="demo-simple-select-label"
                  name="status"
                  value={Values.status}
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
                  value={Values.point}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <button className="buttons width-101" onClick={handleSubmit}>
            Submit
          </button>
          <p className="json mt-4">{JSON.stringify(Values)}</p>
        </>
      </div>

    </div>
  )
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
  })(ShowForm);