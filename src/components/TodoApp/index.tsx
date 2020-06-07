// Dependencies
import React from 'react';
import { observer } from 'mobx-react';

// Components
import Users from '../Users';
import Tasks from '../Tasks';

// Hooks
import * as Hooks from '../../hooks';

// Styles
import useStyles from './styles';

/**
 * The todo app container.
 * @returs The todo app component.
 */
export function TodoApp(): React.ReactElement {
  const store = Hooks.useFetchStore();
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <div className={classes.users}>
        <Users
          loading={store.loading}
          data={store.data}
          addUser={store.addUser}
          selectedUser={store.selectedUser}
        />
      </div>
      <div className={classes.tasks}>
        {
          store.selectedUser && (
            <Tasks
              taskOwner={store.selectedUser}
              data={store.selectedUser.tasks.data}
              loading={store.selectedUser.tasks.loading}
              addTask={store.selectedUser.tasks.add}
            />
          )
        }
      </div>
    </main >
  );
}

export default observer(TodoApp)
