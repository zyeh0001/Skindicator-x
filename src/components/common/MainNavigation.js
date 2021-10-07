import { Link } from "react-router-dom";

function MainNavigation() {
  return (
    <div>
      <nav id="nav">
        <img
          src="images/logo192.png"
          alt=""
        />
        <ul>
          <li>
            <Link to="/symptoms">Symptoms</Link>
          </li>

          <li>
            <Link to="/self-check">Self Check</Link>
          </li>

          <li>
            <Link to="/medical-support">Medical support</Link>
          </li>

          <li class="current">
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="#">Skin Protection</Link>
            <ul>
              <li>
                <Link to="/protection-tips">Protection tips</Link>
              </li>
              <li>
                <Link to="/skin-protection-abcde">Know your skin</Link>
              </li>
            </ul>
          </li>

          <li>
            <Link to="/facts">Facts</Link>
          </li>

          <li>
            <Link to="#">About us</Link>
            <ul>
              <li>
                <Link to="/privacy-policy">Privacy policy</Link>
              </li>
              <li>
                <Link to="/our-team">Our team</Link>
              </li>
              <li>
                <Link to="/medical-disclaimer">Medical disclaimer</Link>
              </li>
            </ul>
          </li>

        </ul>
      </nav>
    </div>
  );
}
export default MainNavigation;

// <Link to="/">Skindicator-X</Link>