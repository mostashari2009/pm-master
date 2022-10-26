import * as React from "react";
import {
    Edit,
    SimpleForm,
    TextInput,
}
from 'react-admin';
import SupplierSpecificDataTitle from './SupplierSpecificDataTitle';
import SupplierSpecificRefrenceInput from './SupplierSpecificRefrenceInput';


const SupplierSpecificDataEdit = props => (
    <Edit title={<SupplierSpecificDataTitle />} {...props}>
        <SimpleForm>
            <SupplierSpecificRefrenceInput label="کد ویژگی" textAlgin="right" source="SupplierSpecificID" reference="PMWorks/SupplierSpecific" perPage={10000} />
            <TextInput label="مقدار ویژگی" textAlgin="right" source="SpecificAmount" />
        </SimpleForm>
    </Edit>
);


export default SupplierSpecificDataEdit;
