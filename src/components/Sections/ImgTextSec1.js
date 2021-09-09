function ImageTextSec1(props) {
    return (
        <div class="wrapper">
            <div class="container">
                <div class="row">
                    <section class="col-6">
                        <p><b>{props.text1}</b><br />{props.text2}</p>
                    </section>
                    <section class="col-6">
                        <div class="image-wrapper">
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

    )
}
export default ImageTextSec1;