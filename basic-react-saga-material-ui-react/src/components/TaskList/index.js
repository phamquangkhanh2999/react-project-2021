import { withStyles } from '@material-ui/styles';
import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import style from './style';

import TaskItem from '../TaskItem';

class TaskList extends Component {
  render() {
    const { classes, tasks, status } = this.props;
    return (
      <Grid item xs={12} md={4} key={status.value}>
        <Box mt={1} mb={1}>
          <div className={classes.status}> {status.label}</div>
        </Box>
        <div className={classes.wrapperListTask}>
          {tasks.map((task, index) => (
            <TaskItem task={task} status={status} key={index} />
          ))}
        </div>
      </Grid>
    );
  }
}

export default withStyles(style)(TaskList);
