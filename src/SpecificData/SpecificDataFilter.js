import * as React from "react";
import {
    TextInput,
    Filter
}
from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    width: { width: 205 }
});

const SpecificDataFilter = (props) =>{
    const classes = useStyles();
    return (
    <Filter {...props}>
        <TextInput className={classes.width} source="SpecificDataCode__icontains" label="کد ویژگی" textAlgin="right" alwaysOn resettable />
        <TextInput className={classes.width} source="SpecificDataName__icontains" label="نام ویژگی" textAlgin="right" textAlgin="right" alwaysOn resettable />
        <TextInput className={classes.width} source="Measurment__icontains" label="واحد اندازه گیری" alwaysOn resettable />
    </Filter>
);
};


export default SpecificDataFilter;
