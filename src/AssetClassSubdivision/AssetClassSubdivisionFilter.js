import * as React from "react";
import {
    ReferenceInput,
    SelectInput,
    Filter,
    TextInput
}
from 'react-admin';

const AssetClassSubdivisionFilter = (props) => (
    <Filter {...props}>
        <TextInput source="AssetClassChildID__AssetClassCode__icontains" label="کد زیرنجهیز" textAlgin="right" alwaysOn resettable />
        <TextInput source="AssetClassChildID__AssetClassName__icontains" label="عنوان زیرنجهیز" textAlgin="right" alwaysOn resettable />
    </Filter>
);


export default AssetClassSubdivisionFilter;
