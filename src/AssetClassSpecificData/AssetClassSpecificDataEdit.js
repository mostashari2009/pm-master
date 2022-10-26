import * as React from "react";
import {
    Edit,
    SimpleForm,
    ReferenceInput,
    SelectInput,
    TextInput,
}
from 'react-admin';
import AssetClassSpecificDataTitle from './AssetClassSpecificDataTitle';


const AssetClassSpecificDataEdit = props => (
    <Edit title={<AssetClassSpecificDataTitle />} {...props}>
        <SimpleForm>
            <TextInput label="آی دی" textAlgin="right" disabled source="id" />
            <TextInput label="کد کلاس تجهیز" textAlgin="right" source="AssetClassID" />
            <TextInput label="نام کلاس تجهیز" textAlgin="right" source="SpecificDataID" />
        </SimpleForm>
    </Edit>
);


export default AssetClassSpecificDataEdit;
