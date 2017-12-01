import * as React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

export default class Header extends React.Component {
  render() {
    return (
      <AppBar>
        <Toolbar>
          <Typography type="title" color="inherit">RainCatcher Portal</Typography>
        </Toolbar>
      </AppBar>
    );
  }
}