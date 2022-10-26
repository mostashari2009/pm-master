import * as React from "react";
import {
    ReferenceInput,
    SelectInput,
    Filter,
    TextInput
}
from 'react-admin';

const AssetClassDocumentFilter = (props) => (
    <Filter {...props}>
        <TextInput source="DocumentID__DocumentName__icontains" label="نام سند" textAlgin="right" alwaysOn resettable />
        <TextInput source="DocumentID__DocumentCode__icontains" label="کد سند" textAlgin="right" alwaysOn resettable />
    </Filter>
);


export default AssetClassDocumentFilter;
