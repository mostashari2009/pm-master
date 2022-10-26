import * as React from "react";
import {
    Filter,
    TextInput
}
from 'react-admin';

const TypeWrFilter = (props) => (
    <Filter {...props}>
        <TextInput label="کد کلاس" textAlgin="right" source="TypeWrCode__icontains" alwaysOn resettable/>
        <TextInput label="نام کلاس" textAlgin="right" source="TypeWrName__icontains" alwaysOn resettable/>
    </Filter>
);


export default TypeWrFilter;
