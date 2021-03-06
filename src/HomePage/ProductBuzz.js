import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {Product} from './Product'
import products from '../products.json' ;
const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: 20,
        marginLeft:90,
        marginRight:90
    },
    rootGrid: {
        flexGrow: 1,
        padding: 40
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
      select: {
        marginTop : -40,
        float: "right",
        marginRight:-20
      }
  }));
  
export const ProductBuzz = ({history}) => {
    const classes = useStyles();
    //console.log(products)
    function FormRow({num}) {
        return (
          <React.Fragment>
            {products.map(product => (
                <Grid key={product.name} item xs={2} >
                <Product name={product.name} polarity={product.polarity} history={history} />
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
          <p className={classes.select}>Select (last week, month, quarter, year... )</p>
            <Grid container spacing={3}>
                <Grid container item xs={12} spacing={3}>
                <FormRow num={0} />
                </Grid>
            </Grid>
    </div>
        </div>
    
    </div>)
}