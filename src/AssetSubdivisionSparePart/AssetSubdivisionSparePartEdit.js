import * as React from "react";
import {
    Edit,
    SimpleForm,
    ReferenceInput,
    SelectInput,
    TextInput,
}
from 'react-admin';
import AssetSubdivisionSparePartTitle from './AssetSubdivisionSparePartTitle';


const AssetSubdivisionSparePartEdit = props => (
    <Edit title={<AssetSubdivisionSparePartTitle />} {...props}>
        <SimpleForm>
            <TextInput label="آی دی" textAlgin="right" disabled source="id" />
            <ReferenceInput label="تجهیز" textAlgin="right" disabled source="AssetSubdivisionID" reference="PMWorks/AssetSubdivision">
                <SelectInput source="id" />
            </ReferenceInput>
            <ReferenceInput label="قطعه" textAlgin="right" disabled source="SparePartID" reference="PMWorks/SparePart">
                <SelectInput source="SparePartName" />
            </ReferenceInput>
        </SimpleForm>
    </Edit>
);


export default AssetSubdivisionSparePartEdit;
