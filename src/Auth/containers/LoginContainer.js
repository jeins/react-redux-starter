import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';
import { connect } from 'react-redux';

import { login as loginAction } from 'Auth/state/actions/users/single';
import { generateEntryData } from 'Auth/state/reducers/users/single';


import LoginForm from 'Auth/components/LoginForm';
import LoadingOverlay from 'shared/components/LoadingOverlay';

const COMPONENT_ID = 'AUTH_PAGE';

class LoginContainer extends Component {
  onClickLogin = ({ email, password }) => {
    const { componentId, loginAction } = this.props;

    loginAction({
      componentId,
      email,
      password,
    });
  }

  get authData() {
    const { componentId, authProps } = this.props;
    return isEmpty(authProps) || isEmpty(authProps[componentId])
      ? generateEntryData() : authProps[componentId];
  }

  render() {
    return (
      <LoadingOverlay loading={this.authData.fetching}>
        <LoginForm
          onClickLogin={this.onClickLogin} />
      </LoadingOverlay>
    );
  }
}

LoginContainer.propTypes = {
  componentId: PropTypes.string,

  authProps: PropTypes.shape().isRequired,
  loginAction: PropTypes.func.isRequired,
};

LoginContainer.defaultProps = {
  componentId: COMPONENT_ID,
};

const mapStateToProps = ({
  auth: {
    users: { single },
  },
}) => ({
  authProps: single,
});

const mapDispatchToProps = {
  loginAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
