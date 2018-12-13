import React, { PureComponent } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Creators as CreatorsModal } from "../../store/ducks/modal";
import { Creators as CreatorsUsers } from "../../store/ducks/users";

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

    const { userInput } = this.state;

    this.setState(
      {
        userInput: ""
      },
      () => {
        this.props.addUserRequest(userInput, this.props.modal.lngLat);
      }
    );
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

const Creators = { ...CreatorsModal, ...CreatorsUsers };
const mapDispatchToProps = dispatch => bindActionCreators(Creators, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalAddMarker);
