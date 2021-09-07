import React, { Component } from "react";

class SelfCheckForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: null,
      gender: "",
      state: "",
      city: "",
      hobby: "",
      places_you_aften_go: "",
      family_history: "",
    };
  }
  mySubmitHandler = (event) => {
    event.preventDefault();
    let age = this.state.age;
    let gender = this.state.gender;
    let state = this.state.state;
    let city = this.state.city;
    let hobby = this.state.hobby;
    let places_you_aften_go = this.state.places_you_aften_go;
    let family_history = this.state.family_history;
    if (!Number(age)) {
      alert("Your age must be a number");
    } else if (gender === "") {
      alert("Please select your gender");
    } else if (state === "") {
      alert("Please enter the state you live in");
    } else if (city === "") {
      alert("Please enter the city you live in");
    } else if (hobby === "") {
      alert("Please enter your hobby");
    } else if (places_you_aften_go === "") {
      alert("Please enter the places you aften go");
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
    return (<div classname="col-6 col-12-narrower feature">
      <form onSubmit={this.mySubmitHandler}>
        <h1>Describe your skin condition</h1>
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
        <label>State</label>
        <input type="text" name="state" onChange={this.myChangeHandler} />
        <label>City</label>
        <input type="text" name="city" onChange={this.myChangeHandler} />
        <label>Hobby</label>
        <input type="text" name="hobby" onChange={this.myChangeHandler} />
        <label>Places you aften go</label>
        <input
          type="text"
          name="places_you_aften_go"
          onChange={this.myChangeHandler}
        />
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
