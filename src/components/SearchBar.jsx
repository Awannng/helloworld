import React, { useEffect } from "react";
//search location
import { OpenStreetMapProvider, GeoSearchControl } from "leaflet-geosearch";
import { useMap } from "react-leaflet";
import "leaflet-geosearch/dist/geosearch.css";

const SearchBar = () => {
  const map = useMap();

  useEffect(() => {
    //the map provider that we can search on
    const provider = new OpenStreetMapProvider();

    //allow to search
    const searchControl = new GeoSearchControl({
      provider: provider,
      notFoundMessage: "Sorry, that place could not be found.",
      showMarker: false,
      position: "bottomright",
    });

    //add the search button to the map
    map.addControl(searchControl);

    //it won't repeat the search button when click on the map
    return () => map.removeControl(searchControl);
  });

  return null;
};

export default SearchBar;
