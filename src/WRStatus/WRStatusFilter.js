import * as React from "react";
import {
    Filter,
    TextInput
}
from 'react-admin';
import { TimeInput } from '../Components/TimeInput';
import { DateInput } from '../Components/JalaliDatePicker';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    width: { width: '200px !important' }
});

const WRStatusFilter = (props) => {
    const classes = useStyles();
    return (
    <Filter {...props}>
        <TextInput className={classes.width} label="کد وضعیت" textAlgin="right" source="StatusID__StatusCode__icontains" alwaysOn resettable/>
        <TextInput className={classes.width} label="نام وضعیت" textAlgin="right" source="StatusID__StatusName__icontains" alwaysOn resettable/>
        <DateInput className={classes.width} label="تاریخ ثبت" source="StatusDate" alwaysOn resettable/>
        <TimeInput className={classes.width} label="ساعت ثبت" textAlgin="right" source="StatusTime" alwaysOn resettable/>
    </Filter>
);
};


export default WRStatusFilter;
