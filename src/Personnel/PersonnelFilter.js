import * as React from "react";
import {
    Filter,
    TextInput,
}
from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    width: { width: 150 },
});

const PersonnelFilter = (props) => {
    const classes = useStyles();
    return(
    <Filter {...props}>
        <TextInput className={classes.width} label="کد پرسنلی" textAlgin="right" source="PersonnelCode" alwaysOn resettable/>
        <TextInput className={classes.width} label="کد نت" textAlgin="right" source="PersonnelNetCode" alwaysOn resettable/>
        <TextInput className={classes.width} label="نام" textAlgin="right" source="PersonnelName" alwaysOn resettable/>
        <TextInput className={classes.width} label="نام‌خانوادگی" textAlgin="right" source="PersonnelFamily" alwaysOn resettable/>
        <TextInput className={classes.width} label="دپارتمان" textAlgin="right" source="DepartmentID__DepartmentName" alwaysOn resettable/>
    </Filter>
);
    };


export default PersonnelFilter;
