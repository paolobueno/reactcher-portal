import * as React from 'react';
import Grid from 'material-ui/Grid';

type Props = {
  left: React.ComponentType,
  right: React.ComponentType
};

class DualContainer extends React.Component<Props> {
  render() {
    const { left, right } = this.props;
    const Left = left;
    const Right = right;
    return (
      <Grid container={true} spacing={8}>
        <Grid item={true} xs={3}>
          <Left />
        </Grid>
        <Grid item={true} xs={5}>
          <Right />
        </Grid>
      </Grid>
    );
  }
}

export default DualContainer;