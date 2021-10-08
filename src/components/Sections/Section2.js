
function Section2(props) {
  return (
    <div className="col-6 col-12-small">

      <section className="box feature">
        <div className="featureB">

          <img
            src={props.image}
            alt=""
            style={{
              width: "350px",
              height: "250px",
            }}>
          </img>

        <h3>{props.topic}</h3>
        <p>
          {props.content}
        </p>
        </div>
      </section>

    </div>
  );
}
export default Section2;
