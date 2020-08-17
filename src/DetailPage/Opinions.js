import React from 'react';
import { makeStyles } from '@material-ui/core/styles';



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
export const Opinions =() => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <h5>Opinions</h5>
        <div className={classes.productBuzz}>
        <div className={classes.rootGrid}>
        <div style={{marginTop:0,marginLeft:70}}>
            <div style={{display: "flex",marginTop:20}} >
                <p style={{color:"#00c853",fontSize:24,fontWeight : "bold"}}>Buzz Words</p>
                <p style={{color:"#00c853",fontSize:13,marginLeft:50}}>Buzz Words</p>
            </div>
            <div style={{display: "flex",margin : -10}} >
                <p style={{color:"#00c853",fontSize:19,fontWeight : "bold",marginLeft:100}}>Buzz Words</p>
                <p style={{color:"#00c853",fontSize:10,marginLeft:20,marginTop:15}}>Buzz Words</p>
            </div>
            <div style={{display: "flex",margin : -10}} >
                <p style={{color:"#00c853",fontSize:19,fontWeight : "bold",marginLeft:20}}>Buzz Words</p>
                <p style={{color:"#b71c1c",fontSize:25,marginLeft:20,marginTop:-5}}>Buzz Words</p>
            </div>
        </div>
        <div style={{width:5,backgroundColor:"#e0e0e0",height:130,marginLeft:370,marginTop:-120}}></div>
        <div style={{float:"right" ,marginRight:180,marginTop:-130}}>
            <p style={{fontWeight:"bold"}}>Top 10 Opinions</p>
            <p>-Op1 ..</p>
            <p>-Op2 ..</p>
            <p>Op3 ..</p>
        </div>

        </div>
        </div>
        </div>
    )
}

