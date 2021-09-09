// import Map from "./Map";
// import GraphDesc from "../Sections/GraphDesc";
import TableauVisual from "./TableauVisual";
function MapVisual(props) {
  return (
    <div>
      {/* <GraphDesc title="" text="" /> */}
      <div className="container aln-center" id="main">
        <div className="container">
          <TableauVisual
            link="https://public.tableau.com/views/Sachida/Dashboard1"
            height="50vh"
          />
        </div>
      </div>
    </div>
  );
}

export default MapVisual;
