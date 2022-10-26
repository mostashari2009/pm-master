import * as React from "react";
import {
    SimpleForm,
    Toolbar,
    Create,
    NumberInput,
    useNotify,
    SelectInput,
    useRefresh,
    useRedirect
}
from 'react-admin';
import { parse } from 'query-string';
import { DateTimeInput } from '../Components/JalaliDateTimePicker';
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
    if (!values.WOTemplateSchualingStartDate) {
        errors.WOTemplateSchualingStartDate = 'زمان شروع را وارد کنید';
    }
    if (!values.WOTemplateSchualingFinishDate) {
        errors.WOTemplateSchualingFinishDate = 'زمان پایان را وارد کنید';
    }
    if (!values.AmountFrequency) {
        errors.AmountFrequency = 'مقدار تناوب را وارد کنید';
    }
    if (!values.FrequencyName) {
        errors.FrequencyName = 'تناوب را وارد کنید';
    }
    return errors
};

const freq = [
    { _id: 'H', full_name: 'ساعتی'},
    { _id: 'D', full_name: 'روزانه'},
    { _id: 'W', full_name: 'هفتگی'},
    { _id: 'M', full_name: 'ماهانه'},
    { _id: 'Y', full_name: 'سالانه'},
];

const WOTemplateSchualingCreate = props => {

    const classes = useStyles();
    const notify = useNotify();
    const refresh = useRefresh();
    const redirect = useRedirect();

    const { WOTemplateID: WOTemplateID_string } = parse(props.location.search);
    const WOTemplateID = WOTemplateID_string ? parseInt(WOTemplateID_string, 10) : '';

    const onSuccess = () => {
        notify(`دیتا ذخیره شد`)
        redirect(`/PMWorks/WOTemplate/${WOTemplateID}/show/PMWorks/WOTemplateSchualing`);
        refresh();
    };

    return (
    <Create onSuccess={onSuccess} {...props} title="ایجاد برنامه ریزی">
        <SimpleForm validate={validateError} initialValues={{ WOTemplateID}} redirect={redirect} toolbar={<Toolbar alwaysEnableSaveButton />}>
            <DateTimeInput formClassName={classes.fir} label="زمان شروع" source="WOTemplateSchualingStartDate" />
            <DateTimeInput formClassName={classes.sec} label="زمان پایان" source="WOTemplateSchualingFinishDate" />
            <Separator/>
            <NumberInput formClassName={classes.fir} label="مقدار تناوب" textAlgin="right" source="AmountFrequency"/>
            <SelectInput formClassName={classes.sec} label="تناوب" textAlgin="right" source="FrequencyName" choices={freq} optionText="full_name" optionValue="_id" />
        </SimpleForm>
    </Create>
    );
};


export default WOTemplateSchualingCreate;