function ImageSection1(props) {
    return (
        <section className="col-12 col-12-narrower feature">
            <div className="image-wrapper">
                <img
                    src={props.image}
                    alt=""
                />
            </div>
        </section>
    )
}
export default ImageSection1;