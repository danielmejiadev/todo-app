// Dependencies
import { makeStyles, Theme } from '@material-ui/core';

/**
 * The styles for component.
 */
const useStyles = makeStyles((theme: Theme) => ({
  content: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
  },
  users: {
    flex: 1,
    padding: 20,
    borderWidth: 2,
    borderColor: 'gray',
  },
  tasks: {
    flex: 3,
    padding: 20,
  }
}));

export default useStyles;
