import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';

import { REGISTER_ROOT_PATH } from 'Auth/routes/constants';
import TRANSLATIONS from './translations';
import { LoginFormSection, FormStyled, ButtonStyled } from './styled.components';

const LoginForm = ({ onClickLogin }) => {
  const [loginValues, setLoginValues] = useState({
    email: 'user@emailebe92ec8-4e31-4ae1-8758-847d4ecf4f7b.com',
    password: 'password',
  });

  const onTextFieldChange = (name) => (event) => {
    setLoginValues({
      ...loginValues,
      [name]: event.target.value,
    });
  };

  const onSubmit = () => onClickLogin(loginValues);

  return (
    <Container component="main" maxWidth="xs">
      <LoginFormSection>
        <h3> HeavenPay </h3>
        <FormStyled>
          <TextField
            required
            fullWidth
            id="email"
            label={TRANSLATIONS.FORM.EMAIL}
            value={loginValues.email}
            variant="outlined"

            onChange={onTextFieldChange('email')} />
          <TextField
            required
            fullWidth
            id="password"
            label={TRANSLATIONS.FORM.PASSWORD}
            value={loginValues.password}
            variant="outlined"
            type="password"
            autoComplete="current-password"

            onChange={onTextFieldChange('password')} />
          <ButtonStyled
            type="submit"
            fullWidth
            variant="contained"
            color="primary"

            onClick={onSubmit}>
            {TRANSLATIONS.FORM.SUBMIT}
          </ButtonStyled>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href={REGISTER_ROOT_PATH} variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </FormStyled>
      </LoginFormSection>
    </Container>
  );
};

LoginForm.propTypes = {
  onClickLogin: PropTypes.func,
};

LoginForm.defaultProps = {
  onClickLogin: null,
};

export default LoginForm;
