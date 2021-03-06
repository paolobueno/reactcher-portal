import * as React from 'react';
import JssProvider from 'react-jss/lib/JssProvider';
import { withStyles, MuiThemeProvider, StyleRulesCallback } from 'material-ui/styles';
import { wrapDisplayName } from 'recompose';
import createContext from '../styles/createContext';

const styles: StyleRulesCallback = theme => ({
  '@global': {
    html: {
      background: theme.palette.background.default,
      WebkitFontSmoothing: 'antialiased', // Antialiasing.
      MozOsxFontSmoothing: 'grayscale', // Antialiasing.
    },
    body: {
      margin: 0
    }
  }
});

// Apply some reset
const decorate = withStyles(styles);

const AppWrapper = decorate<{ children: JSX.Element }>(props => props.children);

const context = createContext();

function withRoot(BaseComponent: React.ComponentType) {
  class WithRoot extends React.Component {
    componentDidMount() {
      // Remove the server-side injected CSS.
      const jssStyles = document.querySelector('#jss-server-side');
      if (jssStyles && jssStyles.parentNode) {
        jssStyles.parentNode.removeChild(jssStyles);
      }
    }

    render() {
      return (
        <JssProvider registry={context.sheetsRegistry} jss={context.jss}>
          <MuiThemeProvider theme={context.theme} sheetsManager={context.sheetsManager}>
            <AppWrapper>
              <BaseComponent />
            </AppWrapper>
          </MuiThemeProvider>
        </JssProvider>
      );
    }
  }

  if (process.env.NODE_ENV !== 'production') {
    (WithRoot as React.ComponentClass).displayName = wrapDisplayName(BaseComponent, 'withRoot');
  }

  return WithRoot;
}

export default withRoot;
