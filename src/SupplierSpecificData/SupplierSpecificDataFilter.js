import * as React from "react";
import {
    ReferenceInput,
    SelectInput,
    Filter,
    TextInput
}
from 'react-admin';

const SupplierSpecificDataFilter = (props) => (
    <Filter {...props}>
        <TextInput label="تامین کننده" textAlgin="right" source="SupplierID" />
        <TextInput label="ویژگی" textAlgin="right" source="SupplierSpecificID" />
        <TextInput label="مقدار" textAlgin="right" source="SpecificAmount" />
    </Filter>
);


export default SupplierSpecificDataFilter;
