import { useEffect, useMemo, useRef, useState } from "react";
import { Map, Marker, Popup } from "react-map-gl";
import { fitBounds } from "@math.gl/web-mercator";
import "mapbox-gl/dist/mapbox-gl.css";
import Img from "../Img/index.jsx";
import useGetCenterFromBounds from "../../utils/useGetCenterFromBounds.js";
import { Paragraph } from "../Paragraph/index.js";

const TOKEN = import.meta.env.VITE_MAPBOX_GL_TOKEN;

const CustomMap = ({ locations }) => {
  const mapRef = useRef();
  const { maxLngLat, minLngLat } = useGetCenterFromBounds(locations);

  const [popupInfo, setPopupInfo] = useState(null);
  const [viewport, setViewport] = useState({
    longitude: 0,
    latitude: 0,
    zoom: 1,
  });

  useEffect(() => {
    const newViewport = fitBounds({
      width: mapRef.current.offsetWidth,
      height: 300,
      bounds: [minLngLat, maxLngLat],
    });

    setViewport(newViewport);
  }, []);

  const pins = useMemo(
    () =>
      locations.map((loc, index) => (
        <Marker
          key={`marker-${index}`}
          longitude={loc.coordinates[0]}
          latitude={loc.coordinates[1]}
          anchor="bottom"
          onClick={(e) => {
            e.originalEvent.stopPropagation();
            setPopupInfo(loc);
          }}
        >
          <Img src="/img/pin.png" alt="" />
        </Marker>
      )),
    [],
  );

  return (
    <div id="map" ref={mapRef}>
      <Map
        {...viewport}
        padding={{
          top: 200,
          bottom: 100,
        }}
        onMove={(evt) => setViewport(evt.viewState)}
        mapStyle="mapbox://styles/kraviecdev/clqqn5l9400w201pjc4measvn"
        mapboxAccessToken={TOKEN}
        scrollZoom={false}
      >
        {pins}

        {popupInfo && (
          <Popup
            anchor="bottom"
            offset={36}
            longitude={Number(popupInfo.coordinates[0])}
            latitude={Number(popupInfo.coordinates[1])}
            onClose={() => setPopupInfo(null)}
          >
            <Paragraph
              info
            >{`Day ${popupInfo.day}: ${popupInfo.description}`}</Paragraph>
          </Popup>
        )}
      </Map>
    </div>
  );
};

export default CustomMap;
