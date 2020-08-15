import React from 'react' ;
import {Doughnut} from 'react-chartjs-2';




export const ShareofComment = () => {
    const data = {
        datasets: [{
            data: [300, 50, 80],
            backgroundColor: [
            '#3949ab',
            '#f06292',
            '#4a148c'
            ]
        }]
    };
    return (
        <div style={{marginTop:0}}>
            <h4 style={{fontWeight : "bold",marginLeft:60}}>Share of Comments</h4>
            <Doughnut data={data} height={120} />
        </div>
    )
}