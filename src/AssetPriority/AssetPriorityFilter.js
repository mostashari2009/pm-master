import * as React from "react";
import {
    Filter,
    TextInput
}
from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    width: { width: 205 }
});

const AssetPriorityFilter = (props) => {
    const classes = useStyles();
    return (
    <Filter {...props}>
        <TextInput className={classes.width} label="کد اولویت" textAlgin="right" source="AssetPriorityCode__icontains" alwaysOn resettable/>
        <TextInput className={classes.width} label="نام اولویت" textAlgin="right" source="AssetPriorityName__icontains" alwaysOn resettable/>
        <TextInput className={classes.width} label="مقدار" textAlgin="right" source="AssetPriorityValue__icontains" alwaysOn resettable/>
    </Filter>
);
    };


export default AssetPriorityFilter;
