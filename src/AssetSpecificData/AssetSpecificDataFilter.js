import * as React from "react";
import {
    ReferenceInput,
    SelectInput,
    Filter,
    TextInput
}
from 'react-admin';

const AssetSpecificDataFilter = (props) => (
    <Filter {...props}>
        <TextInput label="تجهیز" textAlgin="right" source="AssetSubdivisionID" />
        <TextInput label="ویژگی" textAlgin="right" source="SpecificDataID" />
    </Filter>
);


export default AssetSpecificDataFilter;
