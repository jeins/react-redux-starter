import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  fetch as fetchUserCollection,
} from 'Dashboard/state/actions/users/collection';
import { generateEntryData as generateEntryDataCollection } from 'Dashboard/state/reducers/users/collection';

import UserList from 'Dashboard/components/UserList';

const COMPONENT_ID = 'DASHBOARD__PAGE';

class CompanyDashboard extends Component {
  componentDidMount() {
    const { componentId } = this.props;

    this.props.fetchUserCollection({ componentId });
  }

  userData = () => {
    const {
      componentId,
      users,
    } = this.props;

    return users.collection[componentId] || generateEntryDataCollection();
  }

  render() {
    const { data: userList } = this.userData(true);

    return (
      <div>
        <h1>Company Dashboard</h1>
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
};

export default connect(mapStateToProps, mapDispatchToProps)(CompanyDashboard);
