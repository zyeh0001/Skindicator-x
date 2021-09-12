import { Link } from "react-router-dom";
function Section3(props) {
  return (
    <div className="col-4 col-6-medium col-12-small">

      <section className="box feature">
        <Link to={props.link} className="image featured">
          <img
            src={props.image}
            alt=""
            style={{
              width: "350px",
              height: "250px",
            }}>
          </img>
        </Link>
        <h3><Link to={props.link}>{props.title}</Link></h3>
        <p>
          Phasellus quam turpis, feugiat sit amet ornare in, a hendrerit in
          lectus dolore. Praesent semper mod quis eget sed etiam eu ante risus.
        </p>
      </section>

    </div>
  );
}
export default Section3;
