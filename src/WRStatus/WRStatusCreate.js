import * as React from "react";
import {
    SimpleForm,
    Toolbar,
    Create,
    TextInput,
    useNotify,
    useRefresh,
    useRedirect,
    ReferenceInput,
    SelectInput
}
from 'react-admin';
import { parse } from 'query-string';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import { TimeInputNow } from '../Components/TimeInputNow';
import { DateInputtoday } from '../Components/JalaliDatePickertoday';
import moment from "moment";

const useStyles = makeStyles({
    fir: { display: 'inline-block', verticalAlign: 'bottom' },
    sec: { display: 'inline-block' },
    width: { width: 533, '& label': {marginRight: '25px'}, '& svg': {display: 'none' } },
    last: { display: 'inline-block', marginRight: 0 },
    sel: { '& svg': {display: 'none' }},
});

const Separator = () => <Box pt="0em" />;

const validateError = (values) => {
    const errors = {};
    if (!values.StatusID) {
        errors.StatusID = 'وضعیت را وارد کنید';
    }
    return errors
};

const WorkRequestformat  = v => {
    let str = v ? `${v}` : '';
    str = str.padStart(4,0);
    let text = "WR0".concat(str);
    return text;
};


const WRStatusCreate = props => {

    const classes = useStyles();
    const notify = useNotify();
    const refresh = useRefresh();
    const redirect = useRedirect();
    var today = new Date();
    var time = moment().format("HH:mm");

    const { WorkRequestID: WorkRequestID_string } = parse(props.location.search);
    const WorkRequestID = WorkRequestID_string ? parseInt(WorkRequestID_string, 10) : '';
    
    const onSuccess = () => {
        notify(`دیتا ذخیره شد`)
        redirect(`/PMWorks/WorkRequest/${WorkRequestID}/show/PMWorks/WRStatus`);
        refresh();
    };

    return (
        <Create onSuccess={onSuccess} {...props} title="ایجاد وضعیت درخواست کار">
            <SimpleForm validate={validateError} initialValues={{ WorkRequestID, StatusDate: today, StatusTime: time}} redirect={redirect} toolbar={<Toolbar alwaysEnableSaveButton />}>
                <TextInput className={classes.width} disabled label="کد درخواست‌کار" source="WorkRequestID" format={WorkRequestformat}/>
                <Separator/>
                <DateInputtoday formClassName={classes.fir} label="تاریخ ثبت" source="StatusDate" disabled/>
                <TimeInputNow formClassName={classes.sec} label="ساعت ثبت" textAlgin="right" source="StatusTime"/>
                <Separator/>
                <ReferenceInput disabled className={classes.sel} formClassName={classes.fir} label="کد وضعیت" textAlgin="right" source="StatusID" reference="PMWorks/Status">
                    <SelectInput optionText="StatusCode" />
                </ReferenceInput>
                <ReferenceInput formClassName={classes.sec} label="نام وضعیت" textAlgin="right" source="StatusID" reference="PMWorks/StatusWR" filter={{ WorkRequestID: WorkRequestID }}>
                    <SelectInput optionText="StatusName" />
                </ReferenceInput>
                <Separator/>
                <TextInput multiline className={classes.width} label="توضیح" textAlgin="right" source="StatusDescription"/>
            </SimpleForm>
        </Create>
        );
    };
    
    
export default WRStatusCreate;