import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Chart,
    BarSeries,
  } from '@devexpress/dx-react-chart-material-ui';
import Paper from '@material-ui/core/Paper';



const useStyles = makeStyles((theme) => ({
    root: {
        width:800
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
        { key: '0', value: 0 },
        { key: '9', value: 0 },
        { key: '1', value: 7.525 },
        { key: '2', value: 0 },
        { key: '222', value: 0 },
        { key: '12', value: 0 },
        { key: '21', value: 0 },
        { key: '3', value: 3.682 },
        { key: '42', value: 0 },
        { key: '22', value: 0 },
        { key: '521', value: 0 },
        { key: '442', value: 0 },
        { key: '232', value: 0 },
        { key: '21', value: 0 },
        { key: '5', value: 6.310 },
        { key: '6', value: 0 },
        { key: '423', value: 0 },
        { key: '232', value: 0 },
        { key: '231', value: 0 },
        { key: '7', value: 6.930 },
        
      ];
    return (
        <div className={classes.root}>
            <h5>Itentions</h5>
        <div className={classes.productBuzz}>
        <div className={classes.rootGrid}>
        
        <Paper>
        <Chart
          data={data}
          height={130}
          width={600}
        >

          <BarSeries
            valueField="value"
            argumentField="key"
          />
        </Chart>
      </Paper>
        </div>
        </div>
        </div>
    )
}

