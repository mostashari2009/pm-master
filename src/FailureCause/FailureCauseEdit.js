import * as React from "react";
import {
    Edit,
    SimpleForm,
    ReferenceInput,
    SelectInput,
    TextInput,
}
from 'react-admin';
import FailureCauseTitle from './FailureCauseTitle';


const FailureCauseEdit = props => (
    <Edit title={<FailureCauseTitle />} {...props}>
        <SimpleForm>
            <TextInput label="کد نوع خرابی" textAlgin="right" source="FailureCauseCode" />
            <TextInput label="نام نوع خرابی" textAlgin="right" source="FailureCauseName" />
            <TextInput multiline label="توضیحات نوع خرابی" textAlgin="right" source="FailureCauseDescription" toolbar={[ ['bold', 'italic', 'underline', 'link'] ]} />
            <TextInput label="کلاس تجهیز" textAlgin="right" source="FailureModeID" />
        </SimpleForm>
    </Edit>
);


export default FailureCauseEdit;
