// Dependencies
import React from 'react'
import { List, Typography, LinearProgress } from '@material-ui/core';
import { observer } from 'mobx-react';
import UserIcon from '@material-ui/icons/AccountCircle';

// Components
import CrudItem from '../CrudItem';
import CustomInput from '../CustomInput';

// Dto
import { IUser } from '../../store/users/user.store';

/**
 * Properties definition for {@link Users}
 */
export interface UsersProps {
  /**
   * Callback to add a user.
   */
  addUser: (user: Partial<IUser>) => void;

  /**
   * Flag to indicate if loader is on progress.
   */
  loading: boolean;

  /**
   * The selected user.
   */
  selectedUser?: IUser;

  /**
   * The users list.
   */
  data: IUser[]
}

/**
 * A component to render the users view.
 * @param props The properties of component.
 * @returns The component.
 */
export function Users(props: UsersProps): React.ReactElement {
  const { addUser, loading, selectedUser, data } = props;
  const onAddClick = React.useCallback((name) => addUser({ name }), [addUser]);

  return (
    <React.Fragment>
      <Typography variant="h4">Users</Typography>
      <CustomInput onClick={onAddClick} placeholder="Type user name" />
      {loading && <LinearProgress />}
      <List>
        {
          data.map((user: IUser) => (
            <CrudItem
              key={user.id}
              icon={<UserIcon />}
              text={user.name}
              onClick={user.select}
              isSelected={selectedUser?.id === user.id}
              onUpdate={(name: string) => user.update({ name })}
              onDelete={user.remove}
            />
          ))
        }
      </List>
    </React.Fragment>
  )
}

export default observer(Users);