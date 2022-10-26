import * as React from "react";
import {
    SimpleForm,
    Toolbar,
    Create,
    required,
    NumberInput,
    TextInput,
    useNotify,
    useRefresh,
    useRedirect,
    ReferenceInput,
    SelectInput
}
from 'react-admin';
import { parse } from 'query-string';
import DelayRefrenceInput from './DelayRefrenceInput';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

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
    if (!values.DelayID) {
        errors.DelayID = 'تامین‌کننده را وارد کنید';
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


const WODelayCreate = props => {

    const classes = useStyles();
    const notify = useNotify();
    const refresh = useRefresh();
    const redirect = useRedirect();

    const { WorkOrderID: WorkOrderID_string } = parse(props.location.search);
    const WorkOrderID = WorkOrderID_string ? parseInt(WorkOrderID_string, 10) : '';

    const onSuccess = () => {
        notify(`دیتا ذخیره شد`)
        redirect(`/PMWorks/WODelay/create?WorkOrderID=${WorkOrderID}`);
        refresh();
    };

    return (
    <Create onSuccess={onSuccess} {...props} title="ایجاد تاخیر دستور کار">
        <SimpleForm validate={validateError} initialValues={{ WorkOrderID}} redirect={redirect} toolbar={<Toolbar alwaysEnableSaveButton />}>
            <ReferenceInput disabled className={classes.width} label="کد درخواست‌کار" source="WorkOrderID" textAlgin="right" reference="PMWorks/WorkOrder">
                <SelectInput source="WorkRequestID" optionText={<WorkOrderFormat />}/>
            </ReferenceInput>
            <ReferenceInput disabled className={classes.sel} formClassName={classes.fir} label="کد تاخیر" textAlgin="right" source="DelayID" reference="PMWorks/Delay">
                <SelectInput optionText="DelayCode" />
            </ReferenceInput>
            <DelayRefrenceInput formClassName={classes.sec} label="کد تاخیر" textAlgin="right" source="DelayID" reference="PMWorks/Delay" allowEmpty validate={required()} perPage={10000} />
            <Separator/>
            <NumberInput formClassName={classes.fir} textAlgin="right" label="روز" source="DayAmount" />
            <NumberInput formClassName={classes.sec} textAlgin="right" label="ساعت" source="HourAmount" />
            <Separator/>
            <TextInput multiline className={classes.width} label="توضیحات علت تاخیر" textAlgin="right" source="WODelayDescription"/>
        </SimpleForm>
    </Create>
    );
};


export default WODelayCreate;