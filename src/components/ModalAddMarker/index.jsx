import React, { PureComponent } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Creators } from "../../store/ducks/modal";

import { ContainerModal, BoxModal, TitleModal } from "./styles";

class ModalAddMarker extends PureComponent {
  state = {
    userInput: ""
  };

  handleChangeInput = ({ target }) => {
    this.setState({ userInput: target.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    alert("submit");
  };

  render() {
    const { modal } = this.props.modal;

    return (
      <ContainerModal modalAddMarker={modal}>
        <BoxModal>
          <TitleModal>Add new user</TitleModal>

          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              placeholder="User on Github"
              onChange={this.handleChangeInput}
            />

            <div className="wrapper-buttons">
              <button onClick={this.props.closedModal} type="button">
                cancel
              </button>

              <button type="submit">Save</button>
            </div>
          </form>
        </BoxModal>
      </ContainerModal>
    );
  }
}

const mapStateToProps = state => ({
  modal: state.modal
});

const mapDispatchToProps = dispatch => bindActionCreators(Creators, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalAddMarker);
