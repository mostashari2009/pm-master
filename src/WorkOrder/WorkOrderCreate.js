import * as React from "react";
import {
    SimpleForm,
    TextInput,
    Create,
    Toolbar,
    ReferenceInput,
    SelectInput
}
from 'react-admin';
import { parse } from 'query-string';
import { DateInput } from '../Components/JalaliDatePicker';
import { DateInputtoday } from '../Components/JalaliDatePickertoday';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import DepartmentRefrenceInput from './DepartmentRefrenceInput';

const useStyles = makeStyles({
    fir: { display: 'inline-block', verticalAlign: 'top' },
    sec: { display: 'inline-block' },
    width: { width: 533, '& label': {marginRight: '25px'} },
    last: { display: 'inline-block', marginRight: 0 },
    sel: { '& svg': {display: 'none' }},
});

const WorkRequestformat  = v => {
    let str = v ? `${v}` : '';
    str = str.padStart(4,0);
    let text = "WR0".concat(str);
    return text;
};

const Separator = () => <Box pt="0em" />;

const validateError = (values) => {
    const errors = {};
    if (!values.DateOfPlanStart) {
        errors.DateOfPlanStart = 'تاریخ را وارد کنید';
    }
    return errors
};

const WorkOrderCreate = props => {
    var today = new Date();
    const classes = useStyles();

    const type = 0;

    const { WorkRequestID: WorkRequestID_string } = parse(props.location.search);
    const WorkRequestID = WorkRequestID_string ? parseInt(WorkRequestID_string, 10) : '';
    
    return (
    <Create {...props} title="ایجاد دستور کار">
        <SimpleForm validate={validateError} redirect="show" initialValues={{ WODateOfRegistration: today, WorkOrderType: type, WorkRequestID}} toolbar={<Toolbar alwaysEnableSaveButton />}>
            <TextInput formClassName={classes.fir} disabled label="کد درخواست‌کار" source="WorkRequestID" format={WorkRequestformat}/>
            <DateInputtoday formClassName={classes.sec} label="تاریخ ثبت" source="WODateOfRegistration" disabled/>
            <Separator/>
            <DateInput formClassName={classes.fir} label="تاریخ شروع" source="DateOfPlanStart" />
            <DateInput formClassName={classes.sec} label="تاریخ پایان" source="DateOfPlanFinish" />
            <Separator/>
            <ReferenceInput className={classes.sel} disabled formClassName={classes.fir} label="کد دپارتمان" textAlgin="right" source="DepartmentID" reference="PMWorks/Department">
                <SelectInput optionText="DepartmentCode" />
            </ReferenceInput>
            <DepartmentRefrenceInput className={classes.sel} formClassName={classes.sec} label="نام دپارتمان" textAlgin="right" source="DepartmentID" reference="PMWorks/Department" perPage={10000} />
            <Separator/>
            <TextInput formClassName={classes.fir} multiline className={classes.width} label="توضیحات" textAlgin="right" source="WODescription"/>
        </SimpleForm>
    </Create>
);
};


export default WorkOrderCreate;
