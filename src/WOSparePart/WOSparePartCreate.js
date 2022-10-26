import * as React from "react";
import {
    SimpleForm,
    Toolbar,
    Create,
    NumberInput,
    ReferenceInput,
    SelectInput,
    FormDataConsumer,
    required,
    useNotify,
    useRefresh,
    useRedirect
}
from 'react-admin';
import { parse } from 'query-string';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import SparePartRefrenceInput from './SparePartRefrenceInput';

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
    if (!values.SparePartID) {
        errors.SparePartID = 'قطعه را وارد کنید';
    }
    return errors
};


const WOSparePartCreate = props => {

    const classes = useStyles();
    const notify = useNotify();
    const refresh = useRefresh();
    const redirect = useRedirect();

    const { WOTaskID: WOTaskID_string } = parse(props.location.search);
    const WOTaskID = WOTaskID_string ? parseInt(WOTaskID_string, 10) : '';

    const onSuccess = () => {
        notify(`دیتا ذخیره شد`)
        redirect(`/PMWorks/WOSparePart/create?WOTaskID=${WOTaskID}`);
        refresh();
    };

    return (
    <Create onSuccess={onSuccess} {...props} title="ایجاد قطعه دستور کار">
        <SimpleForm validate={validateError} initialValues={{ WOTaskID}} toolbar={<Toolbar alwaysEnableSaveButton />}>
            <ReferenceInput disabled className={classes.sel} formClassName={classes.fir} label="کد فعالیت" textAlgin="right" source="WOTaskID" reference="PMWorks/WOTask">
                <SelectInput optionText="TaskID__TaskCode"/>
            </ReferenceInput>
            <ReferenceInput disabled className={classes.sel} formClassName={classes.sec} label="نام فعالیت" textAlgin="right" source="WOTaskID" reference="PMWorks/WOTask">
                <SelectInput optionText="TaskID__TaskName"/>
            </ReferenceInput>
            <Separator/>
            <ReferenceInput disabled className={classes.sel} formClassName={classes.fir} label="کد قطعه" textAlgin="right" source="SparePartID" reference="PMWorks/SparePart">
                <SelectInput optionText="SparePartCode" />
            </ReferenceInput>
            <SparePartRefrenceInput formClassName={classes.sec} label="نام قطعه" textAlgin="right" source="SparePartID" reference="PMWorks/SparePart" allowEmpty validate={required()} perPage={10000} />
            <Separator/>
            <NumberInput formClassName={classes.fir} textAlgin="right" label="تعداد" source="SparePartAmount" />
        </SimpleForm>
    </Create>
    );
};


export default WOSparePartCreate;