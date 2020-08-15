import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    paper1: {
        padding: theme.spacing(1),
        textAlign: 'center',
        padding: 40,
        color:"#ffffff",
        backgroundColor: "#00c853"
      },
      paper2: {
        padding: theme.spacing(1),
        textAlign: 'center',
        padding: 40,
        color:"#ffffff",
        backgroundColor: "#ff5722"
      },
      paper3: {
        padding: theme.spacing(1),
        textAlign: 'center',
        padding: 40,
        color:"#ffffff",
        backgroundColor: "#b71c1c"
      },
  }));

  export const Product = ({name,polarity}) => {
    const classes = useStyles();
    return (<div>
        {polarity=="positive" && <Paper className={classes.paper1}>{name}</Paper>}
        {polarity=="neutral" && <Paper className={classes.paper2}>{name}</Paper>}
        {polarity=="negative" && <Paper className={classes.paper3}>{name}</Paper>}

    </div>)
    
  }