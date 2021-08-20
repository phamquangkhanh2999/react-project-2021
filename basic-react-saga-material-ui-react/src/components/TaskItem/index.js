import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Fab from '@material-ui/core/Fab';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { withStyles } from '@material-ui/styles';
import React, { Component } from 'react';
import style from './style';

class TaskItem extends Component {
  render() {
    const { classes, task, status } = this.props;
    return (
      <Card key={task.id} className={classes.card}>
        <CardContent>
          <Grid container justifyContent='space-between'>
            <Grid item md={8}>
              <Typography component='h2'>{task.title}</Typography>
            </Grid>
            <Grid item md={4}>
              {status.label}
            </Grid>
          </Grid>
        </CardContent>
        <p>{task.desc}</p>
        <CardActions className={classes.cardActions}>
          <Fab
            color='primary'
            aria-label='Edit'
            size='small'
            className={classes.fab}
          >
            <EditIcon />
          </Fab>
          <Fab
            color='primary'
            aria-label='Delete'
            size='small'
            className={classes.fab}
          >
            <DeleteIcon />
          </Fab>
        </CardActions>
      </Card>
    );
  }
}

export default withStyles(style)(TaskItem);
