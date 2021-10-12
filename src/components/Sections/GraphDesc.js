import React from "react";

function GraphDesc(props) {
  return (
    <div>
      <article id="content">
        <p>{props.text}</p>
        <header>
          <h2 className="feature">
            <b>{props.title}</b>
          </h2>
        </header>
        {props.text3 && <p className="containerP2">{props.text3}</p>}
        {props.text4 && <p className="sub-feature">{props.text4}</p>}
        <br></br>
      </article>
    </div>
  );
}

export default GraphDesc;
