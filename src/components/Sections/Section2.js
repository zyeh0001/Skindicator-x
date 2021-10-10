
function Section2(props) {
  return (
    <div className="col-6 col-12-small">

      <section className="box feature2">
        <div className="featureB">

          <img className="containerS2I"
            src={props.image}
            alt=""
            style={{
              width: "350px",
              height: "250px",
            }}>
          </img>

        <h3 className="containerS2P">{props.topic}</h3>
        <p className="containerS2P">
          {props.content}
        </p>
        </div>
      </section>

    </div>
  );
}
export default Section2;
