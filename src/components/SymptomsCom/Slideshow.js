import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'



var slideImages 


const Slideshow = (props) => {
  if (props.type==="basal"){
    slideImages = [
      {
        url: "images/basal1.jpg",
        caption: ' '
      },
      {
        url: "images/basal2.jpg",
        caption: ' '
      },
      {
        url: "images/basal3.jpg",
        caption: ' '
      },
      {
        url: "images/basal4.jpg",
        caption: ' '
      },
      {
        url: "images/basal5.jpg",
        caption: ' '
      },
      {
        url: "images/basal6.jpg",
        caption: ' '
      },
      {
        url: "images/basal7.jpg",
        caption: ' '
      },
      {
        url: "images/basal8.jpg",
        caption: ' '
      },
    ];}
    else if (props.type==="melanoma"){
      slideImages = [
        {
          url: "images/melanoma1.jpg",
          caption: ' '
        },
        {
          url: "images/melanoma2.jpg",
          caption: ' '
        },
        {
          url: "images/melanoma3.jpg",
          caption: ' '
        },
        {
          url: "images/melanoma4.jpg",
          caption: ' '
        },
        {
          url: "images/melanoma5.jpg",
          caption: ' '
        },
        {
          url: "images/melanoma6.jpg",
          caption: ' '
        },
        {
          url: "images/melanoma7.jpg",
          caption: ' '
        },
        {
          url: "images/melanoma8.jpg",
          caption: ' '
        },
      ];}
      else if (props.type==="squamous"){
        slideImages = [
          {
            url: "images/squamous1.jpg",
            caption: ' '
          },
          {
            url: "images/squamous2.jpg",
            caption: ' '
          },
          {
            url: "images/squamous3.jpg",
            caption: ' '
          },
          {
            url: "images/squamous4.jpg",
            caption: ' '
          },
          {
            url: "images/squamous5.jpg",
            caption: ' '
          },
          {
            url: "images/squamous6.jpg",
            caption: ' '
          },
          {
            url: "images/squamous7.jpg",
            caption: ' '
          },
          {
            url: "images/squamous8.jpg",
            caption: ' '
          },
        ];}
    return (
      <div className="slide-container">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div className="each-slide" key={index}>
              <div style={{'backgroundImage': `url(${slideImage.url})`}}>
                <span>{slideImage.caption}</span>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
    )
         }
export default Slideshow;
