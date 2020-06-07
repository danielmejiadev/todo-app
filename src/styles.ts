// Dependencies
import { makeStyles } from '@material-ui/core/styles';

/**
 * The global app styles.
 */
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: theme.mixins.toolbar,
  mainContainer: {
    flex: 1,
  }
}));

export default useStyles;
