import * as React from "react";
import {
    Edit,
    SimpleForm,
    TextInput,
}
from 'react-admin';
import WorkRequestFailureCauseTitle from './WorkRequestFailureCauseTitle';


const WorkRequestFailureCauseEdit = props => (
    <Edit title={<WorkRequestFailureCauseTitle />} {...props}>
        <SimpleForm>
            <TextInput label="پرسنل" textAlgin="right" source="WorkRequestID" />
            <TextInput label="شغل" textAlgin="right" source="FailureCauseID" />
        </SimpleForm>
    </Edit>
);


export default WorkRequestFailureCauseEdit;
