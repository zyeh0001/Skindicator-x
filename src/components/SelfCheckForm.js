import React, { Component } from "react";

class SelfCheckForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: null,
      gender: "",
      family_history: "",
      position_of_moles:"",
    };
  }
  mySubmitHandler = (event) => {
    event.preventDefault();
    let age = this.state.age;
    let gender = this.state.gender;
    let family_history = this.state.family_history;
    let position_of_moles = this.state.position_of_moles;
    if (!Number(age)) {
      alert("Your age must be a number");
    } else if (gender === "") {
      alert("Please select your gender");
    } else if (position_of_moles === "") {
      alert("Please enter the your position of moles");
    } else if (family_history === "") {
      alert("Please enter the your family history of skin cancer");
    }
  };
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({ [nam]: val });
  };
  render() {
    return (
      <div className="col-6 col-12-narrower feature">
        <form onSubmit={this.mySubmitHandler}>
          <label>Age</label>
          <input type="text" name="age" onChange={this.myChangeHandler} />
          <label>Gender</label>
          <select
            value={this.state.gender}
            name="gender"
            onChange={this.myChangeHandler}
          >
            <option value="Please_select">Please select</option>
            <option value="Female">Female</option>
            <option value="Male">Male</option>
            <option value="Prefer_not_to_say">Prefer not to say</option>
          </select>
          <label>Family history of skin cancer</label>
          <input
            type="text"
            name="family_history"
            onChange={this.myChangeHandler}
          />
          <label>Position of the moles on your body</label>
          <input
            type="text"
            name="position_of_moles"
            onChange={this.myChangeHandler}
          />
          <br />
          <br />
          <input type="Submit" />
        </form>
      </div>
    );
  }
}

export default SelfCheckForm;
