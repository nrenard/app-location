import React from "react";

import Map from "../../components/Map";
import ModalAddMarker from "../../components/ModalAddMarker";
import ListUsers from "../../components/ListUsers";

const Main = () => (
  <div className="bir">
    <Map />
    <ModalAddMarker />
    <ListUsers />
  </div>
);

export default Main;
