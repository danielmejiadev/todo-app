// Dependencies
import React from 'react';
import { ListItem, ListItemSecondaryAction, IconButton, ListItemText, Divider, ListItemIcon } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/Save';
import CancelIcon from '@material-ui/icons/Cancel';
import TextField from '@material-ui/core/TextField';

// Hooks
import { useStateActions } from '../../hooks';

// Components
import Confirm from '../Confirm';

/**
 * The properties definition for {@link Item}
 */
export interface CrudItemProps {
  text: string;
  isSelected: boolean;
  onClick?: () => void;
  onDelete: () => void;
  onUpdate: (inputValue: string) => void;
  options?: React.ReactNode
  icon: React.ReactNode,
}

/**
 * A component to render a item row with crud operations.
 * @param props The properties of component.
 * @returns The component.
 */
export function CrudItem(props: CrudItemProps): React.ReactElement {
  const { text, onClick, onUpdate, onDelete, isSelected, options, icon } = props;
  const [showDelete, openDelete, closeDelete] = useStateActions();
  const [isEdit, changeToEdit, changeToRead] = useStateActions();
  const [inputValue, setName] = React.useState(text);

  const onChange = React.useCallback((event) => {
    const { target } = event;
    setName(target.value);
  }, []);

  const onDeleteUser = React.useCallback(() => {
    closeDelete();
    onDelete();
  }, [onDelete, closeDelete]);

  const onUpdateUser = React.useCallback(() => {
    onUpdate(inputValue);
    changeToRead();
  }, [onUpdate, inputValue, changeToRead])

  return (
    <React.Fragment>
      {
        isEdit
          ? (
            <ListItem selected={isSelected}>
              <TextField
                autoFocus
                margin="dense"
                label="New value"
                fullWidth
                value={inputValue}
                onChange={onChange}
              />
              <ListItemSecondaryAction>
                <IconButton aria-label="save" onClick={onUpdateUser}>
                  <SaveIcon />
                </IconButton>
                <IconButton aria-label="read" onClick={changeToRead}>
                  <CancelIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ) : (
            <ListItem button onClick={onClick} selected={isSelected}>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={text} />
              <ListItemSecondaryAction>
                {options}
                <IconButton aria-label="edit" onClick={changeToEdit}>
                  <EditIcon />
                </IconButton>
                <IconButton aria-label="delete" onClick={openDelete}>
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          )
      }
      <Divider />
      <Confirm open={showDelete} onClose={closeDelete} onConfirm={onDeleteUser} />
    </React.Fragment>
  );
}

/**
 * Default props of component.
 */
CrudItem.defaultProps = {
  isSelected: false,
};

export default React.memo(CrudItem);