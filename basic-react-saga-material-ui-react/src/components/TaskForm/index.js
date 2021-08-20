import { Button } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/styles';
import React, { Component } from 'react';
import style from './style';

class TaskForm extends Component {
  render() {
    const { open, classes, onClose } = this.props;
    return (
      <Dialog open={open} onClose={onClose} aria-labelledby='form-dialog-title'>
        <DialogTitle id='form-dialog-title'>Them moi cong viec</DialogTitle>
        <DialogContent>
          <TextField
            id='standard-name'
            label='Name'
            className={classes.textField}
            margin='normal'
          />
          <TextField
            id='standard-multiline-flexible'
            label='Multiline Placeholder'
            placeholder='Placeholder'
            margin='normal'
            multiline
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color='primary'>
            Cancel
          </Button>
          <Button onClick={onClose} color='primary'>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default withStyles(style)(TaskForm);
