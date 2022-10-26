import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Sidebar } from 'react-admin';

const useStyles=makeStyles({
    Sidebar:{
        backgroundColor:'#ffffff',
    }
})

const MySidebar = props => {

    const classes = useStyles();

    return (
        <Sidebar classes={classes} {...props} />
    );
};

export default MySidebar;