import React from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Creators } from "../../store/ducks/users";

import { ContainerList, User } from "./styles";

const windowOpen = (link, e) => {
  if (e.target.tagName !== "SPAN") window.open(link, "_blank");
};

const remove = (props, id) => {
  props.removeUser(id);
};

const ListUsers = ({ users, ...props }) => {
  if (users.length == 0) return null;

  return (
    <ContainerList>
      {users.map(user => (
        <User key={user.id} onClick={windowOpen.bind(null, user.url)}>
          <img src={user.img} alt={user.name} />
          <div className="info">
            <strong> {user.name} </strong>
            <p> {user.login} </p>
          </div>

          <span onClick={() => remove(props, user.id)}>excluir</span>
        </User>
      ))}
    </ContainerList>
  );
};

const mapStateToProps = state => ({
  users: state.users.users
});

const mapDispatchToProps = dispatch => bindActionCreators(Creators, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListUsers);
