import { Link } from "react-router-dom";

function BottomJump(props) {
    return (
        <div>
        <header>
          <h2 className="featureP"><b>{props.question}</b></h2>
        </header>
<div className="featureB">
        <p>{props.jump1}<Link to={props.link1}>{props.jumpDesc1}</Link></p>
        
        <p>{props.jump2}<Link to={props.link2}>{props.jumpDesc2}</Link></p>
        
    </div>
    </div>
    );
}
export default BottomJump;
