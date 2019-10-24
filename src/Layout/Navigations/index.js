import React from 'react';

// components
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import List from '@material-ui/core/List';

// styles
import { ToolbarSection } from './styled.components';

const Navigations = () => (
  <>
    <ToolbarSection />
    <List>
      <ListItem button key="Menu A">
        <ListItemIcon><InboxIcon /></ListItemIcon>
        <ListItemText primary="Menu A" />
      </ListItem>

      <ListItem button key="Menu B">
        <ListItemIcon><MailIcon /></ListItemIcon>
        <ListItemText primary="Menu B" />
      </ListItem>
    </List>
    <Divider />
  </>
);

export default Navigations;
