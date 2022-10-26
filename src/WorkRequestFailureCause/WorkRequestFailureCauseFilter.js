import * as React from "react";
import {
    ReferenceInput,
    SelectInput,
    Filter,
    TextInput
}
from 'react-admin';

const WorkRequestFailureCauseFilter = (props) => (
    <Filter {...props}>
        <TextInput label="پرسنل" textAlgin="right" source="WorkRequestID" />
        <TextInput label="شغل" textAlgin="right" source="FailureCauseID" />
    </Filter>
);


export default WorkRequestFailureCauseFilter;
