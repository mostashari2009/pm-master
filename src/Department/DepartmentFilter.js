import * as React from "react";
import {
    Filter,
    TextInput
}
from 'react-admin';

const DepartmentFilter = (props) => (
    <Filter {...props}>
        <TextInput label="کد دپارتمان" textAlgin="right" source="DepartmentCode__icontains" alwaysOn resettable/>
        <TextInput label="نام دپارتمان" textAlgin="right" source="DepartmentName__icontains" alwaysOn resettable/>
    </Filter>
);


export default DepartmentFilter;
