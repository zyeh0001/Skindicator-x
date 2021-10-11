function Section5(props) {
  return (
    <div className="col-2">
      <section>
        <div className="image-wrapper">
          <img
            src={props.image}
            alt=""
            style={{
              width: "auto",
              height: "280px",
            }}
          />
        </div>
        <header>
          <h3>{props.name}</h3>
        </header>
        <p
          style={{
            width: "auto",
          }}
        >
          {props.intro}
        </p>
      </section>
    </div>
  );
}
export default Section5;
