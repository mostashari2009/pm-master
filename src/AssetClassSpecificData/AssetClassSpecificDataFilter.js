import * as React from "react";
import {
    ReferenceInput,
    SelectInput,
    Filter,
    TextInput
}
from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    width: { width: 220 }
});

const AssetClassSpecificDataFilter = (props) => {
    const classes = useStyles();
    return (
    <Filter {...props}>
        <TextInput className={classes.width} source="SpecificDataID__SpecificDataName__icontains" label="نام ویژگی" textAlgin="right" alwaysOn resettable />
        <TextInput className={classes.width} source="SpecificDataID__SpecificDataCode__icontains" label="کد ویژگی" textAlgin="right" alwaysOn resettable />
        <TextInput className={classes.width} source="SpecificDataID__Measurment__icontains" label="واحد اندازه‌گیری" textAlgin="right" alwaysOn resettable />
    </Filter>
);
    };


export default AssetClassSpecificDataFilter;
