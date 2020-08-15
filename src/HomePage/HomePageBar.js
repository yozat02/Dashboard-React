import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { deepOrange, deepPurple } from '@material-ui/core/colors';


const useStyles = makeStyles((theme) => ({
    avatar: {
        float: "right",
        marginRight:20,
        marginTop:5
    },
  }));
export const HomePageBar = ({user}) => {
    const classes = useStyles();
    const name = user.firstName.substring(0,1).toUpperCase()+user.lastName.substring(0,1).toUpperCase()
    return (
    <div style={{textAlign : "center",border: "1px solid",height:50}}>
        <img src={"https://thegooddatafactory.com/images/logo-footer.png"} style={{width: 110,margin : 10,float:"left"}} />
        <h4  style={{marginTop:15,display:"inline-block" }}>Dashboad</h4>
    <Avatar className={classes.avatar}>{name}</Avatar>
    </div>)
}