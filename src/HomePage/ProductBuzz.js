import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { deepOrange, deepPurple } from '@material-ui/core/colors';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {Product} from './Product'
import products from '../products.json' ;
const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: 40,
        marginLeft:90,
        marginRight:90
    },
    rootGrid: {
        flexGrow: 1,
        padding: 50
      },
    productBuzz: {
        border: "1px solid",
    }, 
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
  
export const ProductBuzz = () => {
    const classes = useStyles();
    console.log(products)
    function FormRow({num}) {
        return (
          <React.Fragment>
            {products.map(product => (
                <Grid item xs={2}>
                <Product name={product.name} polarity={product.polarity}/>
              </Grid>
            ))}
          </React.Fragment>
        );
      } 


    return (
    <div className={classes.root}>
        <h5>Product Buzz</h5>
        <div className={classes.productBuzz}>
        <div className={classes.rootGrid}>
            <Grid container spacing={3}>
                <Grid container item xs={12} spacing={3}>
                <FormRow num={0} />
                </Grid>
            </Grid>
    </div>
        </div>
    
    </div>)
}