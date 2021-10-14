import { Link } from "react-router-dom";

function ThirdPartyService(props) {
  return (
    <div className="container3P">
      {/* <header>
          <h2>
            <b>Get more help here:</b>
          </h2>
        </header> */}
      <p></p>
      {/* <p>
          Skinvision:
            <Link to="/SkinVision">https://www.skinvision.com/</Link>
          </p> */}
      <p>
        Cancer council:
        <Link to="/CancerConcil">https://www.cancer.org.au/</Link>
      </p>
      <p>
        Australian Institute of Health and Welfare:
        <Link to="/AIHW">https://www.aihw.gov.au/</Link>
      </p>
      <p>
        World cancer Research Fund:
        <Link to="/WCRF">https://www.wcrf.org/</Link>
      </p>
    </div>
  );
}

export default ThirdPartyService;
