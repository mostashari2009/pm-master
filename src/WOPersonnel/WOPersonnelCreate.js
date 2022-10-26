import * as React from "react";
import {
    SimpleForm,
    Toolbar,
    Create,
    required,
    NumberInput,
    ReferenceInput,
    SelectInput,
    useNotify,
    useRefresh,
    useRedirect
}
from 'react-admin';
import { parse } from 'query-string';
import PersonnelRefrenceInput from './PersonnelRefrenceInput';
import { DateInput } from '../Components/JalaliDatePicker';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

const useStyles = makeStyles({
    fir: { display: 'inline-block', verticalAlign: 'top' },
    sec: { display: 'inline-block' },
    width: { width: 533, '& label': {marginRight: '25px'}, '& svg': {display: 'none' } },
    last: { display: 'inline-block', marginRight: 0 },
    sel: { '& svg': {display: 'none' }}
});

const Separator = () => <Box pt="0em" />;

const validateError = (values) => {
    const errors = {};
    if (!values.PersonnelID) {
        errors.PersonnelID = 'نیروی انسانی را وارد کنید';
    }
    return errors
};

const WorkOrderFormat = ({ record }) => {
    let str = record ? `${record.WorkRequestID}` : '';
    str = str.padStart(4,0);
    let text = "WR0".concat(str);
    let stro = record ? `${record.id}` : '';
    stro = stro.padStart(4,0);
    let texto = "_WO0".concat(stro);
    return <span> {text} {texto} </span>;
};

const WOPersonnelCreate = props => {

    const classes = useStyles();
    const notify = useNotify();
    const refresh = useRefresh();
    const redirect = useRedirect();

    const { WOTaskID: WOTaskID_string } = parse(props.location.search);
    const WOTaskID = WOTaskID_string ? parseInt(WOTaskID_string, 10) : '';

    const onSuccess = () => {
        notify(`دیتا ذخیره شد`)
        redirect(`/PMWorks/WOPersonnel/create?WOTaskID=${WOTaskID}`);
        refresh();
    };

    return (
    <Create onSuccess={onSuccess} {...props} title="ایجاد نیروی انسانی دستور کار">
        <SimpleForm validate={validateError} initialValues={{ WOTaskID}} toolbar={<Toolbar alwaysEnableSaveButton />}>
            <ReferenceInput disabled className={classes.sel} formClassName={classes.fir} label="کد فعالیت" textAlgin="right" source="WOTaskID" reference="PMWorks/WOTask">
                <SelectInput optionText="TaskID__TaskCode"/>
            </ReferenceInput>
            <ReferenceInput disabled className={classes.sel} formClassName={classes.sec} label="نام فعالیت" textAlgin="right" source="WOTaskID" reference="PMWorks/WOTask">
                <SelectInput optionText="TaskID__TaskName"/>
            </ReferenceInput>
            <Separator/>
            <ReferenceInput disabled className={classes.sel} formClassName={classes.fir} label="کد پرسنلی" textAlgin="right" source="PersonnelID" reference="PMWorks/Personnel">
                <SelectInput optionText="PersonnelCode" />
            </ReferenceInput>
            <PersonnelRefrenceInput formClassName={classes.sec} label="نام خانوادگی نیروی انسانی" textAlgin="right" source="PersonnelID" reference="PMWorks/Personnel" allowEmpty validate={required()} perPage={10000} />
            <Separator/>
            <DateInput formClassName={classes.fir} label="تاریخ انجام" source="WorkDate" />
            <NumberInput formClassName={classes.sec} textAlgin="right" label="مدت زمان انجام" source="WorkTime" />
        </SimpleForm>
    </Create>
    );
};


export default WOPersonnelCreate;