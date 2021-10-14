function Section3Topic(props) {
  return (
    <div className="container">
      <header className="major">
        <h2>{props.title}</h2>
      </header>
      <p className="pGrey">
        <b>{props.text}</b>
      </p>
    </div>
  );
}
export default Section3Topic;
