import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useEffect } from "react";

const MAPBOX_ACCESS_TOKEN =
  "pk.eyJ1Ijoia3JhdmllY2RldiIsImEiOiJjbHFxbjBqamEzbTJvMmlvMG41dms1Mm96In0.esw8Ems3QLF6tFeTxtPSOg";

const Map = ({ locations }) => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/kraviecdev/clqqn5l9400w201pjc4measvn",
      scrollZoom: false,
      accessToken: MAPBOX_ACCESS_TOKEN,
    });

    const bounds = new mapboxgl.LngLatBounds();

    locations.forEach((loc) => {
      const marker = document.createElement("div");
      marker.className = "marker";

      // Add marker
      new mapboxgl.Marker({
        element: marker,
        anchor: "bottom",
      })
        .setLngLat(loc.coordinates)
        .addTo(map);

      // Add popup
      new mapboxgl.Popup({
        offset: 30,
      })
        .setLngLat(loc.coordinates)
        .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
        .addTo(map);

      // Extend map bounds to include current location
      bounds.extend(loc.coordinates);
    });

    map.fitBounds(bounds, {
      padding: {
        top: 200,
        bottom: 150,
        left: 100,
        right: 100,
      },
    });

    return () => map.remove();
  }, []);

  return <div id="map"></div>;
};

export default Map;
