import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Chart,
    BarSeries,
  } from '@devexpress/dx-react-chart-material-ui';
import Paper from '@material-ui/core/Paper';



const useStyles = makeStyles((theme) => ({
    root: {
        width:600
    },
    rootGrid: {
        padding: 10,
        height:160   
       },
    productBuzz: {
        border: "1px solid",
    }, 
    
  }));
export const Itentions =() => {
    const classes = useStyles();
    const data = [
        { year: '1950', population: 7.525 },
        { year: '1960', population: 0 },
        { year: '1970', population: 3.682 },
        { year: '1980', population: 0 },
        { year: '1990', population: 6.310 },
        { year: '2000', population: 0 },
        { year: '2010', population: 6.930 },
      ];
    return (
        <div className={classes.root}>
            <h5>Opinions</h5>
        <div className={classes.productBuzz}>
        <div className={classes.rootGrid}>
        
        <Paper>
        <Chart
          data={data}
          height={130}
        >

          <BarSeries
            valueField="population"
            argumentField="year"
          />
        </Chart>
      </Paper>
        </div>
        </div>
        </div>
    )
}

