import * as React from "react";
import { useState } from 'react';
import {
    SimpleForm,
    ReferenceInput,
    SelectInput,
    TextInput,
    Create,
    NumberInput,
    Toolbar,
    TopToolbar,
    ListButton,
    useNotify,
    useRefresh,
    useRedirect
}
from 'react-admin';
import DepartmentRefrenceInput from './DepartmentRefrenceInput';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import CodeInput from '../Components/CodeInput';


const CreateActions = ({ basePath, record, resource }) => (
    <TopToolbar>
        <ListButton basePath={basePath} />
    </TopToolbar>
);

const validateError = (values) => {
    const errors = {};
    if (!values.WOTemplateCode) {
        errors.WOTemplateCode = 'کد را وارد کنید';
    }
    if (!values.WOTemplateName) {
        errors.WOTemplateName = 'نام را وارد کنید';
    }
    if (!values.WOTemplateDurationDay) {
        errors.WOTemplateDurationDay = 'روز تناوب را وارد کنید';
    }
    if (!values.WOTemplateDurationHour) {
        errors.WOTemplateDurationHour = 'ساعت تناوب را وارد کنید';
    }
    if (!values.WOTemplateAlarmDay) {
        errors.WOTemplateAlarmDay = 'روز اعلام را وارد کنید';
    }
    if (!values.WOTemplateAlarmHour) {
        errors.WOTemplateAlarmHour = 'ساعت اعلام را وارد کنید';
    }
    if (!values.WOTemplateTypeID) {
        errors.WOTemplateTypeID = 'نوع را وارد کنید';
    }
    if (!values.DepartmentID) {
        errors.DepartmentID = 'دپارتمان را وارد کنید';
    }
    return errors
};

const useStyles = makeStyles({
    fir: { display: 'inline-block', verticalAlign: 'top' },
    sec: { display: 'inline-block', marginRight: 0 },
    sel: { '& svg': {display: 'none' }},
});

const Separator = () => <Box pt="0em" />;

const WOTemplateCreate = props => {
    const {source, ...rest} = props;
    const classes = useStyles();
    const notify = useNotify();
    const refresh = useRefresh();
    const redirect = useRedirect();
    const [Value, setValue] = useState('');

    const onSuccess = () => {
        notify(`دیتا ذخیره شد`)
        redirect('/PMWorks/WOTemplate/create');
        refresh();
    };
   
    return (
    <Create actions={<CreateActions />} onSuccess={onSuccess} {...props} title="ایجاد تناوب دستور کار">
        <SimpleForm validate={validateError} toolbar={<Toolbar alwaysEnableSaveButton />}>
            <CodeInput formClassName={classes.fir} value={Value}  onChange={event => { let val = event.target.value;
                                                    val = val.replace(/[^\x00-\x7F]/ig, "");
                                                    setValue(val)
                                                    }}
            label="کد"
            source="WOTemplateCode" {...rest}/>
            <TextInput formClassName={classes.sec} label="نام" textAlgin="right" source="WOTemplateName"/>
            <Separator />
            <NumberInput formClassName={classes.fir} label="مدت انجام(روز)" textAlgin="right" source="WOTemplateDurationDay"/>
            <NumberInput formClassName={classes.sec} label="مدت انجام(ساعت)" textAlgin="right" source="WOTemplateDurationHour"/>
            <Separator />
            <NumberInput formClassName={classes.fir} label="بازه ایجاد(روز)" textAlgin="right" source="WOTemplateAlarmDay"/>
            <NumberInput formClassName={classes.sec} label="بازه ایجاد(ساعت)" textAlgin="right" source="WOTemplateAlarmHour"/>
            <Separator />
            <ReferenceInput className={classes.sel} disabled formClassName={classes.fir} label="کد نوع" textAlgin="right" source="WOTemplateTypeID" reference="PMWorks/WOTemplateType">
                <SelectInput optionText="WOTemplateTypeCode" />
            </ReferenceInput>
            <ReferenceInput formClassName={classes.sec} label="عنوان نوع" textAlgin="right" source="WOTemplateTypeID" reference="PMWorks/WOTemplateType">
                <SelectInput optionText="WOTemplateTypeName" />
            </ReferenceInput>
            <Separator />
            <ReferenceInput className={classes.sel} disabled formClassName={classes.fir} label="کد دپارتمان" textAlgin="right" source="DepartmentID" reference="PMWorks/Department">
                <SelectInput optionText="DepartmentCode" />
            </ReferenceInput>
            <DepartmentRefrenceInput className={classes.sel} formClassName={classes.sec} label="عنوان دپارتمان" textAlgin="right" source="DepartmentID" reference="PMWorks/Department" perPage={10000} />
        </SimpleForm>
    </Create>
);
};


export default WOTemplateCreate;
