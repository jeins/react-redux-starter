import React from 'react';
import PropTypes from 'prop-types';

const UserList = ({ users }) => (
  <div>
    <ul>
      {users.map((user) => (
        <li key={user.id}>{`${user.id} - ${user.name}`}</li>
      ))}
    </ul>
  </div>
);

UserList.propTypes = {
  users: PropTypes.array,
};

UserList.defaultProps = {
  users: [],
};

export default UserList;
