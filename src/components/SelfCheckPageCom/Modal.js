import React, { useState, useEffect } from "react";
import jsPDF from "jspdf";
// import Backdrop from "@mui/material/Backdrop";
import "./Modal.css";
import ReactDom from "react-dom";
import { Link } from "react-router-dom";
function Modal({
  open,
  children,
  onClose,
  result,
  age,
  gender,
  family_history,
}) {
  // const [isOpen, setIsOpen] = useState(open);
  const [invalid, setInvalid] = useState(false);
  const [level, setLevel] = useState(result);
  const [section1, setSection1] = useState("what does it mean?");
  const [section2, setSection2] = useState("");
  const [section3, setSection3] = useState("what to do next?");
  // const [title, setTitle] = useState("Your Assessment result is:");
  const [color, setColor] = useState("");
  const [familySection, setFamilySection] = useState("");

  function pdfGenerate() {
    var doc = new jsPDF("landscape", "px", "a3", "false");
    // var imageData = "../../../logo512.png";
    // doc.addImage(imageData, "PNG", 30, 30, 50, 50);

    doc.html(document.querySelector(".print"), {
      callback: function (doc) {
        // doc.setFontSize(8);
        doc.save("report.pdf");
      },
      margin: 40,
      width: 500,
      autoPaging: "text",
    });
  }
  function renderToOther() {
    document.body.classList.remove("active-modal");
  }
  useEffect(() => {
    if (age > 50) {
      setSection2(
        "According to our statistics, from your given age and gender, we find that you may have a higher chance of being diagnosed with a skin disease."
      );
      if (gender === "Male") {
        setSection2(
          "According to our statistics, men are more likely to be diagnosed with skin cancer than women. From your given age and gender, we find that you may have a higher chance of being diagnosed with a skin disease."
        );
      }
    }

    if (family_history === "Yes") {
      setFamilySection(
        "Based on your family record of skin cancer, you might need to pay more attention to your moles. Genetics is one of the factors that increased the risk of getting Melanoma."
      );
    } else {
      setFamilySection("");
    }
    if (result <= 0.25) {
      setColor("green");
      setLevel("Low");
      setSection1(
        "Based on our AI model detection, Low level means your moles appear to be fine. But we still suggest you to go to GP for regular skin check and follow our suggestion down below"
      );
      setSection3(
        "We suggest you to start your skin protection journey now (link down below) to keep your skin in a good condition. Please check our Medical Support page (link down below) to find nearest skin-care clinic to do regular skin check-ups."
      );
    } else if (result > 0.25 && result <= 0.5) {
      setColor("#f08080");
      setLevel("Medium Low");
      setSection1(
        "Based on our AI model detection, Medium-low level means your moles have slightly chance to be malignant. But we still recommend that you have your moles monitored and go to your GP for regular skin check-ups."
      );
      setSection3(
        "We suggest you to start your skin protection journey now (link down below) to keep your skin in a good condition. But if possible, please go to our Medical Support (link down below) to find nearest  skin-care clinic to check your moles. Please pay more attention to your moles and do periodic skin examination."
      );
    } else if (result > 0.5 && result <= 0.75) {
      setColor("#dc143c");
      setLevel("Medium High");
      setSection1(
        "Based on our AI model detection, Medium-high level means that you should pay more attention on your moles. Please monitor your moles and go to GP to get examined and referred to a dermatologist."
      );
      setSection3(
        "We suggest you to go to our Medical Support page (link down below) to find nearest GP for moles check and reach to dermatologist for further medication. Please pay more attention and monitor any changes of your moles. If there is any doubt, go to see a GP immediately."
      );
    } else if (result > 0.75 && result < 1) {
      setColor("#8b0000");
      setLevel("High");
      setSection1(
        "Based on our AI model detection, High level means your moles are likely to be a problem. Please go see the GP immediately and reach to dermatologist for further examination."
      );
      setSection3(
        "We suggest you to go to Medical Support page (link down below) to find nearest GP to check your moles immediately. At the meantime, monitor your moles everyday with the ABCDE method (link down below). If there is any doubt, go to see a GP immediately."
      );
    } else {
      setInvalid(true);
      console.log("invalid");
    }
    console.log(level);
  }, [age, family_history, result, level, gender]);

  if (!open) {
    return null;
  }

  return ReactDom.createPortal(
    <div className="modalBackground">
      {invalid && (
        <div className="invalidContainer">
          <div className="title">
            <h1>
              Sorry the photo is invalid<br></br>Please upload again
            </h1>
          </div>
          <button onClick={onClose} id="cancelBtn">
            Close
          </button>
        </div>
      )}
      {!invalid && (
        <div className="modalContainer">
          {/* <div className="titleCloseBtn">
            <button onClick={onClose}> X </button>
          </div> */}
          <div className="print">
            <div className="toCenter">
              <p className="title">Your Assessment result is:</p>
              <p className="title" style={{ color: color, fontWeight: "bold" }}>
                {level}
              </p>
              <Link
                onClick={renderToOther}
                to="/medical-disclaimer"
                className="Highlight"
              >
                Notice: this is not a medical diagnoses
              </Link>
            </div>

            <div>
              <p className="subTitle">What does it mean?</p>
              <p className="content">{section1}</p>
              {section2 !== "" && (
                <div>
                  <p className="subTitle">Things to notice?</p>
                  <p className="content">{section2}</p>
                  <p className="content">{familySection}</p>
                </div>
              )}

              <div className="row">
                <p className="subTitle">What to do next?</p>
                <p className="content cRed">
                  Download the report first and follow our suggestions!
                </p>
              </div>

              <p className="content">{section3}</p>
            </div>
          </div>
          <div className="row">
            <Link onClick={renderToOther} to="/medical-support">
              Check Nearby Clinic
            </Link>
            <Link onClick={renderToOther} to="/protection-tips">
              Protect your skin
            </Link>
            <Link onClick={renderToOther} to="/skin-protection-abcde">
              Moles ABCDE Check
            </Link>
          </div>

          <div className="footer">
            <button onClick={onClose} id="cancelBtn">
              Close
            </button>
            <button onClick={pdfGenerate}>Download</button>
          </div>
        </div>
      )}

      {children}
    </div>,
    document.getElementById("portal")
  );
}

export default Modal;
