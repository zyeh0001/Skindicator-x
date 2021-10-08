import React, { useState, useEffect, useRef } from "react";
import ReactMapGL, { Marker, Popup, GeolocateControl } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

// import "mapbox-gl/dist/mapbox-gl.css";
// import MapboxDirections from "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions";
// import "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css";
// import "mapbox-gl/dist/mapbox-gl.css";
import * as hospDate from "./data/hosp.json";
import "./ClinicMap.css";
// var MapboxDirections = require("@mapbox/mapbox-gl-directions");
const geolocateStyle = {
  top: 0,
  left: 0,
  margin: 10,
};
const positionOptions = { enableHighAccuracy: true };
export default function App() {
  const mapRef = useRef();

  const [viewport, setViewport] = useState({
    latitude: -37.8136276,
    longitude: 144.96305759999998,
    width: "50vw",
    height: "50vh",
    zoom: 10,
  });
  //   var directions = new Directions({
  //     accessToken:
  //       "pk.eyJ1Ijoic3NpbjAwNjkiLCJhIjoiY2t0bjRpejBjMGZpZzJxbjU3azRsY3V2aSJ9.d_2VxfEhFX2ff-TnQaQY5g",
  //     unit: "metric",
  //     profile: "mapbox/cycling",
  //   });

  const [selectedHosp, setSelectedHosp] = useState(null);

  useEffect(() => {
    // var glmap = mapRef.getMap();
    // const directions = new MapboxDirections({
    //   accessToken:
    //     "pk.eyJ1Ijoic3NpbjAwNjkiLCJhIjoiY2t0bjRpejBjMGZpZzJxbjU3azRsY3V2aSJ9.d_2VxfEhFX2ff-TnQaQY5g",
    //   unit: "metric",
    //   profile: "mapbox/driving",
    // });
    //console.log("123")
    //addControl(directions, 'top-left');
    //glmap.addControl(directions, "top-left");
    const listener = (e) => {
      if (e.key === "Escape") {
        setSelectedHosp(null);
      }
    };
    window.addEventListener("keydown", listener);

    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, []);

  return (
    <div>
      <ReactMapGL
        {...viewport}
        ref={mapRef}
        mapboxApiAccessToken="pk.eyJ1Ijoic3NpbjAwNjkiLCJhIjoiY2t0bjRpejBjMGZpZzJxbjU3azRsY3V2aSJ9.d_2VxfEhFX2ff-TnQaQY5g"
        mapStyle="mapbox://styles/mapbox/dark-v9"
        onViewportChange={(viewport) => {
          setViewport(viewport);
        }}
      >
        <GeolocateControl
          style={geolocateStyle}
          positionOptions={positionOptions}
          trackUserLocation
          auto
        />
        {hospDate.features.map((hosp) => (
          <Marker
            key={hosp.properties.Hospital_ID}
            latitude={hosp.geometry.coordinates[1]}
            longitude={hosp.geometry.coordinates[0]}
          >
            {/* <button className="marker-btn"></button> */}
            <img
              className="marker-img"
              src="/hsp.svg"
              alt=""
              onClick={(e) => {
                e.preventDefault();
                setSelectedHosp(hosp);
              }}
            ></img>
          </Marker>
        ))}

        {selectedHosp ? (
          <Popup
            latitude={selectedHosp.geometry.coordinates[1]}
            longitude={selectedHosp.geometry.coordinates[0]}
            onClose={() => {
              setSelectedHosp(null);
            }}
          >
            <div>
              <h2>{selectedHosp.properties.Formal_Name}</h2>
              <p>{selectedHosp.properties.Full_Address}</p>
            </div>
          </Popup>
        ) : null}
      </ReactMapGL>
    </div>
  );
}
