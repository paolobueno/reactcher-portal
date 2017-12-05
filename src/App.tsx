import * as React from 'react';
import Header from './components/blocks/Header';
import Navigation from './components/blocks/Navigation';
import DualContainer from './components/blocks/DualContainer';
import withRoot from './components/withRoot';
import { StyleRulesCallback, withStyles } from 'material-ui/styles';
import { WithStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';

const styles: StyleRulesCallback = theme => ({
  root: {
    width: '100%',
    minHeight: 430,
    marginTop: theme.spacing.unit * 3,
    zIndex: 1,
    overflow: 'hidden'
  }
});

class App extends React.Component<WithStyles<string>> {
  render() {
    const { classes } = this.props;
    const Lyrics = () => (
      <Paper
        style={{
          padding: '3em'
        }}
      >
        Now this is a story all about how<br />
        My life got flipped-turned upside down<br />
        And I'd like to take a minute<br />
        Just sit right there<br />
        I'll tell you how I became the prince of a town called Bel-Air<br />
        <br />
        In west Philadelphia born and raised<br />
        On the playground was where I spent most of my days<br />
        Chillin' out maxin' relaxin' all cool<br />
        And all shooting some b-ball outside of the school<br />
        When a couple of guys who were up to no good<br />
        Started making trouble in my neighborhood<br />
        I got in one little fight and my mom got scared<br />
        She said, "You're movin' with your auntie and uncle in Bel-Air."<br />
        <br />
        I begged and pleaded with her day after day<br />
        But she packed my suitcase and sent me on my way<br />
        She gave me a kiss and then she gave me my ticket.<br />
        I put my Walkman on and said, "I might as well kick it."<br />
        <br />
        First class, yo, this is bad<br />
        Drinking orange juice out of a champagne glass.<br />
        Is this what the people of Bel-Air living like?<br />
        Hmm, this might be alright.<br />
        <br />
        But wait I hear they're prissy, bourgeois, all that<br />
        Is this the type of place that they just send this cool cat?<br />
        I don't think so<br />
        I'll see when I get there<br />
        I hope they're prepared for the prince of Bel-Air<br />
        <br />
        Well, the plane landed and when I came out<br />
        There was a dude who looked like a cop standing there with my name out<br />
        I ain't trying to get arrested yet<br />
        I just got here<br />
        I sprang with the quickness like lightning, disappeared<br />
        <br />
        I whistled for a cab and when it came near<br />
        The license plate said "Fresh" and it had dice in the mirror<br />
        If anything I could say that this cab was rare<br />
        But I thought, "Nah, forget it."<br />
        – "Yo, home to Bel-Air."<br />
        <br />
        I pulled up to the house about 7 or 8<br />
        And I yelled to the cabbie, "Yo home smell ya later."<br />
        I looked at my kingdom<br />
        I was finally there<br />
        To sit on my throne as the Prince of Bel-Air<br />
      </Paper>
    );

    return (
      <div className={classes.root}>
        <Navigation header={Header}>
          <DualContainer left={Lyrics} right={Lyrics} />
        </Navigation>
      </div>
    );
  }
}

export default withRoot(withStyles(styles, { withTheme: true })<{}>(App));