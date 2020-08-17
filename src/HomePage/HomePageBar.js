import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';


import Collapse from '@material-ui/core/Collapse';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';





const useStyles = makeStyles((theme) => ({
    avatar: {
        float: "right",
        marginRight:20,
        marginTop:5,
        cursor: "pointer"
    },
    root: {
        maxWidth: 125,
        float:"right",
        marginTop:50,
        marginRight:-60
      },
  }));
export const HomePageBar = ({user}) => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
    const name = user.firstName.substring(0,1).toUpperCase()+user.lastName.substring(0,1).toUpperCase()
    return (
    <div style={{textAlign : "center",border: "1px solid",height:50}}>
        <a href="/Dashboard-React">
        <img src={"https://thegooddatafactory.com/images/logo-footer.png"} style={{width: 110,margin : 10,float:"left"}} />
        </a>
        <h4  style={{marginTop:15,marginRight:120,display:"inline-block" }}>Dashboad</h4>
    <Avatar 
        className={clsx(classes.avatar,{
            [classes.expandOpen]: expanded,
          })}
        onClick={handleExpandClick}
        aria-expanded={expanded}
    >
        {name}
    </Avatar>
    <Card className={classes.root} >
    <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <h6>
            {user.firstName.charAt(0).toUpperCase() + user.firstName.slice(1)} {user.lastName.charAt(0).toUpperCase() + user.lastName.slice(1)} 
          </h6>
          <a href="/Dashboard-React/login">
            Logout
          </a>
        </CardContent>
      </Collapse>
      </Card>
    </div>)
}