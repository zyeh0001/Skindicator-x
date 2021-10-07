import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import MapboxDirections from "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions";
import "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css";
import "mapbox-gl/dist/mapbox-gl.css";
import * as hospDate from "./data/hosp.json";
import "./ClinicMap.css";

export default function App() {
  const [viewport, setViewport] = useState({
    latitude: -37.8136276,
    longitude: 144.96305759999998,
    width: "100vw",
    height: "100vh",
    zoom: 10,
  });
  const directions = new MapboxDirections({
    accessToken:
      "pk.eyJ1Ijoic3NpbjAwNjkiLCJhIjoiY2t0bjRpejBjMGZpZzJxbjU3azRsY3V2aSJ9.d_2VxfEhFX2ff-TnQaQY5g",
    unit: "metric",
    profile: "mapbox/driving",
  });

  const [selectedHosp, setSelectedHosp] = useState(null);

  useEffect(() => {
    //console.log("123")
    //addControl(directions, 'top-left');
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
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        mapStyle="mapbox://styles/mapbox/streets-v10"
        onViewportChange={(viewport) => {
          setViewport(viewport);
        }}
      >
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
