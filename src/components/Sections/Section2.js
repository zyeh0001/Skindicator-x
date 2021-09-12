
function Section2(props) {
  return (
    <div className="col-6 col-12-small">

      <section className="box feature">
        <div className="image featured">
          <img
            src={props.image}
            alt=""
            style={{
              width: "350px",
              height: "250px",
            }}>
          </img>
        </div>
        <h3>{props.title}</h3>
        <p>
          {props.content}
        </p>
      </section>

    </div>
  );
}
export default Section2;
