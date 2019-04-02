import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    marginTop: '5rem',
  }
});

function MyButton(props) {
  const { classes } = props;
  return (
    <Button onClick={props.action} size='small' variant="contained" color="primary" className={classes.button}>
      {props.name}
    </Button>
  );
}

MyButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MyButton);