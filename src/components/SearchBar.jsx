import React, { useEffect } from "react";
//search location
import { OpenStreetMapProvider, GeoSearchControl } from "leaflet-geosearch";
import { useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-geosearch/dist/geosearch.css";

const SearchBar = () => {
  const map = useMap();

  useEffect(() => {
    const provider = new OpenStreetMapProvider();

    const searchControl = new GeoSearchControl({
      provider: provider,
      notFoundMessage: "Sorry, that place could not be found.",
    });


    map.addControl(searchControl);
    return () => map.removeControl(searchControl);
  });

  return null;
};

export default SearchBar;
