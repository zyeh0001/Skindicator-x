function ImageTextSec1(props) {
  return (
    <div className="wrapper">
      <div className="container">
        <div className="row">
          <section className="col-6">
            <p>
              <b>{props.text1}</b>
              <br />
              {props.text2}
            </p>
          </section>
          <section className="col-6">
            <div className="image-wrapper">
              <img
                src={props.image}
                alt=""
                style={{
                  width: "700px",
                  height: "550px",
                }}
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
export default ImageTextSec1;
