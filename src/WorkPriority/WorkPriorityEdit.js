import * as React from "react";
import {
    Edit,
    SimpleForm,
    TextInput,
    NumberInput
}
from 'react-admin';
import WorkPriorityTitle from './WorkPriorityTitle';

const WorkPriorityEdit = props => (
    <Edit title={<WorkPriorityTitle />} {...props}>
        <SimpleForm>
            <TextInput label="کد اولویت" textAlgin="right" source="WorkPriorityCode" />
            <TextInput label="نام اولویت" textAlgin="right" source="WorkPriorityName" />
            <NumberInput label="مقدار اولویت" textAlgin="right" source="WorkPriorityValue" />
        </SimpleForm>
    </Edit>
);


export default WorkPriorityEdit;
