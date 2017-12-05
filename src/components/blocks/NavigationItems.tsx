import * as React from 'react';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import AutoRenew from 'material-ui-icons/Autorenew';
import Assignment from 'material-ui-icons/Assignment';
const NavigationItems = () => {
  return (
    <List>
      <ListItem button={true}>
        <ListItemIcon>
          <Assignment />
        </ListItemIcon>
        <ListItemText primary="Workorders" />
      </ListItem>
      <Divider />
      <ListItem button={true}>
        <ListItemIcon>
          <AutoRenew />
        </ListItemIcon>
        <ListItemText primary="Workflows" />
      </ListItem>
    </List>
  );
};

export default NavigationItems;