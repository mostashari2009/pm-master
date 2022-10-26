import * as React from "react";
import {
    ReferenceInput,
    SelectInput,
    Filter,
    TextInput
}
from 'react-admin';

const SparePartCategoryFilter = (props) => (
    <Filter {...props}>
        <TextInput label="کد خانواده قطعه" textAlgin="right" source="SparePartCategoryCode" />
        <TextInput label="نام خانواده قطعه" textAlgin="right" source="SparePartCategoryName" />
    </Filter>
);


export default SparePartCategoryFilter;
