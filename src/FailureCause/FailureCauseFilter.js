import * as React from "react";
import {
    ReferenceInput,
    SelectInput,
    Filter,
    TextInput
}
from 'react-admin';

const FailureCauseFilter = (props) => (
    <Filter {...props}>
        <TextInput label="کد علت خرابی" textAlgin="right" source="FailureCauseCode__icontains" alwaysOn resettable/>
        <TextInput label="نام علت خرابی" textAlgin="right" source="FailureCauseName__icontains" alwaysOn resettable/>
    </Filter>
);


export default FailureCauseFilter;
