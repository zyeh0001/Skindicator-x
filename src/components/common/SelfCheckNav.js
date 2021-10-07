import { Link } from "react-router-dom";

function SelfCheckNav() {
  function renderToOther() {
    document.body.classList.remove("active-modal");
  }
  return (
    <div>
      <nav id="nav">
        <ul>
          <li>
            <Link onClick={renderToOther} to="/symptoms">
              Symptoms
            </Link>
          </li>

          <li class="current">
            <Link onClick={renderToOther} to="/self-check">
              Self Check
            </Link>
          </li>

          <li>
            <Link onClick={renderToOther} to="/medical-support">
              Medical support
            </Link>
          </li>

          <li>
            <Link onClick={renderToOther} to="/">
              Home
            </Link>
          </li>

          <li>
            <Link onClick={renderToOther} to="#">
              Skin Protection
            </Link>
            <ul>
              <li>
                <Link onClick={renderToOther} to="/protection-tips">
                  Protection tips
                </Link>
              </li>
              <li>
                <Link onClick={renderToOther} to="/skin-protection-abcde">
                  ABCDEs
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <Link onClick={renderToOther} to="/facts">
              Facts
            </Link>
          </li>

          <li>
            <Link onClick={renderToOther} to="#">
              About us
            </Link>
            <ul>
              <li>
                <Link onClick={renderToOther} to="/privacy-policy">
                  Privacy policy
                </Link>
              </li>
              <li>
                <Link onClick={renderToOther} to="/our-team">
                  Our team
                </Link>
              </li>
              <li>
                <Link onClick={renderToOther} to="/medical-disclaimer">
                  Medical disclaimer
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default SelfCheckNav;

// <Link to="/">Skindicator-X</Link>
