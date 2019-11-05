import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { isEmpty } from 'lodash';
import { push } from 'connected-react-router';

// redux
import { register as registerAction } from 'Auth/state/actions/users/single';
import { generateEntryData } from 'Auth/state/reducers/users/single';

// components
import RegisterForm from 'Auth/components/RegisterForm';
import LoadingOverlay from 'shared/components/LoadingOverlay';

// constants
import { LOGIN_ROOT_PATH } from 'Auth/routes/constants';

const COMPONENT_ID = 'REGISTER_PAGE';
const RegisterContainer = ({
  componentId,

  authProps,
  registerAction,
}) => {
  const onClickRegister = ({
    companyName,
    email,
    password,
  }) => registerAction({
    componentId,
    data: {
      companyName,
      userEmail: email,
      userPassword: password,
    },
  });

  const authData = isEmpty(authProps[componentId])
    ? generateEntryData() : authProps[componentId];

  useEffect(() => {
    if (!authData.fetching && authData.isCreated) {
      push(LOGIN_ROOT_PATH);
    }
  });

  return (
    <LoadingOverlay loading={authData.fetching}>
      <RegisterForm onClickRegister={onClickRegister} />
    </LoadingOverlay>
  );
};

RegisterContainer.propTypes = {
  componentId: PropTypes.string,

  authProps: PropTypes.shape().isRequired,
  registerAction: PropTypes.func.isRequired,
};

RegisterContainer.defaultProps = {
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
  registerAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer);
