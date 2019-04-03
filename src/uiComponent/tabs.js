import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const styles = {
  root: {
    flexGrow: 1,
    maxWidth: '100%',
  },
};

class IconTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
};

  render() {
    const { classes } = this.props;

    return (
      <Paper square className={classes.root}>
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          variant="fullWidth"
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab onClick={this.props.clockTab} icon={<i className="material-icons">schedule</i>} />
          <Tab onClick={this.props.stopwatchTab} icon={<i className="material-icons">watch</i>} />
          <Tab onClick={this.props.alarmTab} icon={<i className="material-icons">alarm</i>} />
        </Tabs>
      </Paper>
    );
  }
}

IconTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(IconTabs);