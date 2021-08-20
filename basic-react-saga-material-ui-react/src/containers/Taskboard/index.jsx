import { Box, Button, withStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import AddIcon from '@material-ui/icons/Add';
import React, { Component } from 'react';
import TaskForm from '../../components/TaskForm';
import TaskList from '../../components/TaskList';
import { STATUS } from '../../constants';
import styles from './style';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as taskActions from '../../actions/task';

class Taskboard extends Component {
  state = {
    open: false,
  };

  // componentDidMount
  componentDidMount() {
    const { taskActionsCreators } = this.props;
    const { fetchListTaskRequest } = taskActionsCreators;
    fetchListTaskRequest();
  }
  renderBoard() {
    let xhmtl = null;
    const { listTask } = this.props;
    xhmtl = (
      <Grid container spacing={2}>
        {STATUS.map((status) => {
          const taskFilter = listTask.filter(
            (task) => task.status === status.value
          );
          return (
            <TaskList tasks={taskFilter} status={status} key={status.value} />
          );
        })}
      </Grid>
    );
    return xhmtl;
  }

  // handleClose
  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  //openForm
  openForm = () => {
    this.setState({
      open: true,
    });
  };

  // renderForm
  renderForm() {
    const { open } = this.state;
    let xhmtl = null;
    xhmtl = <TaskForm open={open} onClose={this.handleClose} />;
    return xhmtl;
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.taskBoard}>
        <Button
          variant='contained'
          color='primary'
          className={classes.button}
          onClick={this.openForm}
        >
          <AddIcon /> Them moi cong viec
        </Button>

        {this.renderBoard()}
        {this.renderForm()}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    listTask: state.task.listTask,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    taskActionsCreators: bindActionCreators(taskActions, dispatch),
  };
};

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(Taskboard)
);
