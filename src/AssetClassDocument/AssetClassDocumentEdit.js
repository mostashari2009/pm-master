import * as React from "react";
import {
    Edit,
    SimpleForm,
    ReferenceInput,
    SelectInput,
    TextInput,
}
from 'react-admin';
import AssetClassDocumentTitle from './AssetClassDocumentTitle';


const AssetClassDocumentEdit = props => (
    <Edit title={<AssetClassDocumentTitle />} {...props}>
        <SimpleForm>
            <TextInput label="آی دی" textAlgin="right" disabled source="id" />
            <TextInput label="کد تجهیز" textAlgin="right" source="AssetClassID" />
            <TextInput label="کد سند" textAlgin="right" source="DocumentID" />
        </SimpleForm>
    </Edit>
);


export default AssetClassDocumentEdit;
