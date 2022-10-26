import * as React from "react";
import {
    Edit,
    SimpleForm,
    ReferenceInput,
    SelectInput,
    TextInput,
}
from 'react-admin';
import AssetClassSubdivisionTitle from './AssetClassSubdivisionTitle';


const AssetClassSubdivisionEdit = props => (
    <Edit title={<AssetClassSubdivisionTitle />} {...props}>
        <SimpleForm>
            <TextInput label="کلاس تجهیز پدر" textAlgin="right" source="AssetClassFatherID" />
            <TextInput label="کلاس تجهیز فرزند" textAlgin="right" source="AssetClassChildID" />
            <TextInput label="تعداد" textAlgin="right" source="AssetClassChildNumber" />
        </SimpleForm>
    </Edit>
);


export default AssetClassSubdivisionEdit;
