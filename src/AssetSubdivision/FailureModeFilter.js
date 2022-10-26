import * as React from "react";
import {
    Filter,
    TextInput,
}
from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    width: { width: 250 },
});

const  FailureModeFilter = (props) => {
    const classes = useStyles();
    return(
    <Filter {...props}>
        <TextInput className={classes.width} label="کد خرابی" textAlgin="right" source="FailureModeID__FailureModeCode__icontains" alwaysOn resettable />
        <TextInput className={classes.width} label="نام خرابی" textAlgin="right" source="FailureModeID__FailureModeName__icontains" alwaysOn resettable />
    </Filter>
);
};


export default  FailureModeFilter;