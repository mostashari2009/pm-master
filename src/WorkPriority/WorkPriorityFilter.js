import * as React from "react";
import {
    Filter,
    TextInput,
    NumberInput
}
from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    width: { width: 205 }
});

const WorkPriorityFilter = (props) => {
    const classes = useStyles();
    return (
    <Filter {...props}>
        <TextInput className={classes.width} label="کد اولویت" textAlgin="right" source="WorkPriorityCode__icontains" alwaysOn resettable/>
        <TextInput className={classes.width} label="نام اولویت" textAlgin="right" source="WorkPriorityName__icontains" alwaysOn resettable/>
        <NumberInput className={classes.width} label="مقدار اولویت" textAlgin="right" source="WorkPriorityValue__icontains" alwaysOn resettable/>
    </Filter>
);
};


export default WorkPriorityFilter;
