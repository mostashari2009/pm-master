import * as React from "react";
import {
    Edit,
    SimpleForm,
    ReferenceInput,
    SelectInput,
    TextInput,
    ShowButton,
    ListButton,
    TopToolbar,    
    NumberInput
}
from 'react-admin';
import WOTemplateTitle from './WOTemplateTitle';
import { DateInputtoday } from '../Components/JalaliDatePickertoday';
import { makeStyles } from '@material-ui/core/styles';
import { DateInput } from '../Components/JalaliDatePicker';
import { Box } from '@material-ui/core';

const useStyles = makeStyles({
    fir: { display: 'inline-block', verticalAlign: 'top' },
    sec: { display: 'inline-block' },
    width: { width: 533, '& label': {marginRight: '25px'} },
    last: { display: 'inline-block', marginRight: 0 },
    sel: { '& svg': {display: 'none' }},
});

const EditActions = ({ basePath, data, resource }) => (
    <TopToolbar>
        <ListButton basePath={basePath} />
        <ShowButton basePath={basePath} record={data} />
    </TopToolbar>
);

const Separator = () => <Box pt="0em" />;

const validateError = (values) => {
    const errors = {};
    if (!values.WOTemplateCode) {
        errors.WOTemplateCode = 'کد را وارد کنید';
    }
    if (!values.WOTemplateName) {
        errors.WOTemplateName = 'نام را وارد کنید';
    }
    return errors
};

const WOTemplateEdit = (props) => {
    const classes = useStyles();

    return(
    <Edit title={<WOTemplateTitle />} {...props}>
        <SimpleForm>
            <DateInputtoday  label="تاریخ ثبت" source="WODateOfRegistration" disabled/>
            <TextInput formClassName={classes.fir} label="کد" source="WOTemplateCode" textAlgin="right"/>
            <TextInput formClassName={classes.sec} label="عنوان" source="WOTemplateName" textAlgin="right"/>
            <Separator/>
            <NumberInput formClassName={classes.fir}  label="مدت انجام(روز)" textAlgin="right" source="WOTemplateDurationDay" />
            <NumberInput formClassName={classes.sec} label="مدت انجام(ساعت)" textAlgin="right" source="WOTemplateDurationHour" />
            <Separator/>
            <NumberInput formClassName={classes.fir} label="بازه ایجاد(روز)" textAlgin="right" source="WOTemplateAlarmDay" />
            <NumberInput formClassName={classes.sec} label="بازه ایجاد(ساعت)" textAlgin="right" source="WOTemplateAlarmHour" />
            <Separator/>
            <ReferenceInput className={classes.sel} formClassName={classes.fir} label="دپارتمان" textAlgin="right" source="DepartmentID" reference="PMWorks/Department">
                 <SelectInput optionText="DepartmentName" />
            </ReferenceInput>
            <ReferenceInput className={classes.sel} formClassName={classes.sec} label="نوع" textAlgin="right" source="WOTemplateTypeID" reference="PMWorks/WOTemplateType">
                <SelectInput optionText="WOTemplateTypeName" />
            </ReferenceInput>
            <Separator/>
            <DateInput formClassName={classes.fir} label="تاریخ شروع" source="DateOfPlanStart" />
            <DateInput formClassName={classes.sec} label="تاریخ پایان" source="DateOfPlanFinish" />
            <Separator/>
            <TextInput formClassName={classes.fir} multiline className={classes.width} label="توضیحات" textAlgin="right" source="WODescription"/>
        </SimpleForm>
    </Edit>
)};


export default WOTemplateEdit;
