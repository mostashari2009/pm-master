import * as React from "react";
import {
    SimpleForm,
    TextInput,
    Create,
    NumberInput
}
from 'react-admin';

const WorkPriorityCreate = props => (
    <Create {...props} title="ایجاد اولویت درخواست کار">
        <SimpleForm>
            <TextInput label="کد اولویت" textAlgin="right" source="WorkPriorityCode" />
            <TextInput label="نام اولویت" textAlgin="right" source="WorkPriorityName" />
            <NumberInput label="مقدار اولویت" textAlgin="right" source="WorkPriorityValue" />
        </SimpleForm>
    </Create>
);


export default WorkPriorityCreate;