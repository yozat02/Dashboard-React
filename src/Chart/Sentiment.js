import React from 'react' ;
import {
  Chart,
  PieSeries,
} from '@devexpress/dx-react-chart-material-ui';
import { Palette } from '@devexpress/dx-react-chart';




export const Sentiment = () => {
    const data = [
        { country: 'Russia', area: 5 },
        { country: 'Canada', area: 20},
      ];
    
    return (
        <div style={{marginTop:0}}>
            <h4>Sentiments</h4>
            <h4 style={{textAlign: "center"}}>21</h4>
        <Chart
          data={data}
          height = "75"
          width = "75"
        >
        <Palette scheme={[
         "#00c853" ,
         "#ff5722",
         "#b71c1c"
          ]} />
          <PieSeries
            valueField="area"
            argumentField="country"
          />
        </Chart>
      
        </div>
    )
}