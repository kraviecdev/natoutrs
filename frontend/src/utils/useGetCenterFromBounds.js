import mapboxgl from "mapbox-gl";

const useGetCenterFromBounds = (locations) => {
  if (!locations || locations.length === 0) {
    return;
  }

  const uniqueCoordinates = Array.from(
    new Set(locations.map((location) => JSON.stringify(location.coordinates))),
  ).map((coordString) => JSON.parse(coordString));

  if (uniqueCoordinates.length === 0) {
    return;
  }

  const [minLng, minLat] = uniqueCoordinates.reduce(
    ([minLng, minLat], [lng, lat]) => [
      Math.min(minLng, lng),
      Math.min(minLat, lat),
    ],
    [Infinity, Infinity],
  );

  const [maxLng, maxLat] = uniqueCoordinates.reduce(
    ([maxLng, maxLat], [lng, lat]) => [
      Math.max(maxLng, lng),
      Math.max(maxLat, lat),
    ],
    [-Infinity, -Infinity],
  );

  const minLngLat = [minLng, minLat];
  const maxLngLat = [maxLng, maxLat];

  const center = new mapboxgl.LngLatBounds(minLngLat, maxLngLat).getCenter();

  return { center };
};

export default useGetCenterFromBounds;
