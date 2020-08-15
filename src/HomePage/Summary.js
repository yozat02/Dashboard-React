import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {Sentiment} from "../Chart/Sentiment"
import {ShareofComment} from "../Chart/ShareofComment";
import {BuzzWords} from "../Chart/BuzzWords" ;

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: 20,
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
    },
    cercle : {
        width: 20,
        height: 20,
        borderRadius: 20,
        border :"1px solid",
        margin : 10
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
          <ShareofComment />
        </Grid>
        <Grid item xs={3}>
          <div style={{display:"flex",marginTop:60}}>
            <div className={classes.cercle}></div>
            <div className={classes.cercle}></div>
            <div className={classes.cercle}></div>
          </div>
        </Grid>
        <Grid item xs={4}>
          <BuzzWords />
        </Grid>
      </Grid>
        </div>
    
    </div>)
}