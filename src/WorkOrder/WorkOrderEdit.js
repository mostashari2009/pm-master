import * as React from "react";
import {
    Edit,
    SimpleForm,
    ReferenceInput,
    SelectInput,
    TextInput,
}
from 'react-admin';
import WorkOrderTitle from './WorkOrderTitle';
import { DateInputtoday } from '../Components/JalaliDatePickertoday';
import { DateInput } from '../Components/JalaliDatePicker';


const WorkOrderEdit = props => (
    <Edit title={<WorkOrderTitle />} {...props}>
        <SimpleForm>
            <DateInputtoday label="تاریخ ثبت" source="WODateOfRegistration" disabled/>
            <DateInput label="تاریخ شروع" source="DateOfPlanStart" />
            <DateInput label="تاریخ پایان" source="DateOfPlanFinish" />
            <TextInput multiline label="توضیحات" textAlgin="right" source="WODescription"/>
        </SimpleForm>
    </Edit>
);


export default WorkOrderEdit;
