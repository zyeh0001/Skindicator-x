import React, { Component } from "react";

export default class Upload extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   flag: this.props.closeModal,
    // };
  }
  //   closePopup() {
  //     console.log(this.state.flag);
  //     this.setState({ flag: false });
  //     console.log(this.state.flag);
  //   }

  render() {
    // const flag = this.state.flag;
    return (
      <div className="modalBackground">
        <div className="modalContainer">
          <button onClick={this.props.handleFlagChange}>X</button>
          <div className="reportTitle">
            <h1>Your Assessment result is: </h1>
          </div>
          <div className="reportBody">
            <div className="reportSubTitle">What does it mean?</div>
            <p>What does it mean? content</p>
            <div className="reportSubTitle">Things to notice?</div>
            <p>Things to notice? content</p>
            <div className="reportSubTitle">What to do next?</div>
            <p>What to do next? content</p>
          </div>
          <div className="reportFotter">
            <button>Close</button>
            <button>Send to email</button>
          </div>
        </div>
      </div>
    );
  }
}
