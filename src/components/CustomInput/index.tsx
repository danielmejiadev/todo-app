// Dependencies
import React from 'react';
import AddCircle from '@material-ui/icons/AddCircle';
import { InputBase, Paper, IconButton, Divider } from '@material-ui/core';

// Styles
import useStyles from './styles';

/**
 * The properties definition for {@link CustomInput}
 */
export interface CustomInputProps {
  /**
   * Callback to execute on input button press.
   */
  onClick: (inputValue: string) => Promise<void> | void;

  /**
   * The placeholder for input field.
   */
  placeholder: string;
}

/**
 * Custom input component to manage a field.
 * @param props The properties of component.
 * @returns The custom component.
 */
export function CustomInput(props: CustomInputProps): React.ReactElement {
  const { onClick, placeholder } = props;
  const classes = useStyles();

  const [inputValue, setValue] = React.useState('');
  const onChange = React.useCallback((event) => {
    const { target } = event;
    setValue(target.value);
  }, [])
  const onAddClick = React.useCallback(async () => {
    await onClick(inputValue);
    setValue('')
  }, [onClick, inputValue]);

  return (
    <Paper component="form" className={classes.root} elevation={3} >
      <InputBase
        id="input"
        className={classes.input}
        placeholder={placeholder}
        onChange={onChange}
        value={inputValue}
      />
      <Divider className={classes.divider} orientation="vertical" />
      <IconButton
        color="primary"
        className={classes.iconButton}
        onClick={onAddClick}
        disabled={!inputValue}
      >
        <AddCircle />
      </IconButton>
    </Paper>
  );
}

export default React.memo(CustomInput);