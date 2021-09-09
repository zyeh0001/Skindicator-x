function ImageTextSec1(props) {
    return (
        <div>
            <section className="col-6 col-12-narrower feature">
                <div>
                    <p><b>{props.text1}</b><br />{props.text2}</p>
                </div>
            </section>
            <section className="col-6 col-12-narrower feature">
                <div className="image-wrapper">
                    <img
                        src={props.image}
                        alt=""
                        style={{
                            width: "350px",
                            height: "250px",
                        }}
                    />
                </div>
            </section>
        </div>
    )
}
export default ImageTextSec1;