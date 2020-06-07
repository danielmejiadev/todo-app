// Dependencies
import React from 'react'
import { List, Typography, LinearProgress } from '@material-ui/core';
import { observer } from 'mobx-react';
import TaskIcon from '@material-ui/icons/Assignment';
import { Checkbox } from '@material-ui/core';

// Dto
import { ITask } from '../../store/tasks/task.store';
import { IUser } from '../../store/users/user.store';

// Components
import CrudItem from '../CrudItem';
import CustomInput from '../CustomInput';

/**
 * Properties definition for {@link Users}
 */
export interface TasksProps {
  /**
   * Callback to add a task.
   */
  addTask: (id: number, task: Partial<ITask>) => void;

  /**
   * Flag to indicate if loader is on progress.
   */
  loading: boolean;

  /**
   * The task owner.
   */
  taskOwner: IUser;

  /**
   * The task list.
   */
  data: ITask[]
}

/**
 * A component to render the users view.
 * @param props The properties of component.
 * @returns The component.
 */
export function Tasks(props: TasksProps): React.ReactElement {
  const { addTask, loading, data, taskOwner } = props;
  const onAddClick = React.useCallback((description) => addTask(taskOwner.id, { description }), [addTask, taskOwner]);

  return (
    <React.Fragment>
      <Typography variant="h4">Tasks</Typography>
      <CustomInput onClick={onAddClick} placeholder="Type task description" />
      {loading && <LinearProgress />}
      <List>
        {
          data.map((task: ITask) => (
            <CrudItem
              text={task.description}
              onUpdate={(description) => task.update({ description })}
              onDelete={task.remove}
              icon={<TaskIcon />}
              options={[
                <Checkbox
                  key='toggle'
                  checked={task.isDone}
                  onChange={task.toggle}
                  inputProps={{ 'aria-label': 'primary checkbox' }}
                />
              ]}
            />
          ))
        }
      </List>
    </React.Fragment>
  )
}

export default observer(Tasks);