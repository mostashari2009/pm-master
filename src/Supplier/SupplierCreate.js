import * as React from "react";
import {
    SimpleForm,
    TextInput,
    Create
}
from 'react-admin';

const SupplierCreate = props => (
    <Create {...props} title="ایجاد تامین کننده">
        <SimpleForm>
            <TextInput label="کد تامین کننده" textAlgin="right" source="SupplierCode" />
            <TextInput label="نام تامین کننده" textAlgin="right" source="SupplierName" />
        </SimpleForm>
    </Create>
);


export default SupplierCreate;