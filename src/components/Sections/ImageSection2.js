function ImageSection2(props) {
    return (
        <section className="col-6 col-12-narrower feature">
            <div className="image-wrapper">
                <img
                    src={props.image}
                    alt=""
                    style={{
                        width: "420px",
                        height: "300px",
                    }}
                />
            </div>
        </section>
    )
}
export default ImageSection2;