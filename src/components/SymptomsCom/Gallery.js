
import { Link } from "react-router-dom";
import React, { useRef } from 'react'

function Gallery(props) {

  var imgRef = console.log(useRef());

  var slideIndex = 1;
  showSlides(slideIndex);
  
  // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function showSlides(n) {
    var i;
    var slides = imgRef.img;
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
  }

  return (
    <div>
      <div className="containerG">

        <div ref={imgRef} className="mySlides" id="img">
          <div className="numbertext">1 / 8</div>
          <img src={props.image1} alt="" style={{width:"100%" }}></img>
        </div>

        <div className="mySlides" id="img">
          <div className="numbertext">2 / 8</div>
          <img src={props.image2}  alt="" style={{width:"100%" }}></img>
        </div>

        <div className="mySlides" id="img">
          <div className="numbertext">3 / 8</div>
          <img src={props.image3}  alt="" style={{width:"100%" }}></img>
        </div>

        <div className="mySlides" id="img">
          <div className="numbertext">4 / 8</div>
          <img src={props.image4}  alt="" style={{width:"100%" }}></img>
        </div>

        <div className="mySlides" id="img">
          <div className="numbertext">5 / 8</div>
          <img src={props.image5}  alt="" style={{width:"100%" }}></img>
        </div>

        <div className="mySlides" id="img">
          <div className="numbertext">6 / 8</div>
          <img src={props.image6}  alt="" style={{width:"100%" }}></img>
        </div>

        <div className="mySlides" id="img">
          <div className="numbertext">7 / 8</div>
          <img src={props.image7}  alt="" style={{width:"100%" }}></img>
        </div>

        <div className="mySlides" id="img">
          <div className="numbertext">8 / 8</div>
          <img src={props.image8}  alt="" style={{width:"100%" }}></img>
        </div>

        <Link className="prev" onclick={plusSlides(-1)}>❮</Link>
        <Link className="next" onclick={plusSlides(1)}>❯</Link>

      </div>
    </div>
  )
}





export default Gallery;
