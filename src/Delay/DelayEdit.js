import * as React from "react";
import {
    Edit,
    SimpleForm,
    TextInput,
}
from 'react-admin';
import DelayTitle from './DelayTitle';

const DelayEdit = props => (
    <Edit title={<DelayTitle />} {...props}>
        <SimpleForm>
            <TextInput label="کد تاخیر" textAlgin="right" source="DelayCode" />
            <TextInput label="نام تاخیر" textAlgin="right" source="DelayName" />
        </SimpleForm>
    </Edit>
);


export default DelayEdit;
