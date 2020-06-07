// Dependencies
import React, { ReactElement } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

// Api Client
import ApiClient from './apiClient';
import config from './config';

// Components
import StoreProvider from './components/StoreProvider';
import TodoApp from './components/TodoApp';

// Styles
import useStyles from './styles';

// Api Client initialization
ApiClient.initialize(config.BASE_API)

/**
 * Root application component.
 * @returns The root aplication.
 */
export function App(): ReactElement {
  const classes = useStyles();

  return (
    <StoreProvider>
      <div className={classes.root}>
        <AppBar>
          <Toolbar>
            <Typography variant="h6">Todo App</Typography>
          </Toolbar>
        </AppBar>
        <main className={classes.mainContainer}>
          <div className={classes.toolbar} />
          <TodoApp />
        </main>
      </div>
    </StoreProvider>
  );
}

export default App;
