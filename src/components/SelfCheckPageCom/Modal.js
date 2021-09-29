import React, { useState, useEffect } from "react";
// import Backdrop from "@mui/material/Backdrop";
import "./Modal.css";
import ReactDom from "react-dom";

function Modal({ open, children, onClose, result }) {
  const [isOpen, setIsOpen] = useState(open);
  const [invalid, setInvalid] = useState(false);
  const [level, setLevel] = useState(result);
  const [section1, setSection1] = useState("what does it mean?");
  const [section2, setSection2] = useState("Things to notice:");
  const [section3, setSection3] = useState("what to do next?");
  const [title, setTitle] = useState("Your Assessment result is:");
  useEffect(() => {
    if (result == 1) {
      setInvalid(true);
      setTitle("Sorry the photo is Invalid Please upload again.");
    }
    if (result <= 0.25) {
      setLevel("Low");
      setSection1(
        "Low means your skin condition is fine. Based on our our AI picture recognition technology low chance there maybe a problem. But we still suggest you to  see gp to get examined and referred to a dermatologist."
      );
      setSection3(
        "According to the results of our AI detection, we suggest you to start your skin protection journey below to keep your skin in a good condition. please also check out medical support to find nearest skin-care clinic to do regular skin  checkup. No matter how，please pay more attention to your moles and do periodic skin examination."
      );
    } else if (result > 0.25 && result <= 0.5) {
      setLevel("Medium Low");
      setSection1(
        "Medium-low means your skin condition is not so bad. Based on our our AI picture recognition technology low chance there maybe a problem. But we still suggest you to  see gp to get examined and referred to a dermatologist."
      );
      setSection3(
        "According to the results of our AI detection, we suggest you to start your skin protection journey below to keep your skin in a good condition. But if possible, please go to medical support to find nearest skin cancer clinic to check your skin. No matter how，please pay more attention to your moles and do periodic skin examination."
      );
    } else if (result > 0.5 && result <= 0.75) {
      setLevel("Medium High");
      setSection1(
        "Medium-high means your skin condition is not good. Based on our our AI picture recognition technology high chance there maybe a problem. Please see gp to get examined and referred to a dermatologist."
      );
      setSection3(
        "According to the results of our AI detection, we suggest you to medical support to find nearest skin cancer clinic to check your skin. No matter how，please pay more attention to your moles and do periodic skin examination."
      );
    } else {
      setLevel("High");
      setSection1(
        "High means your skin condition is so bad. Based on our our AI picture recognition technology high chance there maybe a problem. Please see gp to get examined and referred to a dermatologist."
      );
      setSection3(
        "According to the results of our AI detection, we suggest you to medical support to find nearest skin cancer clinic to check your skin. No matter how，please pay more attention to your moles and do periodic skin examination. "
      );
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
          <div className="titleCloseBtn">
            <button onClick={onClose}> X </button>
          </div>
          <div className="title">
            <h1>{title}</h1>
          </div>
          <div className="body row aln-center">
            <div className="subTitle">What does it mean?</div>
            <div className="content">{section1}</div>
            <div className="subTitle">Things to notice?</div>
            <div className="content">{section2}</div>
            <div className="subTitle">What to do next?</div>
            <div className="content">{section3}</div>
          </div>
          <div className="footer">
            <button onClick={onClose} id="cancelBtn">
              Close
            </button>
            <button>Send to email</button>
          </div>
        </div>
      )}

      {children}
    </div>,
    document.getElementById("portal")
  );
}

export default Modal;
