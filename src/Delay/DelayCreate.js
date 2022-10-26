import * as React from "react";
import {
    SimpleForm,
    TextInput,
    Create
}
from 'react-admin';

const DelayCreate = props => (
    <Create {...props} title="ایجاد تاخیر">
        <SimpleForm>
            <TextInput label="کد تاخیر" textAlgin="right" source="DelayCode" />
            <TextInput label="نام تاخیر" textAlgin="right" source="DelayName" />
        </SimpleForm>
    </Create>
);


export default DelayCreate;