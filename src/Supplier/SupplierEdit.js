import * as React from "react";
import {
    Edit,
    SimpleForm,
    TextInput,
}
from 'react-admin';
import SupplierTitle from './SupplierTitle';

const SupplierEdit = props => (
    <Edit title={<SupplierTitle />} {...props}>
        <SimpleForm>
            <TextInput label="کد تامین کننده" textAlgin="right" source="SupplierCode" />
            <TextInput label="نام تامین کننده" textAlgin="right" source="SupplierName" />
        </SimpleForm>
    </Edit>
);


export default SupplierEdit;
