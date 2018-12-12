import React, { Component } from "react";
import ReactMapGL, { NavigationControl } from "react-map-gl";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Creators } from "../../store/ducks/modal";

import { Container, Controlls } from "./styles";

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
    console.log("details: ", details);

    this.props.openModal();
  };

  render() {
    const { viewport } = this.state;

    console.log("this.props: ", this.props);

    return (
      <Container>
        <ReactMapGL
          {...viewport}
          onViewportChange={viewport => this.setState({ viewport })}
          mapboxApiAccessToken={Token}
          mapStyle="mapbox://styles/mapbox/dark-v9"
          onClick={this.handleClickMap}
        >
          <Controlls>
            <NavigationControl
              onViewportChange={viewport => this.setState({ viewport })}
              onViewStateChange={this.handleChangeZoom}
            />
          </Controlls>
        </ReactMapGL>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  modal: state.modal,
  users: state.users
});

const mapDispatchToProps = dispatch => bindActionCreators(Creators, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Map);
