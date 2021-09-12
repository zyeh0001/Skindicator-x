import { Link } from "react-router-dom";
function HomeImage() {
  return (



    <div id="homeImg-wrapper" className="bg_cover align-items-center">

      <section id="banner">
        <div class="content">
          <h2>Are you having trouble with your moles ?</h2>
          <p>Skin care is never too late</p><br></br>
          <p>Let's try our free skin cancer detection tool</p>
          <Link to="/self-check" className="button scrolly">Check Your Spot!</Link>
        </div>
      </section>

      {/* <div>
        <section id="hero" className="container">
          <header>
            <h2>
              Are you having trouble with your moles ?
              <br />
            </h2>
          </header>
          <p>
            Skin care is never too late
            <br />
            Let's try our free skin cancer detection tool
          </p>
          <ul className="actions">
            <li>
              <Link to="/self-check" className="button">
                Check Your Spot!
              </Link>
            </li>
          </ul>
        </section>
      </div> */}
    </div>
  );
}
export default HomeImage;
