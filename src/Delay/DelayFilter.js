import * as React from "react";
import {
    Filter,
    TextInput
}
from 'react-admin';

const DelayFilter = (props) => (
    <Filter {...props}>
        <TextInput label="کد تاخیر" textAlgin="right" source="DelayCode" />
        <TextInput label="نام تاخیر" textAlgin="right" source="DelayName" />
    </Filter>
);


export default DelayFilter;
