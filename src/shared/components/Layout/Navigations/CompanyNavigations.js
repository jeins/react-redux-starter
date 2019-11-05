import React from 'react';
import { Link } from 'react-router-dom';

// constants
import {
  COMPANY_ROOT_PATH,
  COMPANY_DASHBOARD_EMPLOYEES,
} from 'Dashboard/routes/constants';

// components

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

const NavItem = ({ to, icon, text }) => (
  <ListItem
    button
    component={props => (<Link to={to} {...props} />)}>
    <ListItemIcon>{icon}</ListItemIcon>
    <ListItemText primary={text} />
  </ListItem>
);

const CompanyNavigations = () => (
  <List>
    <NavItem
      to={COMPANY_ROOT_PATH}
      icon={(<InboxIcon />)}
      text="Home" />

    <NavItem
      to={COMPANY_DASHBOARD_EMPLOYEES}
      icon={(<MailIcon />)}
      text="Employee List" />
  </List>
);

export default CompanyNavigations;
