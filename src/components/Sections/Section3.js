import { Link } from "react-router-dom";
function Section3(props) {
  return (
    <div>
      <section className="col-4 col-12-narrower feature">
        <div className="image-wrapper first">
          <Link to={props.link} className="image featured">
            <img
              src={props.image}
              alt=""
              style={{
                width: "350px",
                height: "250px",
              }}
            />
          </Link>
        </div>

        <div
          style={{
            width: "350px",
          }}
        >
          <h3>
            <Link to="/#">{props.title}</Link>
          </h3>
          <p>{props.text}</p>
        </div>
      </section>
    </div>
  );
}
export default Section3;
