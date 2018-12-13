import React, { Component } from "react";
import ReactMapGL, { NavigationControl, Marker } from "react-map-gl";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Creators } from "../../store/ducks/modal";

import { Container, Controlls, UserImages } from "./styles";

const Token =
  "pk.eyJ1IjoibnJlbmFyZDE5OTkiLCJhIjoiY2pwancxZmEzMDlndTN3b2NncmR1amNndCJ9.8xEz08jm-gc5S9fTzsxqjQ";

class Map extends Component {
  state = {
    viewport: {
      width: "100%",
      height: "100%",
      latitude: -30.070147276910028,
      longitude: -51.07166658161394,
      zoom: 8
    }
  };

  handleChangeZoom = viewport => {
    this.setState({ viewport });
  };

  handleClickMap = details => {
    this.props.openModal(details.lngLat);
  };

  newWindowMyFrieeeeend = link => {
    window.open(link, "_blank");
  };

  render() {
    const { viewport } = this.state;
    const { users } = this.props.users;

    return (
      <Container>
        <ReactMapGL
          {...viewport}
          onViewportChange={viewport => this.setState({ viewport })}
          mapboxApiAccessToken={Token}
          // mapStyle="mapbox://styles/mapbox/dark-v9"
          onClick={this.handleClickMap}
        >
          <Controlls>
            <NavigationControl
              onViewportChange={viewport => this.setState({ viewport })}
              onViewStateChange={this.handleChangeZoom}
            />
          </Controlls>

          {users.map(user => (
            <Marker
              longitude={user.lngLat[0]}
              latitude={user.lngLat[1]}
              offsetTop={0}
              offsetLeft={0}
              key={user.id}
            >
              <UserImages onClick={() => this.newWindowMyFrieeeeend(user.url)}>
                <a href={user.link} target="_blank">
                  <img src={user.img} alt={user.name} />
                </a>
              </UserImages>
            </Marker>
          ))}
        </ReactMapGL>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users
});

const mapDispatchToProps = dispatch => bindActionCreators(Creators, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Map);
