import React, { Component } from "react";
import FileBase64 from "react-file-base64";
import "./Upload.modules.css";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Modal from "./Modal";

// const axios = require("axios").default;
const utf8 = require("utf8");
var resizebase64 = require("resize-base64");
export default class Upload extends Component {
  constructor(props) {
    super();
    this.state = {
      files: [],
      Result: [],
      image: false,
      imageFormat: "jpg",
      predict: 0,
      ifSkin: "",
      flag: false,
      age: null,
      gender: "",
      family_history: "",
    };
    this.fileUpload = this.fileUpload.bind(this);
    this.sendToModle = this.sendToModle.bind(this);
  }

  mySubmitHandler = (event) => {
    event.preventDefault();
    let age = this.state.age;
    let gender = this.state.gender;
    let family_history = this.state.family_history;
    let image = this.state.image;
    let imageFormat = this.state.imageFormat;
    if (!Number(age)) {
      alert("Your age must be a number");
      if (age < 0) {
        alert("Your age must be a positive number");
      }
    } else if (gender === "") {
      alert("Please select your gender");
    } else if (family_history === "") {
      alert("Please enter the your family history of skin cancer");
    } else if (imageFormat !== "jpg") {
      alert("Please upload JPG format!");
    } else if (image === false) {
      alert("Please upload images!");
    } else {
      // this.sendToModle();
      this.fileUpload();
    }
  };
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({ [nam]: val });
  };
  getFiles(files) {
    this.setState({ files: files });

    if (!files.name.match(/\.(jpg)$/)) {
      this.setState({ imageFormat: "not jpg" });
      // this.setState({ image: false });
      console.log("not jpg");
    } else if (files.name.match(/\.(jpg)$/) && files !== []) {
      this.setState({ imageFormat: "jpg" });
      this.setState({ image: true });
      console.log("is jpg");
    }
    // if (files !== []) this.setState({ image: true });

    console.log(files);
  }

  async sendToModle() {
    this.setState({ predict: -1 });
    var img = resizebase64(this.state.files["base64"], 224, 224);
    var test = JSON.stringify({
      image: utf8.decode(img),
    });

    const result_response = await fetch(
      "https://cqpy0ns6yk.execute-api.us-east-1.amazonaws.com/Prod/api",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: test,
      }
    );
    console.log(result_response);
    const result_response_Result = await result_response.json();
    let body = JSON.parse(result_response_Result.body);
    console.log("result_response_Result", result_response_Result);
    console.log("body", body.output);
    this.setState({
      predict: body.output.toFixed(2),
    });
    this.setState({ flag: true });
  }

  async fileUpload() {
    this.setState({ predict: -1 });
    // var test = JSON.parse(
    //   JSON.stringify({ photo: this.state.files["base64"] })
    // );
    // console.log("test", test);
    const response = await fetch(
      "https://3756b7g7oj.execute-api.us-east-1.amazonaws.com/Prod/molesphoto",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ photo: this.state.files["base64"] }),
      }
    );
    console.log(response);
    const Result = await response.json();
    this.setState({ Result: Result.body });
    console.log(this.state.Result);
    const labels = JSON.parse(this.state.Result);

    if (labels["Labels"][0] === undefined) {
      this.setState({ ifSkin: "Sorry, the Photo is Invalid." });
      this.setState({ predict: 2 }); //predict = 2 is invalid photo
      console.log("invalid photo");
    } else if (
      labels["Labels"][0].Name === "Skin" ||
      labels["Labels"][1].Name === "Skin" ||
      labels["Labels"][2].Name === "Skin"
    ) {
      this.setState({ ifSkin: "Skin photo detected" });
      console.log("skin photo");

      //get  request for the upload url to s3

      // const response_s3 = await fetch(
      //   "https://fyb57palwk.execute-api.us-east-1.amazonaws.com/default/getPresignedImageURL"
      // )
      //   .then(function (response_s3) {
      //     return response_s3.json();
      //   })
      //   .then(function (data) {
      //     const items = data;
      //     console.log("Response", items);
      //     return items;
      //   });

      //   console.log(response_s3["uploadURL"]);
      //PUT REQUEST TO S3

      // const result_s3 = fetch(response_s3["uploadURL"], {
      //   method: "PUT",
      //   headers: {
      //     "Content-type": "image/jpeg",
      //   },
      //   body: JSON.stringify({ photo: this.state.files["base64"] }),
      // });

      // console.log(result_s3);

      //Post request for model to get result
      //resize image to 300*300
      var img = resizebase64(this.state.files["base64"], 300, 300);
      var test_photo = JSON.stringify({
        image: utf8.decode(img),
      });
      console.log(test_photo);
      const result_response = await fetch(
        "https://cqpy0ns6yk.execute-api.us-east-1.amazonaws.com/Prod/api",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: test_photo,
        }
      );

      console.log(result_response);
      const result_response_Result = await result_response.json();
      let body = JSON.parse(result_response_Result.body);
      console.log("result_response_Result", result_response_Result);
      console.log(body.output);
      console.log(typeof body.output);
      this.setState({
        predict: body.output.toFixed(2),
      });
      this.setState({ flag: true });
    } else {
      this.setState({ ifSkin: "Sorry, the Photo is Invalid." });
      this.setState({ predict: 2 }); // predict = 2 invalid photo
      console.log("not clear photo");
      this.setState({ flag: true });
    }
  }
  render() {
    // const ifSkin = this.state.ifSkin;
    const predict = this.state.predict;
    const flag = this.state.flag;
    const age = this.state.age;
    const gender = this.state.gender;
    const family_history = this.state.family_history;
    // const invalid = this.state.invalid;
    //remove the srolling bar id modal shows
    if (flag) {
      document.body.classList.add("active-modal");
    } else {
      document.body.classList.remove("active-modal");
    }
    return (
      <div className="row aln-center">
        <form onSubmit={this.mySubmitHandler}>
          <div className="row aln-center">
            <div className="col-6 col-12-narrower feature">
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
              <select
                value={this.state.family_history}
                name="family_history"
                onChange={this.myChangeHandler}
              >
                <option value="Please_select">Please select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
                <option value="Prefer_not_to_say">Prefer not to say</option>
              </select>
              {/* <label>Email</label>
              <input
                type="email"
                name="email"
                onChange={this.myChangeHandler}
              /> */}
            </div>
            <div className="col-6 col-12-narrower">
              <div className="col-6 offset-3 files feature">
                <FileBase64
                  multiple={false}
                  onDone={this.getFiles.bind(this)}
                />
              </div>
              <div className=" col-6 offset-3 pHighlight">
                <p>
                  Notice: <br></br>*We only accept JPG format. <br></br>*All the
                  information is only one-time use
                  <br></br>*It will take 30 seconds to generate your result
                </p>
              </div>
              <div className="col-6 offset-3 feature">
                <img
                  className="preview"
                  src={this.state.files.base64}
                  width="40%"
                  alt="upload"
                  style={{
                    width: "210px",
                    height: "150px",
                  }}
                ></img>
              </div>
              <div className="col-6 offset-3 feature">
                <input type="Submit" />
              </div>
              {/* <div className="col-6 offset-3">{ifSkin ? "loading" : ifSkin}</div> */}
              <div>
                {predict !== -1 ? (
                  ""
                ) : (
                  <Backdrop
                    sx={{
                      color: "#fff",
                      zIndex: (theme) => theme.zIndex.drawer + 1,
                    }}
                    open
                  >
                    <CircularProgress color="inherit" />
                  </Backdrop>
                )}
              </div>
              {flag && (
                <Modal
                  open={flag}
                  onClose={() => this.setState({ flag: false })}
                  result={predict}
                  age={age}
                  gender={gender}
                  family_history={family_history}
                />
              )}
            </div>
          </div>
        </form>
      </div>
    );
  }
}
