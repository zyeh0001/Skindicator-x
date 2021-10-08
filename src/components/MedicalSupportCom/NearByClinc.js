import React from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import "./ClinicMap.css";
import MapboxDirections from "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions";
import "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css";
import * as hospDate from "./data/hosp.json";

const data = hospDate.features;

mapboxgl.accessToken =
  "pk.eyJ1Ijoic3NpbjAwNjkiLCJhIjoiY2t0bjRpejBjMGZpZzJxbjU3azRsY3V2aSJ9.d_2VxfEhFX2ff-TnQaQY5g";
class Clinic extends React.Component {
  constructor(props) {
    super();
    this.state = {
      lng: 144,
      lat: -37,
      zoom: 5,
      selectedHosp: null,
    };
  }
  componentDidMount() {
    console.log(data);
    const map = new mapboxgl.Map({
      container: this.mapWrapper,
      style: "mapbox://styles/mapbox/dark-v9",
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom,
    });

    data.forEach((location) => {
      const el = document.createElement("div");
      el.className = "marker";
      // console.log(location);
      var marker = new mapboxgl.Marker(el)
        .setLngLat(location.geometry.coordinates)
        .setPopup(
          new mapboxgl.Popup({ offset: 30 }).setHTML(
            "<h4>" +
              location.properties.Formal_Name +
              "</h4>" +
              location.properties.Full_Address
          )
        )
        .addTo(map);
    });

    const directions = new MapboxDirections({
      accessToken: mapboxgl.accessToken,
      unit: "metric",
      profile: "mapbox/driving",
    });
    map.addControl(directions, "top-right");

    const geolocate = new mapboxgl.GeolocateControl({
      style: {
        top: 0,
        left: 0,
        margin: 50,
      },
      positionOptions: {
        enableHighAccuracy: true,
      },
      trackUserLocation: true,
      fitBoundsOptions: { maxZoom: 10 },
    });
    map.addControl(geolocate);
    map.on("load", () => {
      geolocate.trigger();
    });
  }
  render() {
    return <div ref={(el) => (this.mapWrapper = el)} className="mapWrapper" />;
  }
}
export default Clinic;
