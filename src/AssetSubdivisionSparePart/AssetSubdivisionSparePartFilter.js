import * as React from "react";
import {
    ReferenceInput,
    SelectInput,
    Filter,
    TextInput
}
from 'react-admin';

const AssetSubdivisionSparePartFilter = (props) => (
    <Filter {...props}>
        <TextInput label="تجهیز" textAlgin="right" source="AssetSubdivisionID" />
        <TextInput label="قطعه" textAlgin="right" source="SparePartID" />
    </Filter>
);


export default AssetSubdivisionSparePartFilter;
