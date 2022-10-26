import * as React from "react";
import {
    Filter,
    TextInput
}
from 'react-admin';

const FailureModeFilter = (props) => (
    <Filter {...props}>
        <TextInput label="کد حالت خرابی" textAlgin="right" source="FailureModeCode__icontains" alwaysOn resettable/>
        <TextInput label="عنوان حالت خرابی" textAlgin="right" source="FailureModeName__icontains" alwaysOn resettable/>
    </Filter>
);


export default FailureModeFilter;
