import * as React from "react";
import {
    SimpleForm,
    ReferenceInput,
    SelectInput,
    TextInput,
    Toolbar,
    Create,
    required
}
from 'react-admin';
import { parse } from 'query-string';

const FailureCauseCreate = props => {

    const { FailureModeID: FailureModeID_string } = parse(props.location.search);
    const FailureModeID = FailureModeID_string ? parseInt(FailureModeID_string, 10) : '';
    const redirect = FailureModeID ? `/PMWorks/FailureMode/${FailureModeID}/show/PMWorks/FailureCause` : false;

    return (
    <Create {...props} title="ایجاد علت خرابی">
        <SimpleForm initialValues={{ FailureModeID}} redirect={redirect} toolbar={<Toolbar alwaysEnableSaveButton />}>
            <TextInput label="کد علت خرابی" textAlgin="right" source="FailureCauseCode" />
            <TextInput label="نام علت خرابی" textAlgin="right" source="FailureCauseName" />
            <TextInput multiline label="توضیحات علت خرابی" textAlgin="right" source="FailureCauseDescription" />
        </SimpleForm>
    </Create>
    );
};


export default FailureCauseCreate;
