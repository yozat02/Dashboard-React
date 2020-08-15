import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {Sentiment} from "../Chart/Sentiment"
const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: 40,
        marginLeft:90,
        marginRight:90
    },
    avatar: {
        float: "right",
        marginRight:20,
        marginTop:5
    },
    summaryTable: {
        border: "1px solid",
        padding:30
    }
  }));
export const Summary = () => {
    const classes = useStyles();
    return (
    <div className={classes.root}>
        <h5>Last 7 days Summary</h5>
        <div className={classes.summaryTable}>
        <Grid container spacing={3}>
        <Grid item xs={2}>
          <Sentiment />
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>xs</Paper>
        </Grid>
      </Grid>
        </div>
    
    </div>)
}