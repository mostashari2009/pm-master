import * as React from "react";
import {
    Edit,
    SimpleForm,
    TextInput,
}
from 'react-admin';
import TypeWrTitle from './TypeWrTitle';

const TypeWrEdit = props => (
    <Edit title={<TypeWrTitle />} {...props}>
        <SimpleForm>
            <TextInput label="کد نوع" textAlgin="right" source="TypeWrCode" />
            <TextInput label="نام نوع" textAlgin="right" source="TypeWrName" />
        </SimpleForm>
    </Edit>
);


export default TypeWrEdit;
