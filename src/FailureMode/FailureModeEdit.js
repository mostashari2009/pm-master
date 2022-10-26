import * as React from "react";
import {
    Edit,
    SimpleForm,
    ReferenceInput,
    SelectInput,
    TextInput,
}
from 'react-admin';
import FailureModeTitle from './FailureModeTitle';
import RichTextInput from 'ra-input-rich-text';


const FailureModeEdit = props => (
    <Edit title={<FailureModeTitle />} {...props}>
        <SimpleForm>
            <TextInput label="کد نوع خرابی" textAlgin="right" source="FailureModeCode" />
            <TextInput label="نام نوع خرابی" textAlgin="right" source="FailureModeName" />
            <RichTextInput label="توضیحات نوع خرابی" textAlgin="right" source="FailureModeDescription" toolbar={[ ['bold', 'italic', 'underline', 'link'] ]} />
            <TextInput label="کلاس تجهیز" textAlgin="right" source="AssetClassID" />
        </SimpleForm>
    </Edit>
);


export default FailureModeEdit;
