function Postscripts(props) {
  return (
    <div>
      <p>
        <i>
          {props.text1}
          <br></br>
          <b className="pHighlight">{props.text2}</b>
          {props.text3}
        </i>
      </p>
    </div>
  );
}
export default Postscripts;
