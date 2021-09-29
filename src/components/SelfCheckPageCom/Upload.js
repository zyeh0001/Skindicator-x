import React, { Component } from "react";
import FileBase64 from "react-file-base64";
import "./Upload.modules.css";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
// import PopupReport from "./PopupReport";
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
      predict: 0,
      ifSkin: "",
      flag: false,
    };
    this.fileUpload = this.fileUpload.bind(this);
    this.sendToModle = this.sendToModle.bind(this);
  }

  getFiles(files) {
    this.setState({ files: files });
    console.log(files);
  }

  async sendToModle() {
    this.setState({ predict: -1 });
    var img = resizebase64(this.state.files["base64"], 224, 224);
    var test = JSON.stringify({
      image: utf8.decode(img),
    });

    const result_response = await fetch(
      "https://qlgkusi8oj.execute-api.us-east-1.amazonaws.com/test/ai-model",
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
      this.setState({ predict: 1 }); //predict = 1 is invalid photo
      console.log("invalid photo");
    } else if (
      labels["Labels"][0].Name === "Skin" ||
      labels["Labels"][1].Name === "Skin" ||
      labels["Labels"][2].Name === "Skin"
    ) {
      this.setState({ ifSkin: "Skin photo detected" });
      console.log("skin photo");

      //get  request for the upload url to s3

      const response_s3 = await fetch(
        "https://fyb57palwk.execute-api.us-east-1.amazonaws.com/default/getPresignedImageURL"
      )
        .then(function (response_s3) {
          return response_s3.json();
        })
        .then(function (data) {
          const items = data;
          console.log("Response", items);
          return items;
        });

      //   console.log(response_s3["uploadURL"]);
      //PUT REQUEST TO S3

      const result_s3 = fetch(response_s3["uploadURL"], {
        method: "PUT",
        headers: {
          "Content-type": "image/jpeg",
        },
        body: JSON.stringify({ photo: this.state.files["base64"] }),
      });

      console.log(result_s3);

      //Post request for model to get result
      //resize image to 300*300
      var img = resizebase64(this.state.files["base64"], 300, 300);
      var test_photo = JSON.stringify({
        image: utf8.decode(img),
      });

      const result_response = await fetch(
        "https://qlgkusi8oj.execute-api.us-east-1.amazonaws.com/test/ai-model",
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
      this.setState({ predict: 1 }); // predict = 1 invalid photo
      console.log("not clear photo");
    }
  }
  render() {
    const ifSkin = this.state.ifSkin;
    const predict = this.state.predict;
    const flag = this.state.flag;
    //remove the srolling bar id modal shows
    if (flag) {
      document.body.classList.add("active-modal");
    } else {
      document.body.classList.remove("active-modal");
    }
    return (
      <div>
        <div className="col-6 offset-3 files">
          <FileBase64 multiple={false} onDone={this.getFiles.bind(this)} />
        </div>
        <div className="col-6 offset-3 preview">
          <img
            src={this.state.files.base64}
            width="40%"
            alt="upload"
            style={{
              width: "210px",
              height: "150px",
            }}
          ></img>
        </div>
        {/* <div className="col-6 offset-3 preview">
          <input type="Submit" onClick={this.fileUpload} />
        </div> */}
        <div className="col-6 offset-3 preview">
          <input type="Submit" onClick={this.sendToModle} />
        </div>
        {/* <div className="col-6 offset-3">{ifSkin ? "loading" : ifSkin}</div> */}
        <div>
          {predict !== -1 ? (
            predict
          ) : (
            <Backdrop
              sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
              open
            >
              <CircularProgress color="inherit" />
            </Backdrop>
          )}
        </div>
        {/* {flag && <PopupReport onFlagChange={this.handleFlagChange} />} */}
        {flag && (
          <Modal
            open={flag}
            onClose={() => this.setState({ flag: false })}
            result={predict}
          />
        )}

        {/* closeModal={this.state.flag} */}
      </div>
    );
  }
}
