import React, { useState, useEffect } from "react";
import jsPDF from "jspdf";
// import Backdrop from "@mui/material/Backdrop";
import "./Modal.css";
import ReactDom from "react-dom";
import { Link } from "react-router-dom";
function Modal({ open, children, onClose, result, age, gender }) {
  const [isOpen, setIsOpen] = useState(open);
  const [invalid, setInvalid] = useState(false);
  const [level, setLevel] = useState(result);
  const [section1, setSection1] = useState("what does it mean?");
  const [section2, setSection2] = useState("");
  const [section3, setSection3] = useState("what to do next?");
  const [title, setTitle] = useState("Your Assessment result is:");
  const [color, setColor] = useState("");

  function pdfGenerate() {
    var doc = new jsPDF("landscape", "px", "a4", "false");
    var imageData = "../../../logo512.png";
    // doc.addImage(imageData, "PNG", 30, 30, 50, 50);
    doc.html(document.querySelector(".print"), {
      callback: function (doc) {
        doc.save("report.pdf");
      },
      margin: 40,
      width: 700,
      autoPaging: "text",
    });
  }

  useEffect(() => {
    if (age > 60) {
      setSection2(
        "Analysis by your age and gender, you may have a higher change of getting  diagnosis of skin disease, we suggest you to go to  GP for skin checkup"
      );
    }

    if (result <= 0.25) {
      setColor("green");
      setLevel("Low");
      setSection1(
        "Low means your skin condition is fine. Based on our our AI picture recognition technology low chance there maybe a problem. But we still suggest you to  see gp to get examined and referred to a dermatologist."
      );
      setSection3(
        "According to the results of our AI detection, we suggest you to start your skin protection journey below to keep your skin in a good condition. please also check out medical support to find nearest skin-care clinic to do regular skin checkup. No matter how, please pay more attention to your moles and do periodic skin examination."
      );
    } else if (result > 0.25 && result <= 0.5) {
      setColor("#f08080");
      setLevel("Medium Low");
      setSection1(
        "Medium-low means your skin condition is not so bad. Based on our our AI picture recognition technology low chance there maybe a problem. But we still suggest you to  see gp to get examined and referred to a dermatologist."
      );
      setSection3(
        "According to the results of our AI detection, we suggest you to start your skin protection journey below to keep your skin in a good condition. But if possible, please go to medical support to find nearest skin cancer clinic to check your skin. No matter how, please pay more attention to your moles and do periodic skin examination."
      );
    } else if (result > 0.5 && result <= 0.75) {
      setColor("#dc143c");
      setLevel("Medium High");
      setSection1(
        "Medium-high means your skin condition is not good. Based on our our AI picture recognition technology high chance there maybe a problem. Please see gp to get examined and referred to a dermatologist."
      );
      setSection3(
        "According to the results of our AI detection, we suggest you to medical support to find nearest skin cancer clinic to check your skin. No matter how, please pay more attention to your moles and do periodic skin examination."
      );
    } else if (result > 0.75 && result < 1) {
      setColor("#8b0000");
      setLevel("High");
      setSection1(
        "High means your skin condition is so bad. Based on our our AI picture recognition technology high chance there maybe a problem. Please see gp to get examined and referred to a dermatologist."
      );
      setSection3(
        "According to the results of our AI detection, we suggest you to medical support to find nearest skin cancer clinic to check your skin. No matter how, please pay more attention to your moles and do periodic skin examination."
      );
    } else {
      setInvalid(true);
      console.log("invalid");
    }
    console.log(level);
  }, []);

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
            <div>
              <p className="title">{title}</p>
              <p className="title" style={{ color: color, fontWeight: "bold" }}>
                {level}
              </p>
            </div>
            <div>
              <p className="subTitle">What does it mean?</p>
              <p className="content">{section1}</p>
              {section2 !== "" && (
                <div>
                  <p className="subTitle">Things to notice?</p>
                  <p className="content">{section2}</p>
                </div>
              )}

              <p className="subTitle">What to do next?</p>
              <p className="content">{section3}</p>
            </div>
          </div>
          <div className="row">
            <Link to="/medical-support">Check Nearby Clinic</Link>
            <Link to="/protection-tips">Protect your skin</Link>
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
