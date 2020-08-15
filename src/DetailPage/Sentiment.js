import React from 'react' ;
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  LineSeries,
  SplineSeries,
} from '@devexpress/dx-react-chart-material-ui';
import Calendar from 'react-calendar';


const useStyles = makeStyles((theme) => ({
    root: {
        width:600
    },
    rootGrid: {
        padding: 20,
        height:240   
       },
    productBuzz: {
        border: "1px solid",
    }, 
    
  }));
export const Sentiment =() => {
        const classes = useStyles();
        const generateData = (start, end, step) => {
            const data = [];
            for (let i = start; i < end; i += step) {
              data.push({ splineValue: Math.sin(i) / i, lineValue: ((i / 15) ** 2.718) - 0.2, argument: i });
            }
          
            return data;
          };
          
    return(
        <div className={classes.root}>
            <h5>Sentiments</h5>
        <div className={classes.productBuzz}>
        <div className={classes.rootGrid}>
        <Paper style={{backgroundColor:"#00c853",backgroundImage:"linear-gradient(green,green,green,green,green,red,red,red,red, red)",width:300}}>
        <Chart
          data={generateData(2.5, 12, 0.5)}
          height={150}
          
        >
          <SplineSeries
            valueField="splineValue"
            argumentField="argument"
          />
        </Chart>
      </Paper>
      <div style={{float:"right",marginTop:-150,marginLeft:350}}>
      <Calendar
          value={new Date()}
        />
      </div>
        </div>
        </div>
        </div>
    )
}