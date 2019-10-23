import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  fetch as fetchUserCollection,
} from 'Dashboard/state/actions/users/collection';
import {
  fetch as fetchUser,
} from 'Dashboard/state/actions/users/single';
import { generateEntryData as generateEntryDataCollection } from 'Dashboard/state/reducers/users/collection';
import { generateEntryData as generateEntryDataSingle } from 'Dashboard/state/reducers/users/single';

import UserList from 'Dashboard/components/UserList';

const COMPONENT_ID = 'DASHBOARD__PAGE';

class CompanyDashboard extends Component {
  constructor() {
    super();

    this.state = {
      selectedUserId: 1,
    };
  }

  componentDidMount() {
    const { componentId } = this.props;
    const { selectedUserId } = this.state;

    this.props.fetchUserCollection({ componentId });
    this.props.fetchUser({ userId: selectedUserId });
  }

  userData = (isCollection = false) => {
    const { selectedUserId } = this.state;
    const {
      componentId,
      users,
    } = this.props;

    if (isCollection) {
      return users.collection[componentId] || generateEntryDataCollection();
    }

    return users.single[selectedUserId] || generateEntryDataSingle();
  }

  render() {
    const { data: userList } = this.userData(true);
    const { data: selectedUser } = this.userData();

    return (
      <div>
        <h1>Company Dashboard</h1>
        <div>
          <h4> Single Collection </h4>
          <div>{`${selectedUser.id} - ${selectedUser.name}`}</div>
        </div>
        <div>
          <h4>User Collections</h4>
          <UserList users={userList} />
        </div>
      </div>
    );
  }
}

CompanyDashboard.propTypes = {
  componentId: PropTypes.string,

  users: PropTypes.shape().isRequired,

  fetchUserCollection: PropTypes.func.isRequired,
  fetchUser: PropTypes.func.isRequired,
};

CompanyDashboard.defaultProps = {
  componentId: COMPONENT_ID,
};

const mapStateToProps = ({
  dashboard: { users },
}) => ({
  users,
});

const mapDispatchToProps = {
  fetchUserCollection,
  fetchUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(CompanyDashboard);
