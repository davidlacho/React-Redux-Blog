import React from 'react';
import { connect } from 'react-redux';

class UserHeader extends React.Component {
  render() {
    const { user } = this.props;
    return user ? <div className="header">{user.name}</div> : null;
  }
}

const mapStateToProps = (state, ownProps) => {
  return { user: state.users.find(u => u.id === ownProps.userId) };
};

export default connect(mapStateToProps)(UserHeader);
