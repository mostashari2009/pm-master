import * as React from "react";
import {
    Filter,
    TextInput
}
from 'react-admin';

const SparePartDimensionFilter = (props) => (
    <Filter {...props}>
        <TextInput label="کد سطح" textAlgin="right" source="SparePartDimensionCode__icontains" alwaysOn resettable/>
        <TextInput label="نام سطح" textAlgin="right" source="SparePartDimensionName__icontains" alwaysOn resettable/>
    </Filter>
);


export default SparePartDimensionFilter;
